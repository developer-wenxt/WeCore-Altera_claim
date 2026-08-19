const { sequelize } = require("../models");
const { QueryTypes } = require("sequelize");

class IntiDataService {
  async getIntimationData(intmNo) {
    if (!intmNo) {
      throw new Error("Missing required parameter: intmNo");
    }

    const intmSql = "SELECT CI_POL_NO,CI_INTM_NO,CI_LOSS_DT,CI_INTM_DT,CI_ASSR_NAME,CI_EVENT_CODE FROM PGIT_CLM_INTIMATION WHERE CI_INTM_NO=:intmNo";
    const intimationData = await sequelize.query(intmSql, {
      type: QueryTypes.SELECT,
      replacements: { intmNo },
    });

    return intimationData;
  }

  async getPolicyData(polNo) {
    if (!polNo) {
      throw new Error("Missing required parameter: polNo");
    }

    const polSql = "SELECT pol_prod_code, pol_prem_curr_code FROM pgit_policy WHERE pol_no=:polNo";
    const policyData = await sequelize.query(polSql, {
      type: QueryTypes.SELECT,
      replacements: { polNo },
    });
    
    return policyData;
  }
}

module.exports = new IntiDataService();
