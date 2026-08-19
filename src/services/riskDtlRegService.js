const { sequelize } = require("../models");
const { QueryTypes } = require("sequelize");

class RiskDtlRegService {
  async getPolicy(POLH_NO) {
    if (!POLH_NO) throw new Error("Missing required parameter: POLH_NO");
    const sql = `
      SELECT POLH_SYS_ID, POLH_NO, POLH_FM_DT, POLH_TO_DT 
      FROM PGITH_POLICY 
      WHERE POLH_NO = :POLH_NO
    `;
    return await sequelize.query(sql, { type: QueryTypes.SELECT, replacements: { POLH_NO } });
  }

  async getSection(POLH_SYS_ID, POLH_END_NO_IDX) {
    if (!POLH_SYS_ID || !POLH_END_NO_IDX) throw new Error("Missing required parameters: POLH_SYS_ID, POLH_END_NO_IDX");
    const sql = `
      SELECT PSECH_SYS_ID, PSECH_SEC_CODE  
      FROM PGITH_POL_SECTION 
      WHERE PSECH_POL_SYS_ID = :POLH_SYS_ID 
        AND PSECH_END_NO_IDX = :POLH_END_NO_IDX
    `;
    return await sequelize.query(sql, { type: QueryTypes.SELECT, replacements: { POLH_SYS_ID, POLH_END_NO_IDX } });
  }

  async getRisk(PSECH_SYS_ID, POLH_SYS_ID, POLH_END_NO_IDX) {
    if (!PSECH_SYS_ID || !POLH_SYS_ID || !POLH_END_NO_IDX) throw new Error("Missing required parameters: PSECH_SYS_ID, POLH_SYS_ID, POLH_END_NO_IDX");
    const sql = `
      SELECT PRAIH_SYS_ID, PRAIH_RISK_ID 
      FROM PGITH_POL_RISK_ADDL_INFO 
      WHERE PRAIH_PSEC_SYS_ID = :PSECH_SYS_ID 
        AND PRAIH_POL_SYS_ID = :POLH_SYS_ID 
        AND PRAIH_END_NO_IDX = :POLH_END_NO_IDX
    `;
    return await sequelize.query(sql, { type: QueryTypes.SELECT, replacements: { PSECH_SYS_ID, POLH_SYS_ID, POLH_END_NO_IDX } });
  }

  async getSmi(PRAIH_SYS_ID, PSECH_SYS_ID, POLH_SYS_ID, POLH_END_NO_IDX) {
    if (!PRAIH_SYS_ID || !PSECH_SYS_ID || !POLH_SYS_ID || !POLH_END_NO_IDX) throw new Error("Missing required parameters");
    const sql = `
      SELECT PRSH_SMI_CODE, PRSH_SMI_DESC 
      FROM PGITH_POL_RISK_SMI  
      WHERE PRSH_LVL1_SYS_ID = :PRAIH_SYS_ID 
        AND PRSH_PSEC_SYS_ID = :PSECH_SYS_ID 
        AND PRSH_POL_SYS_ID = :POLH_SYS_ID 
        AND PRSH_END_NO_IDX = :POLH_END_NO_IDX
    `;
    return await sequelize.query(sql, { type: QueryTypes.SELECT, replacements: { PRAIH_SYS_ID, PSECH_SYS_ID, POLH_SYS_ID, POLH_END_NO_IDX } });
  }

  async getCover(PRAIH_SYS_ID, PSECH_SYS_ID, POLH_SYS_ID, POLH_END_NO_IDX) {
    if (!PRAIH_SYS_ID || !PSECH_SYS_ID || !POLH_SYS_ID || !POLH_END_NO_IDX) throw new Error("Missing required parameters");
    const sql = `
      SELECT PRCH_CODE, PRCH_DESC 
      FROM PGITH_POL_RISK_COVER 
      WHERE PRCH_LVL1_SYS_ID = :PRAIH_SYS_ID 
        AND PRCH_PSEC_SYS_ID = :PSECH_SYS_ID 
        AND PRCH_POL_SYS_ID = :POLH_SYS_ID 
        AND PRCH_END_NO_IDX = :POLH_END_NO_IDX
    `;
    return await sequelize.query(sql, { type: QueryTypes.SELECT, replacements: { PRAIH_SYS_ID, PSECH_SYS_ID, POLH_SYS_ID, POLH_END_NO_IDX } });
  }
}

module.exports = new RiskDtlRegService();
