const { sequelize } = require("../models");
const { QueryTypes } = require('sequelize');

exports.get = async ( progCode,blockName ) => {
  const query = `SELECT PLD_PROG_CODE, PLD_BLOCK_NAME, PLD_FIELD_NAME, PLD_LOV_TITLE, PLD_LOV_SELECT_STMT,PLD_RETURN_FIELD_NAME,
                  pld_prod_code, PLD_SECTION_CODE
          FROM PGIM_LOV_DEFN
        WHERE PLD_PROG_CODE =:progCode
          AND PLD_BLOCK_NAME =:blockName;`;

  const records = await sequelize.query(query, { type: QueryTypes.SELECT,replacements: { progCode, blockName } });

  return records;
};