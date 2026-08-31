const { sequelize } = require('../models');
const oracledb = require('oracledb');

exports.approveSettlement = async (data) => {
  const { 
    P_CLM_SYS_ID, 
    CS_GEN_CLM_AC_YN, 
    P_APPR_UID, 
    CS_APPR_DT, 
    CS_GEN_CLM_COINS_AC_YN, 
    CS_FINAL_YN, 
    CLM_CLOSE_REASON_CODE, 
    CLM_CLOSE_REMARKS 
  } = data;

  const plsql = `
    DECLARE
      M_ERR_YN    VARCHAR2(1);
      M_ERR_MESG  VARCHAR2(1000);
    BEGIN
      PR_CLM_SETL_APPROVE(P_CLM_SYS_ID             => :P_CLM_SYS_ID,
                          P_GEN_AC_YN              => :P_GEN_AC_YN,
                          P_APPR_UID               => :P_APPR_UID,
                          P_APPR_DT                => :P_APPR_DT,
                          P_CLM_FINAL_YN           => :P_CLM_FINAL_YN,
                          P_CLM_CLOSE_REASON_CODE  => :P_CLM_CLOSE_REASON_CODE,
                          P_CLM_CLOSE_REMARKS      => :P_CLM_CLOSE_REMARKS,
                          P_ERR_YN                 => :P_ERR_YN,
                          P_ERR_MESG               => :P_ERR_MESG);
    COMMIT;                      
    END;
  `;

  const bind = {
    P_CLM_SYS_ID: { dir: oracledb.BIND_IN, val: P_CLM_SYS_ID !== undefined ? Number(P_CLM_SYS_ID) : null, type: oracledb.NUMBER },
    P_GEN_AC_YN: { dir: oracledb.BIND_IN, val: CS_GEN_CLM_AC_YN || null, type: oracledb.STRING },
    P_APPR_UID: { dir: oracledb.BIND_IN, val: P_APPR_UID || null, type: oracledb.STRING },
    P_APPR_DT: { dir: oracledb.BIND_IN, val: CS_APPR_DT ? new Date(CS_APPR_DT) : null, type: oracledb.DATE },
    P_CLM_FINAL_YN: { dir: oracledb.BIND_IN, val: CS_FINAL_YN || null, type: oracledb.STRING },
    P_CLM_CLOSE_REASON_CODE: { dir: oracledb.BIND_IN, val: CLM_CLOSE_REASON_CODE || null, type: oracledb.STRING },
    P_CLM_CLOSE_REMARKS: { dir: oracledb.BIND_IN, val: CLM_CLOSE_REMARKS || null, type: oracledb.STRING },
    P_ERR_YN: { dir: oracledb.BIND_OUT, type: oracledb.STRING },
    P_ERR_MESG: { dir: oracledb.BIND_OUT, type: oracledb.STRING }
  };

  let connection;
  try {
    connection = await sequelize.connectionManager.getConnection();
    const result = await connection.execute(plsql, bind, { autoCommit: true });
    
    // Check if error occurred in the procedure
    if (result.outBinds && result.outBinds.P_ERR_YN === 'Y') {
      const error = new Error(result.outBinds.P_ERR_MESG || 'Error during settlement approval');
      error.statusCode = 400; // Bad Request or 422 Unprocessable Entity
      throw error;
    }

    return {
      message: 'Settlement Approved Successfully',
      outBinds: result.outBinds
    };
  } catch (error) {
    console.error('Error executing approveSettlement:', error);
    throw error;
  } finally {
    if (connection) {
      await sequelize.connectionManager.releaseConnection(connection);
    }
  }
};
