const { sequelize } = require("../models");
const { QueryTypes } = require("sequelize");

// ----------- DATE CONVERSION FIX ------------
function convertToOracleDate(input) {
  if (!input) return null;

  const d = new Date(input);
  if (isNaN(d)) return null;

  const monthNames = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];

  const day = String(d.getDate()).padStart(2, "0");
  const month = monthNames[d.getMonth()];
  const year = d.getFullYear();

  const hh = String(d.getHours()).padStart(2, "0");
  const mm = String(d.getMinutes()).padStart(2, "0");
  const ss = String(d.getSeconds()).padStart(2, "0");

  return `${day}-${month}-${year} ${hh}:${mm}:${ss}`;
}

// ----------- Extract SELECT Columns (For Auto Filter Column) ------------
function extractSelectColumns(sql) {
  const selectPart = sql.split(/from/i)[0];
  return selectPart
    .replace(/select/i, "")
    .split(",")
    .map(col => col.trim().split(" ")[0]);
}

// ----------- DUPLICATE BIND FIX ------------ 
function expandDuplicateBinds(sql, bind) {
  const newBind = {};

  for (const key of Object.keys(bind)) {
    const regex = new RegExp(`:${key}(?![A-Za-z0-9_])`, "g");
    const matches = [...sql.matchAll(regex)];

    if (matches.length > 1) {
      matches.forEach((match, i) => {
        const newKey = `${key}_${i + 1}`;
        sql = sql.replace(match[0], `:${newKey}`);
        newBind[newKey] = bind[key];
      });
    } else if (matches.length === 1) {
      newBind[key] = bind[key];
    }
  }

  return { sql, bind: newBind };
}

class DropdownService {
  async getDropdownData(queryParams) {
    const {
      PLD_BLOCK_NAME,
      PLD_FIELD_NAME,
      PLD_PROG_CODE,
      custCode,
      polFmDt,
      filter,
      prodCode,
      secCode,
      pol_sys_id,
      polSts,
      value,
      POLNO,
      lossDt,
      POL_NO,
      DS_CODE
    } = queryParams;

    if (!PLD_BLOCK_NAME || !PLD_FIELD_NAME) {
      throw new Error("Missing required fields: PLD_BLOCK_NAME or PLD_FIELD_NAME");
    }

    const specialQueries = {
      POL_SRC_CODE: "SELECT CUST_CODE, CUST_NAME FROM PCOM_CUST_CATG, PCOM_CUSTOMER WHERE CC_TYPE IN ('002', '012')",
      POL_INSTL_METHOD: "SELECT PARA_SUB_CODE,PARA_NAME,IDH_NO_OF_INST FROM pcom_app_parameter,PGIM_INST_DURAT_HDR WHERE IDH_CODE=PARA_SUB_CODE AND PARA_CODE='INSTL_METHOD'",
      POL_FLEX_08: "SELECT PARA_SUB_CODE, PARA_NAME FROM PCOM_APP_PARAMETER WHERE PARA_CODE = 'MODE_OF_PAY'",
      POL_SRC_TYPE: "SELECT PARA_SUB_CODE,PARA_NAME FROM PCOM_APP_PARAMETER WHERE PARA_CODE = 'SRC_TYPE'",
      POL_PREM_CALC_TYPE: "SELECT PARA_SUB_CODE,PARA_NAME FROM PCOM_APP_PARAMETER WHERE PARA_CODE = 'PREM_CALC'",
      PRS_FLEXI_03: "SELECT PC_CODE,PC_DESC FROM PCOM_CODES WHERE PC_TYPE='STATE'",
      PRAI_CODE_01: "  SELECT ROWID,PC_CODE,PC_DESC,NULL,NULL FROM PCOM_CODES WHERE PC_TYPE = 'IND_TYP'",
      PRAI_CODE_02: "SELECT PC_CODE,PC_DESC FROM PCOM_CODES WHERE PC_TYPE = 'OCCUPANCY'",
      PRAI_CODE_03: "SELECT PC_CODE,PC_DESC FROM PCOM_CODES WHERE PC_TYPE ='INDEM_PER_UN'",
      PRC_CODE: "select distinct PCVR_CVR_CODE , PCVR_DESC from PGIM_PROD_APPL_COVER where PCVR_PROD_CODE = :prodCode and PCVR_CVR_TYPE = 'C'",
      PCD_CODE: "SELECT PADED_CODE, PADED_DESC FROM PGIM_PROD_APPL_DED WHERE PADED_PROD_CODE = :prodCode AND PADED_LVL = 'P' AND TRUNC(NVL(PADED_EFF_TO_DT,SYSDATE)) >= TRUNC(SYSDATE)",
      POL_BUS_TYPE: "SELECT PARA_SUB_CODE, PARA_NAME FROM PCOM_APP_PARAMETER WHERE PARA_CODE = 'BUS_TYPE' AND PARA_SUB_CODE in(1,2,3,4,5)",
      PCON_CODE: "SELECT ROWID,PACO_CODE,PACO_DESC,NULL,NULL FROM  PGIM_PROD_APPL_COND WHERE ROWID IN ( SELECT MAX(ROWID) FROM PGIM_PROD_APPL_COND WHERE PACO_PROD_CODE= :prodCode  GROUP BY PACO_CODE)",
      PBRK_COMM_CURR: "SELECT CURR_CODE,CURR_NAME FROM FM_CURRENCY",
      PID_RISK_SYS_ID: "SELECT TO_CHAR(PRAI_SYS_ID)FROM PGIT_POL_RISK_ADDL_INFO WHERE PRAI_POL_SYS_ID = :pol_sys_id AND PRAI_RISK_LVL_NO =1 AND PRAI_RISK_SR_NO =1",
      PCHG_TYPE: "SELECT ROWID,PARA_SUB_CODE,DECODE('ENG','ENG',PARA_NAME,PARA_BL_NAME),NULL,NULL FROM PCOM_APP_PARAMETER WHERE PARA_APP_CODE = '01'AND PARA_CODE='TAX_CHRG_TYP' AND PARA_SUB_CODE <> '008' AND PARA_SUB_CODE IN ( SELECT PTDL_TAX_CHG_TYPE FROM PGIM_PROD_TAX_CHARGE WHERE PTDL_PROD_CODE =:prodCode AND PTDL_SEC_CODE IS NULL)",
      PCHG_CODE: "SELECT ROWID,PTDL_TAX_CHG_CODE,DECODE('ENG','ENG',PTDL_TAX_CHG_DESC,PTDL_TAX_CHG_DESC_BL),NULL,NULL FROM PGIM_PROD_TAX_CHARGE WHERE PTDL_PROD_CODE =:prodCode AND PTDL_TAX_CHG_TYPE =:value ",
      PBRK_RISK_SEL_TYPE: "SELECT PARA_SUB_CODE, PARA_NAME FROM PCOM_APP_PARAMETER WHERE PARA_CODE = 'BRK_RISK_TYP'",
      PID_RISK_SYS_ID: "SELECT TO_CHAR(PRAI_SYS_ID),PKG_RISK_INFO.FN_RISK_DESC(PRAI_SYS_ID) ,TO_CHAR(PRAI_RISK_LVL_NO),TO_CHAR(PRAI_RISK_SR_NO)  FROM PGIT_POL_RISK_ADDL_INFO  WHERE PRAI_POL_SYS_ID=:pol_sys_id AND   PRAI_RISK_LVL_NO  =1   AND   PRAI_RISK_SR_NO   =1 ",
      PHPO_BANK_COUNTY: " SELECT PC_CODE,PC_DESC FROM PCOM_CODES WHERE PC_TYPE = 'COUNTRY'",
      M_FAC_PROV_ON: "SELECT PARA_SUB_CODE, PARA_NAME FROM PCOM_APP_PARAMETER WHERE PARA_CODE = 'FAC_PROV_ON'",
      FO_FAC_BASIS: "SELECT PARA_SUB_CODE, PARA_NAME FROM PCOM_APP_PARAMETER WHERE PARA_CODE = 'TTY_RI_BASIS' and PARA_SUB_CODE IN ('01','02')",
      FO_ALLOC_ON: "SELECT PARA_SUB_CODE, PARA_NAME FROM PCOM_APP_PARAMETER WHERE PARA_CODE = 'FAC_ALLOC_ON'",
      FPS_EXCH_RATE_TYPE: "SELECT PARA_SUB_CODE, PARA_NAME FROM PCOM_APP_PARAMETER WHERE PARA_CODE = 'FAC_RATE_TYP'",
      FPS_PREM_CALC_TYPE: "SELECT PARA_SUB_CODE, PARA_NAME FROM PCOM_APP_PARAMETER WHERE PARA_CODE = 'FAC_PREM_CAL'",
      FPS_PLACE_BY: "SELECT PARA_SUB_CODE, PARA_NAME FROM PCOM_APP_PARAMETER WHERE PARA_CODE = 'FAC_PLACE_BY'",
      FPS_FAC_RATE_BASIS: "SELECT PARA_SUB_CODE, PARA_NAME FROM PCOM_APP_PARAMETER WHERE PARA_CODE = 'FAC_RATE_BAS'",
      FPS_BUS_TYPE: "SELECT PARA_SUB_CODE, PARA_NAME FROM PCOM_APP_PARAMETER WHERE PARA_CODE = 'BUS_TYPE' AND PARA_SUB_CODE IN ( '25','7','13')",
      FPS_FAC_ACNT_TO: "SELECT PARA_SUB_CODE, PARA_NAME FROM PCOM_APP_PARAMETER WHERE PARA_CODE = 'RI_ACNT_TO'",
      POL_END_CODE:"SELECT PGIM_DOC_SETUP.DS_CODE, DS_DESC FROM PGIM_DOC_SETUP, PGIM_DOC_APPL_PRODUCT WHERE DS_TYPE = '3' AND PGIM_DOC_SETUP.DS_TYPE = PGIM_DOC_APPL_PRODUCT.DAP_DS_TYPE AND PGIM_DOC_SETUP.DS_CODE = PGIM_DOC_APPL_PRODUCT.DAP_DS_CODE AND DAP_PROD_CODE = :prodCode AND (SYSDATE BETWEEN NVL(DS_EFF_FM_DT, SYSDATE) AND NVL(DS_EFF_TO_DT, SYSDATE)) AND NVL('0', '0') = '0' AND ((PGIM_DOC_SETUP.DS_END_TYPE = '029' AND NVL('0', '0') = '1') OR (PGIM_DOC_SETUP.DS_END_TYPE <> '029' AND NVL('0', '0') = '0')) AND ((PGIM_DOC_SETUP.DS_END_TYPE = '030' AND ((NVL(:polSts, 'CO') = 'C' AND PGIM_DOC_SETUP.DS_REIN_ENDT_YN = '1') OR (NVL(:polSts, 'CO') = 'E' AND PGIM_DOC_SETUP.DS_REIN_ENDT_YN = '0'))) OR (PGIM_DOC_SETUP.DS_END_TYPE <> '030' AND NVL(:polSts, 'CO') <> 'C'))" ,
     // PRAI_RISK_CLASS_CODE:"SELECT PC_CODE,PC_DESC  FROM PCOM_CODES WHERE PC_TYPE = 'RISK_CLASS' AND PC_VALUE = '20'  AND  (SELECT TRUNC(POL_FM_DT) FROM PGIT_POLICY  WHERE POL_SYS_ID =:pol_sys_id)  BETWEEN PC_EFF_FM_DT AND PC_EFF_TO_DT",
      POL_ASSR_CODE:"SELECT ASSR_CODE,ASSR_NAME FROM PCOM_ASSURED WHERE ASSR_CUST_CODE =:custCode",
      CLM_LOSS_CODE: `SELECT DISTINCT LAC_LOSS_CODE "Loss Code", (SELECT PC_DESC FROM PCOM_CODES WHERE PC_TYPE='NAT_OF_LOSS' AND PC_CODE=LAC_LOSS_CODE) "Loss Description", LAC_PROD_CODE "Product Code", (SELECT PROD_DESC FROM PGIM_PRODUCT WHERE PROD_CODE=LAC_PROD_CODE) "Product Description", LAC_SEC_CODE "Section Code", (SELECT PC_DESC FROM PCOM_CODES WHERE PC_TYPE='SECTION' AND PC_CODE=LAC_SEC_CODE) "Section Description" FROM PGIM_LOSS_APPL_COVER`,
      CI_POL_NO:"SELECT POLH_NO, MAX(POLH_END_NO_IDX) POLH_END_NO_IDX FROM PGITH_POLICY A WHERE A.POLH_FM_DT <= TO_DATE(:lossDt, 'DD-MON-YYYY HH24:MI:SS') AND A.POLH_TO_DT >= TO_DATE(:lossDt, 'DD-MON-YYYY HH24:MI:SS') AND NOT EXISTS (SELECT 1 FROM PGITH_POLICY B WHERE B.POLH_SYS_ID = A.POLH_SYS_ID AND B.POLH_END_TYPE = '004' AND B.POLH_END_NO_IDX = (SELECT MAX(POLH_END_NO_IDX) FROM PGITH_POLICY C WHERE C.POLH_SYS_ID = A.POLH_SYS_ID AND NVL(C.POLH_END_EFF_FM_DT,C.POLH_FM_DT) <= TO_DATE(:lossDt, 'DD-MON-YYYY HH24:MI:SS'))) GROUP BY POLH_NO",
      CLM_INTM_NO:"SELECT ROWID,TO_CHAR(CI_INTM_NO),NULL FROM PGIT_CLM_INTIMATION WHERE CI_CLM_REGD_YN='0' AND CI_DS_CODE=NVL(:DS_CODE,CI_DS_CODE) AND NVL(CI_CLM_TYPE,'X')=NVL('OTH',NVL(CI_CLM_TYPE,'X')) AND CI_POL_NO=NVL(:POL_NO,CI_POL_NO)",
      CLM_POL_NO:"SELECT POLH_NO, MAX(POLH_END_NO_IDX) POLH_END_NO_IDX FROM PGITH_POLICY A WHERE A.POLH_FM_DT <= TO_DATE(:lossDt, 'DD-MON-YYYY HH24:MI:SS') AND A.POLH_TO_DT >= TO_DATE(:lossDt, 'DD-MON-YYYY HH24:MI:SS') AND NOT EXISTS (SELECT 1 FROM PGITH_POLICY B WHERE B.POLH_SYS_ID = A.POLH_SYS_ID AND B.POLH_END_TYPE = '004' AND B.POLH_END_NO_IDX = (SELECT MAX(POLH_END_NO_IDX) FROM PGITH_POLICY C WHERE C.POLH_SYS_ID = A.POLH_SYS_ID AND NVL(C.POLH_END_EFF_FM_DT,C.POLH_FM_DT) <= TO_DATE(:lossDt, 'DD-MON-YYYY HH24:MI:SS'))) GROUP BY POLH_NO",
 
    };

    // ----------- SPECIAL QUERIES WITH FILTER ADDED ------------
    if (specialQueries[PLD_FIELD_NAME]) {
      let sql = specialQueries[PLD_FIELD_NAME];
      let bind = {};

      if (PLD_FIELD_NAME === "PRC_CODE") {
        bind.prodCode = prodCode || null;
      } 
      else if(PLD_FIELD_NAME === "CI_POL_NO" || PLD_FIELD_NAME === "CLM_POL_NO")
      {
        bind.lossDt = lossDt ? convertToOracleDate(lossDt) : null;
      }
      else if (PLD_FIELD_NAME === "PCD_CODE") {
        bind.prodCode = prodCode || null;
      } else if (PLD_FIELD_NAME === "PCON_CODE") {
        bind.prodCode = prodCode || null;
      } else if (PLD_FIELD_NAME === "PID_RISK_SYS_ID") {
        bind.pol_sys_id = pol_sys_id || null;
      } else if (PLD_FIELD_NAME === "PCHG_CODE") {
        bind.prodCode = prodCode || null;
        bind.value = value || null;
      } else if (PLD_FIELD_NAME === "PCHG_TYPE") {
        bind.prodCode = prodCode || null;
      } else if (PLD_FIELD_NAME === "POL_END_CODE") {
        bind.prodCode = prodCode || null;
        bind.polSts = polSts || null;
        bind.pol_sys_id = pol_sys_id || null;
      } else if (PLD_FIELD_NAME === "PRAI_RISK_CLASS_CODE") {
        bind.pol_sys_id = pol_sys_id || null;
      } else if (PLD_FIELD_NAME === "POL_ASSR_CODE") {
        bind.custCode = custCode || null;
      } else if (PLD_FIELD_NAME === "POLICY_DATA") {
        bind.POLNO = POLNO || null;
      } else if (PLD_FIELD_NAME === "CLM_INTM_NO") {
        bind.DS_CODE = DS_CODE && DS_CODE !== "'null'" && DS_CODE !== "null" ? DS_CODE.replace(/^'|'$/g, "") : null;
        bind.POL_NO = POL_NO && POL_NO !== "'null'" && POL_NO !== "null" ? POL_NO.replace(/^'|'$/g, "") : null;
      }

                    
      if (filter && filter.trim()) {
        if (PLD_FIELD_NAME === "PCD_CODE") {
          sql += ` AND UPPER(PADED_DESC) LIKE UPPER(:filterStr)`;
        } else if (PLD_FIELD_NAME === "POL_SRC_CODE") {
          sql += ` AND UPPER(CUST_NAME) LIKE UPPER(:filterStr)`;
        } else if (PLD_FIELD_NAME === "POL_END_CODE") {
          sql += ` AND UPPER(DS_DESC) LIKE UPPER(:filterStr)`;
        } else {
          sql += ` AND UPPER(PARA_NAME) LIKE UPPER(:filterStr)`;
        }
        bind.filterStr = `${filter.trim()}%`;
      }

      // Fix duplicate binds for special queries
      ({ sql, bind } = expandDuplicateBinds(sql, bind));

      const rows = await sequelize.query(sql, {
        type: QueryTypes.SELECT,
        bind,
      });
   
      return {
        blockName: PLD_BLOCK_NAME,
        fieldName: PLD_FIELD_NAME,
        programCode: PLD_PROG_CODE,
        data: this.convertObjectsToFilteredObjects(rows),
      };
    }

    // **************** NORMAL LOV FLOW ****************
    const lovDefRows = await sequelize.query(
      `SELECT * FROM PGIM_LOV_DEFN WHERE PLD_BLOCK_NAME = :blockName AND PLD_FIELD_NAME = :fieldName AND PLD_PROG_CODE = :progCode`,
      {
        type: QueryTypes.SELECT,
        replacements: {
          blockName: PLD_BLOCK_NAME,
          fieldName: PLD_FIELD_NAME,
          progCode: PLD_PROG_CODE,
        },
      }
    );
    const lovDef = lovDefRows[0];

    if (!lovDef) throw new Error("LOV definition not found");

    let sql = lovDef.PLD_LOV_SELECT_STMT;

    // Normalize Oracle placeholders
    sql = sql.replace(/:PARAMETER\.(P_PARA_[1-5])/g, (_m, p) => `:${p}`);
    sql = sql.replace(/:GLOBAL\.M_LANG_CODE/g, ":langCode");
    sql = sql.replace(/:GLOBAL\.M_LOGIN_APP_CODE/g, ":loginAppCode");
    sql = sql.replace(/:PGIT_POLICY\.POL_CUST_CODE/g, ":custCode");
    sql = sql.replace(/:PGIT_POLICY\.POL_FM_DT/g, ":polFmDt");
    sql = sql.replace(/:GLOBAL\.M_PROD_CODE/g, ":prodCode");
    sql = sql.replace(/:GLOBAL\.M_SECTION_CODE/g, ":secCode");


    const sqlUses_PARA3 = sql.includes(":P_PARA_3");
    const sqlUses_POLFMDT = sql.includes(":polFmDt");

    // FIXED BIND - Correct priority for SMI queries
    let bind = {
      langCode: queryParams.langCode || "ENG",
      loginAppCode: queryParams.loginAppCode || "01",
      custCode: custCode || null,
      prodCode: prodCode || null,
      secCode: secCode || null,
      polFmDt: polFmDt || null,
      pol_sys_id: pol_sys_id || null,
      polSts: polSts || null,

      // SMI queries need: P_PARA_1=prodCode, P_PARA_2=secCode
      P_PARA_1: queryParams.P_PARA_1 || prodCode || "ENG",
      P_PARA_2: queryParams.P_PARA_2 || pol_sys_id || secCode || custCode || prodCode || "01",
      P_PARA_3: queryParams.P_PARA_3 || pol_sys_id || prodCode || secCode || polFmDt || "0",
      P_PARA_4: queryParams.P_PARA_4 || polSts || null,
      P_PARA_5: queryParams.P_PARA_5 || pol_sys_id || null,
    };

    // Convert dates only if used in SQL
    if (sqlUses_PARA3 && bind.P_PARA_3) {
      bind.P_PARA_3 = convertToOracleDate(bind.P_PARA_3);
    }

    if (sqlUses_POLFMDT && bind.polFmDt) {
      bind.polFmDt = convertToOracleDate(bind.polFmDt);
    }

    // ----------- AUTO DETECT FILTER COLUMN -----------
    if (filter && filter.trim()) {
      let filterColumn = lovDef.PLD_FILTER_COLUMN;

      if (!filterColumn || !filterColumn.trim()) {
        const selectCols = extractSelectColumns(sql);
        filterColumn = selectCols[2] || selectCols[1] || selectCols[0];
      }

      if (/where/i.test(sql)) {
        sql += ` AND UPPER(${filterColumn}) LIKE UPPER(:filterStr)`;
      } else {
        sql += ` WHERE UPPER(${filterColumn}) LIKE UPPER(:filterStr)`;
      }

      bind.filterStr = `${filter.trim()}%`;
    }

    // Remove unused binds
    Object.keys(bind).forEach((key) => {
      if (!new RegExp(`:${key}(?:\\b|\\W)`).test(sql)) {
        delete bind[key];
      }
    });

    // Fix duplicate binds
    ({ sql, bind } = expandDuplicateBinds(sql, bind));

    const rows = await sequelize.query(sql, {
      type: QueryTypes.SELECT,
      bind,
    });

    return {
      blockName: PLD_BLOCK_NAME,
      fieldName: PLD_FIELD_NAME,
      programCode: PLD_PROG_CODE,
      data: this.convertObjectsToFilteredObjects(rows),
    };
  }

  convertObjectsToFilteredObjects(rows) {
    if (!rows || rows.length === 0) return [];
    return rows.map(row => {
      const filtered = {};
      Object.keys(row).forEach(key => {
        if (key !== "NULL" && key !== "ROWID" && key !== "NULL_1" && key !== "ASSR_CIVIL_ID"
          && key !== "PSMI_ADD_SI_YN" && key !== "NULL_2") {
          filtered[key] = row[key];
        }
      });
      return filtered;
    });
  }
}

module.exports = new DropdownService();
