require('dotenv').config();
const path = require('path');
const oracledb = require('oracledb');

try {
  oracledb.initOracleClient({ libDir: 'C:\\Users\\wenxt039\\OneDrive - WeNxt Technologies\\Desktop\\asdfg\\WeCore-Altera\\instantclient_19_22' });
} catch (err) {
  console.error('Whoops! Error initializing Oracle Client:', err);
  process.exit(1);
}

const app = require('./src/app');

const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || '0.0.0.0';

app.listen(PORT, HOST, () => {
  console.log(`Server running at http://${HOST}:${PORT}`);
});
