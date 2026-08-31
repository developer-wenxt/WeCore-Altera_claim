const { sequelize } = require('../models');
const oracledb = require('oracledb');

exports.getFCandLCvalues = async (data) => {
  const { 
    M_POL_SYS_ID, 
    M_END_NO_IDX, 
    M_END_SR_NO, 
    M_CURR_CODE, 
    M_AMT_FC, 
    M_CURR_RATE_TYP 
  } = data;

  const plsql = `
    DECLARE
      M_CURR_RATE_1  NUMBER;
      M_CURR_RATE_2  NUMBER;
      M_CURR_RATE_3  NUMBER;
      M_AMT_LC_1    NUMBER;
      M_AMT_LC_2    NUMBER;
      M_AMT_LC_3    NUMBER;
    BEGIN
      PCOPK_GENERAL.GET_EXCH_RATE(:M_POL_SYS_ID,
                                   :M_END_NO_IDX,
                                   :M_END_SR_NO,
                                   :M_CURR_CODE,
                                   :M_CURR_RATE_TYP,
                                   M_CURR_RATE_1,
                                   M_CURR_RATE_2,
                                   M_CURR_RATE_3);

      PCOPK_GENERAL.CONV_FC_LC(:M_AMT_FC,
                               M_CURR_RATE_1,
                               M_CURR_RATE_2,
                               M_CURR_RATE_3,
                               M_AMT_LC_1,
                               M_AMT_LC_2,
                               M_AMT_LC_3);
                               
      :out_M_CURR_RATE_1 := M_CURR_RATE_1;
      :out_M_CURR_RATE_2 := M_CURR_RATE_2;
      :out_M_CURR_RATE_3 := M_CURR_RATE_3;
      :out_M_AMT_LC_1 := M_AMT_LC_1;
      :out_M_AMT_LC_2 := M_AMT_LC_2;
      :out_M_AMT_LC_3 := M_AMT_LC_3;
    END;
  `;

  const bind = {
    M_POL_SYS_ID: { dir: oracledb.BIND_IN, val: M_POL_SYS_ID !== undefined ? Number(M_POL_SYS_ID) : 124796, type: oracledb.NUMBER },
    M_END_NO_IDX: { dir: oracledb.BIND_IN, val: M_END_NO_IDX !== undefined ? Number(M_END_NO_IDX) : 0, type: oracledb.NUMBER },
    M_END_SR_NO: { dir: oracledb.BIND_IN, val: M_END_SR_NO !== undefined ? Number(M_END_SR_NO) : 0, type: oracledb.NUMBER },
    M_CURR_CODE: { dir: oracledb.BIND_IN, val: M_CURR_CODE || 'USD', type: oracledb.STRING },
    M_CURR_RATE_TYP: { dir: oracledb.BIND_IN, val: M_CURR_RATE_TYP || 'B', type: oracledb.STRING },
    M_AMT_FC: { dir: oracledb.BIND_IN, val: M_AMT_FC !== undefined ? Number(M_AMT_FC) : 20, type: oracledb.NUMBER },
    out_M_CURR_RATE_1: { dir: oracledb.BIND_OUT, type: oracledb.NUMBER },
    out_M_CURR_RATE_2: { dir: oracledb.BIND_OUT, type: oracledb.NUMBER },
    out_M_CURR_RATE_3: { dir: oracledb.BIND_OUT, type: oracledb.NUMBER },
    out_M_AMT_LC_1: { dir: oracledb.BIND_OUT, type: oracledb.NUMBER },
    out_M_AMT_LC_2: { dir: oracledb.BIND_OUT, type: oracledb.NUMBER },
    out_M_AMT_LC_3: { dir: oracledb.BIND_OUT, type: oracledb.NUMBER }
  };

  let connection;
  try {
    connection = await sequelize.connectionManager.getConnection();
    const result = await connection.execute(plsql, bind);
    return result.outBinds;
  } catch (error) {
    console.error('Error executing FCandLCvalues:', error);
    throw error;
  } finally {
    if (connection) {
      await sequelize.connectionManager.releaseConnection(connection);
    }
  }
};
