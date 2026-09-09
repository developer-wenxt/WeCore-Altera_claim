require('dotenv').config();
const path = require('path');
const oracledb = require('oracledb');

try {
  if (process.env.ORACLE_CLIENT_DIR) {
    oracledb.initOracleClient({ libDir: process.env.ORACLE_CLIENT_DIR });
  } else if (process.platform === 'linux' && process.env.LD_LIBRARY_PATH) {
    oracledb.initOracleClient();
  }
  // If no libDir or LD_LIBRARY_PATH specified, node-oracledb 6+ defaults to Thin mode automatically
} catch (err) {
  console.error('Warning/Error initializing Oracle Client (Thick mode):', err.message);
  // Do not crash immediately if thin mode might work
}

const app = require('./src/app');
const PORT = process.env.PORT || 7777;

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
