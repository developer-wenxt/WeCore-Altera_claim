const oracledb = require('oracledb');

// Initialize Oracle client (optional for thin mode)
// oracledb.initOracleClient({ libDir: '/path/to/instant/client' });

const pool = oracledb.createPool({
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  connectString: `${process.env.DB_HOST}:${process.env.DB_PORT || 1521}/${process.env.DB_SERVICE_NAME || process.env.DB_NAME}`,
  poolMax: 10,
  poolMin: 2,
  poolIncrement: 1,
  poolTimeout: 60
});

module.exports = {
  getConnection: async () => {
    return await pool.getConnection();
  },
  execute: async (sql, binds = [], options = {}) => {
    let connection;
    try {
      connection = await pool.getConnection();
      const result = await connection.execute(sql, binds, options);
      return result;
    } finally {
      if (connection) {
        try {
          await connection.close();
        } catch (err) {
          console.error('Error closing connection:', err);
        }
      }
    }
  }
};