const { sequelize } = require("../models");
const { QueryTypes } = require("sequelize");

class PolicyDataService {
  async getPolicyData(POLNO) {
    if (!POLNO) {
      throw new Error("Missing required parameter: POLNO");
    }

    const sql = "SELECT POL_FM_DT,POL_TO_DT, POL_PREM_CURR_CODE, POL_PROD_CODE, POL_ASSR_CODE FROM PGIT_POLICY WHERE POL_NO = :POLNO";


    const rows = await sequelize.query(sql, {
      type: QueryTypes.SELECT,
      replacements: { POLNO },
    });


    return rows;
  }
}

module.exports = new PolicyDataService();
