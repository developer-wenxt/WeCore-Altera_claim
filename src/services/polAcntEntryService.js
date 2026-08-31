const { sequelize } = require('../models');
const { QueryTypes } = require('sequelize');

exports.get = async (AD_CLM_SYS_ID) => {
  let query = `
SELECT AD_POL_NO,
       AD_END_NO_IDX,
       AD_END_NO,
       AD_CLM_NO,
       AD_CUST_CODE,
       AD_ASSR_CODE,
       AD_ASSR_NAME,
       AD_TRAN_CODE,
       AD_DOC_DT,
       AD_DOC_NO,
       AD_CURR_CODE,  
       AD_MAIN_ACNT_CODE,
       AD_SUB_ACNT_CODE,
       AD_INT_ENT_YN,
       AD_DUE_DT,
       AD_DRCR_FLAG,      
       AD_AMT_FC,
       AD_AMT_LC_1,
       AD_NARRATION,
       AD_POST_YN,
       AD_CR_UID,
       AD_CR_DT
  FROM PGIT_ACNT_DOC
 WHERE AD_CLM_SYS_ID = :clmsysid 
AND AD_PLACE_NO IS NULL
`;


  const replacements = { clmsysid: AD_CLM_SYS_ID };

  const records = await sequelize.query(query, {
    type: QueryTypes.SELECT,
    replacements
  });

  if (!records || records.length === 0) {
    return [];
  }

  const groups = {};

  for (const record of records) {
    const key = `${AD_CLM_SYS_ID}_${record.AD_DOC_NO}`;

    if (!groups[key]) {
      groups[key] = {
        AD_POL_NO: record.AD_POL_NO,
        AD_END_NO_IDX: record.AD_END_NO_IDX,
        AD_END_NO: record.AD_END_NO,
        AD_CLM_NO: record.AD_CLM_NO,
        AD_CUST_CODE: record.AD_CUST_CODE,
        AD_ASSR_CODE: record.AD_ASSR_CODE,
        AD_ASSR_NAME: record.AD_ASSR_NAME,
        AD_TRAN_CODE: record.AD_TRAN_CODE,
        AD_DOC_DT: record.AD_DOC_DT,
        AD_DOC_NO: record.AD_DOC_NO,
        AD_CURR_CODE: record.AD_CURR_CODE,
        details: []
      };
    }

    groups[key].details.push({
      AD_MAIN_ACNT_CODE: record.AD_MAIN_ACNT_CODE,
      AD_SUB_ACNT_CODE: record.AD_SUB_ACNT_CODE,
      AD_INT_ENT_YN: record.AD_INT_ENT_YN,
      AD_DUE_DT: record.AD_DUE_DT,
      AD_DRCR_FLAG: record.AD_DRCR_FLAG,
      AD_AMT_FC: record.AD_AMT_FC,
      AD_AMT_LC_1: record.AD_AMT_LC_1,
      AD_NARRATION: record.AD_NARRATION,
      AD_POST_YN: record.AD_POST_YN
    });
  }

  return Object.values(groups);
};
