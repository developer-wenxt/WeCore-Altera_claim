const { sequelize } = require('../models');
const oracledb = require('oracledb');

exports.createSettlement = async (data) => {
  const { P_CE_SYS_ID, P_CLM_SYS_ID, P_CS_DT, P_LOGIN_USER_ID } = data;

  const plsql = `
    BEGIN
      PR_CLM_SETL_INSERT(P_CE_SYS_ID  => :P_CE_SYS_ID,
                         P_CLM_SYS_ID => :P_CLM_SYS_ID,
                         P_CS_DT      => :P_CS_DT,
                         P_LOGIN_USER_ID => :P_LOGIN_USER_ID);
    COMMIT;                     
    END;
  `;

  const bind = {
    P_CE_SYS_ID: { dir: oracledb.BIND_IN, val: P_CE_SYS_ID !== undefined ? Number(P_CE_SYS_ID) : null, type: oracledb.NUMBER },
    P_CLM_SYS_ID: { dir: oracledb.BIND_IN, val: P_CLM_SYS_ID !== undefined ? Number(P_CLM_SYS_ID) : null, type: oracledb.NUMBER },
    P_CS_DT: { dir: oracledb.BIND_IN, val: P_CS_DT ? new Date(P_CS_DT) : null, type: oracledb.DATE },
    P_LOGIN_USER_ID: { dir: oracledb.BIND_IN, val: P_LOGIN_USER_ID || null, type: oracledb.STRING }
  };

  let connection;
  try {
    connection = await sequelize.connectionManager.getConnection();
    const result = await connection.execute(plsql, bind, { autoCommit: true });
    return result;
  } catch (error) {
    console.error('Error executing createSettlement:', error);
    throw error;
  } finally {
    if (connection) {
      await sequelize.connectionManager.releaseConnection(connection);
    }
  }
};
