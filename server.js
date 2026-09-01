require('dotenv').config();
const path = require('path');
const oracledb = require('oracledb');

try {
  let initOptions = {};
  if (process.env.ORACLE_LIB_DIR) {
    initOptions.libDir = process.env.ORACLE_LIB_DIR;
  } else if (process.platform === 'win32') {
    initOptions.libDir = 'C:\\Users\\wenxt039\\OneDrive - WeNxt Technologies\\Desktop\\asdfg\\WeCore-Altera\\instantclient_19_22';
  }
  
  // On Linux/Docker, LD_LIBRARY_PATH is used so we can pass empty options or just not set libDir
  oracledb.initOracleClient(initOptions);
} catch (err) {
  console.error('Whoops! Error initializing Oracle Client:', err);
  process.exit(1);
}

const app = require('./src/app');
const PORT = process.env.PORT || 7777;

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
