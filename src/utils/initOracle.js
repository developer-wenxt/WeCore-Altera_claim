const fs = require('fs');
const path = require('path');
const oracledb = require('oracledb');

let isInitialized = false;

function initOracle() {
  if (isInitialized) {
    return;
  }

  if (typeof oracledb.isThinMode === 'function' && !oracledb.isThinMode()) {
    isInitialized = true;
    return;
  }

  try {
    // 1. Explicit env variable directory
    if (process.env.ORACLE_CLIENT_DIR && fs.existsSync(process.env.ORACLE_CLIENT_DIR)) {
      const tnsAdminPath = path.join(process.env.ORACLE_CLIENT_DIR, 'network', 'admin');
      if (fs.existsSync(tnsAdminPath) && !process.env.TNS_ADMIN) {
        process.env.TNS_ADMIN = tnsAdminPath;
      }
      oracledb.initOracleClient({ libDir: process.env.ORACLE_CLIENT_DIR });
      console.log(`Oracle Thick mode initialized using ORACLE_CLIENT_DIR at: ${process.env.ORACLE_CLIENT_DIR}`);
      isInitialized = true;
      return;
    }

    // 2. Linux environment with LD_LIBRARY_PATH set
    if (process.platform === 'linux' && process.env.LD_LIBRARY_PATH) {
      oracledb.initOracleClient();
      console.log('Oracle Thick mode initialized using Linux LD_LIBRARY_PATH');
      isInitialized = true;
      return;
    }

    // 3. Dynamic search for instantclient directories (supports SEA executable & relative pathing)
    const isSEA = process.execPath.endsWith('wecore-altera.exe') || process.execPath.endsWith('wecore-altera');
    const baseDir = isSEA ? path.dirname(process.execPath) : path.join(__dirname, '../../');

    let libPath = null;
    if (fs.existsSync(baseDir)) {
      const dirs = fs.readdirSync(baseDir).filter(dir => {
        const fullPath = path.join(baseDir, dir);
        return dir.startsWith('instantclient_') && fs.statSync(fullPath).isDirectory();
      });

      if (dirs.length > 0) {
        // Prioritize instantclient_11_2 (lower client version for broader legacy Oracle DB support), fallback to any available client
        const preferredClient = dirs.find(d => d === 'instantclient_11_2') || dirs[0];
        libPath = path.join(baseDir, preferredClient);
      }
    }

    if (libPath && fs.existsSync(libPath)) {
      const tnsAdminPath = path.join(libPath, 'network', 'admin');
      if (fs.existsSync(tnsAdminPath) && !process.env.TNS_ADMIN) {
        process.env.TNS_ADMIN = tnsAdminPath;
      }
      oracledb.initOracleClient({ libDir: libPath });
      console.log(`Oracle Thick mode initialized using Instant Client at: ${libPath}`);
    } else {
      oracledb.initOracleClient();
      console.log('Oracle Thick mode initialized using default system library path');
    }

    isInitialized = true;
  } catch (err) {
    if (err.code === 'NJS-090' || err.code === 'NJS-009' || (err.message && err.message.includes('already called'))) {
      isInitialized = true;
    } else {
      console.warn('Warning/Error initializing Oracle Client (Thick mode):', err.message || err);
    }
  }
}

module.exports = initOracle;
