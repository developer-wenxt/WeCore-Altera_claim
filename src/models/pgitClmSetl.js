module.exports = (sequelize, DataTypes) => {
  const PgitClmSetl = sequelize.define('PgitClmSetl', {
       CS_TDS_AMT_FC: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'CS_TDS_AMT_FC' 
    }
    ,
   CS_TDS_AMT_LC_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'CS_TDS_AMT_LC_1' 
    }
    ,
   CS_TDS_AMT_LC_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'CS_TDS_AMT_LC_2' 
    }
    ,
   CS_TDS_AMT_LC_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'CS_TDS_AMT_LC_3' 
    }
    ,
   CS_SRV_TAX_AMT_FC: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'CS_SRV_TAX_AMT_FC' 
    }
    ,
   CS_SRV_TAX_AMT_LC_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'CS_SRV_TAX_AMT_LC_1' 
    }
    ,
   CS_SRV_TAX_AMT_LC_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'CS_SRV_TAX_AMT_LC_2' 
    }
    ,
   CS_SRV_TAX_AMT_LC_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'CS_SRV_TAX_AMT_LC_3' 
    }
    ,
   CS_CUST_CODE: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'CS_CUST_CODE' 
    }
    ,
   CS_CUST_NAME: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'CS_CUST_NAME' 
    }
    ,
   CS_REMARKS: { 
      type: DataTypes.STRING(4000), 
      allowNull: true, 
      
      field: 'CS_REMARKS' 
    }
    ,
   CS_APPR_UID: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'CS_APPR_UID' 
    }
    ,
   CS_APPR_DT: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'CS_APPR_DT' 
    }
    ,
   CS_AD_TRAN_SYS_ID: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'CS_AD_TRAN_SYS_ID' 
    }
    ,
   CS_AC_DOC_DT: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'CS_AC_DOC_DT' 
    }
    ,
   CS_AC_GEN_TYPE: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'CS_AC_GEN_TYPE' 
    }
    ,
   CS_AC_GEN_YN: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'CS_AC_GEN_YN' 
    }
    ,
   CS_FLEX_01: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'CS_FLEX_01' 
    }
    ,
   CS_FLEX_02: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'CS_FLEX_02' 
    }
    ,
   CS_FLEX_03: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'CS_FLEX_03' 
    }
    ,
   CS_FLEX_04: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'CS_FLEX_04' 
    }
    ,
   CS_FLEX_05: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'CS_FLEX_05' 
    }
    ,
   CS_FLEX_06: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'CS_FLEX_06' 
    }
    ,
   CS_FLEX_07: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'CS_FLEX_07' 
    }
    ,
   CS_FLEX_08: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'CS_FLEX_08' 
    }
    ,
   CS_FLEX_09: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'CS_FLEX_09' 
    }
    ,
   CS_FLEX_10: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'CS_FLEX_10' 
    }
    ,
   CS_CR_UID: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'CS_CR_UID' 
    }
    ,
   CS_CR_DT: { 
      type: DataTypes.DATE, 
      allowNull: false, 
      
      field: 'CS_CR_DT' 
    }
    ,
   CS_UPD_UID: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'CS_UPD_UID' 
    }
    ,
   CS_UPD_DT: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'CS_UPD_DT' 
    }
    ,
   CS_CLMAP_SYS_ID: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      
      field: 'CS_CLMAP_SYS_ID' 
    }
    ,
   CS_POL_SYS_ID: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      
      field: 'CS_POL_SYS_ID' 
    }
    ,
   CS_POL_END_NO_IDX: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      
      field: 'CS_POL_END_NO_IDX' 
    }
    ,
   CS_POL_END_SR_NO: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      
      field: 'CS_POL_END_SR_NO' 
    }
    ,
   CS_CE_REF_TYPE: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'CS_CE_REF_TYPE' 
    }
    ,
   CS_CE_EST_TYPE: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'CS_CE_EST_TYPE' 
    }
    ,
   CS_CE_EST_IND: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'CS_CE_EST_IND' 
    }
    ,
   CS_CE_EST_CODE: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'CS_CE_EST_CODE' 
    }
    ,
   CS_CE_EST_SIGN: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      
      field: 'CS_CE_EST_SIGN' 
    }
    ,
   CS_OUR_SHARE_AMT_FC: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'CS_OUR_SHARE_AMT_FC' 
    }
    ,
   CS_OUR_SHARE_AMT_LC_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'CS_OUR_SHARE_AMT_LC_1' 
    }
    ,
   CS_OUR_SHARE_AMT_LC_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'CS_OUR_SHARE_AMT_LC_2' 
    }
    ,
   CS_OUR_SHARE_AMT_LC_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'CS_OUR_SHARE_AMT_LC_3' 
    }
    ,
   CS_OUR_SHARE_PERC: { 
      type: DataTypes.DECIMAL(8, 5), 
      allowNull: true, 
      
      field: 'CS_OUR_SHARE_PERC' 
    }
    ,
   CS_ASSR_CODE: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'CS_ASSR_CODE' 
    }
    ,
   CS_CUST_ADDR_01: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'CS_CUST_ADDR_01' 
    }
    ,
   CS_CUST_ADDR_02: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'CS_CUST_ADDR_02' 
    }
    ,
   CS_CUST_ADDR_03: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'CS_CUST_ADDR_03' 
    }
    ,
   CS_CUST_CITY: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'CS_CUST_CITY' 
    }
    ,
   CS_CUST_PIN_CODE: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'CS_CUST_PIN_CODE' 
    }
    ,
   CS_CUST_STATE: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'CS_CUST_STATE' 
    }
    ,
   CS_SETL_STS: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'CS_SETL_STS' 
    }
    ,
   CS_FINAL_YN: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'CS_FINAL_YN' 
    }
    ,
   CS_PAID_AMT_FC: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'CS_PAID_AMT_FC' 
    }
    ,
   CS_PAID_STS: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'CS_PAID_STS' 
    }
    ,
   CS_COMP_CODE: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'CS_COMP_CODE' 
    }
    ,
   CS_DIVN_CODE: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'CS_DIVN_CODE' 
    }
    ,
   CS_PROD_CODE: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'CS_PROD_CODE' 
    }
    ,
   CS_DEPT_CODE: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'CS_DEPT_CODE' 
    }
    ,
   CS_UPD_SUMM_YN: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'CS_UPD_SUMM_YN' 
    }
    ,
   CS_COUNTRY_CODE: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'CS_COUNTRY_CODE' 
    }
    ,
   CS_PAID_AMT_LC_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'CS_PAID_AMT_LC_1' 
    }
    ,
   CS_PAID_AMT_LC_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'CS_PAID_AMT_LC_2' 
    }
    ,
   CS_PAID_AMT_LC_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'CS_PAID_AMT_LC_3' 
    }
    ,
   CS_GEN_CLM_AC_YN: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'CS_GEN_CLM_AC_YN' 
    }
    ,
   CS_GEN_FAC_CLM_AC_YN: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'CS_GEN_FAC_CLM_AC_YN' 
    }
    ,
   CS_GEN_CLM_COINS_AC_YN: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'CS_GEN_CLM_COINS_AC_YN' 
    }
    ,
   CS_FLEX_11: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'CS_FLEX_11' 
    }
    ,
   CS_FLEX_12: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'CS_FLEX_12' 
    }
    ,
   CS_FLEX_13: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'CS_FLEX_13' 
    }
    ,
   CS_FLEX_14: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'CS_FLEX_14' 
    }
    ,
   CS_FLEX_15: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'CS_FLEX_15' 
    }
    ,
   CS_BANK_NAME: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'CS_BANK_NAME' 
    }
    ,
   CS_INSTRUMENT_NO: { 
      type: DataTypes.STRING(60), 
      allowNull: true, 
      
      field: 'CS_INSTRUMENT_NO' 
    }
    ,
   CS_INSTRUMENT_DT: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'CS_INSTRUMENT_DT' 
    }
    ,
   CS_PAY_REMARKS: { 
      type: DataTypes.STRING(4000), 
      allowNull: true, 
      
      field: 'CS_PAY_REMARKS' 
    }
    ,
   CS_CUST_SSN_NO: { 
      type: DataTypes.STRING(11), 
      allowNull: true, 
      
      field: 'CS_CUST_SSN_NO' 
    }
    ,
   CS_PAYMENT_CODE: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'CS_PAYMENT_CODE' 
    }
    ,
   CS_PAYMENT_DESC: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'CS_PAYMENT_DESC' 
    }
    ,
   CS_REASON_CODE: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'CS_REASON_CODE' 
    }
    ,
   CS_PAYEE_PAN_NO: { 
      type: DataTypes.STRING(30), 
      allowNull: true, 
      
      field: 'CS_PAYEE_PAN_NO' 
    }
    ,
   CS_CUST_COUNTY: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'CS_CUST_COUNTY' 
    }
    ,
   CS_SETL_YN: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'CS_SETL_YN' 
    }
    ,
   CS_XL_RECOVERY_AMT_LC_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'CS_XL_RECOVERY_AMT_LC_1' 
    }
    ,
   CS_XL_RECOVERED_AMT_LC_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'CS_XL_RECOVERED_AMT_LC_1' 
    }
    ,
   CS_ADDL_CLAIMANTS_YN: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'CS_ADDL_CLAIMANTS_YN' 
    }
    ,
   CS_ADDL_INSURED_YN: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'CS_ADDL_INSURED_YN' 
    }
    ,
   CS_MORTGAGEE_YN: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'CS_MORTGAGEE_YN' 
    }
    ,
   CS_CAT_RECOVERY_AMT_LC_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'CS_CAT_RECOVERY_AMT_LC_1' 
    }
    ,
   CS_CAT_RECOVERED_AMT_LC_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'CS_CAT_RECOVERED_AMT_LC_1' 
    }
    ,
   CS_SYS_ID: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      primaryKey: true,
      autoIncrement: true,
      field: 'CS_SYS_ID' 
    }
    ,
   CS_CLM_SYS_ID: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      
      field: 'CS_CLM_SYS_ID' 
    }
    ,
   CS_CE_SYS_ID: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      
      field: 'CS_CE_SYS_ID' 
    }
    ,
   CS_DT: { 
      type: DataTypes.DATE, 
      allowNull: false, 
      
      field: 'CS_DT' 
    }
    ,
   CS_CURR_CODE: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'CS_CURR_CODE' 
    }
    ,
   CS_AMT_FC: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: false, 
      
      field: 'CS_AMT_FC' 
    }
    ,
   CS_AMT_LC_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'CS_AMT_LC_1' 
    }
    ,
   CS_AMT_LC_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'CS_AMT_LC_2' 
    }
    ,
   CS_AMT_LC_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'CS_AMT_LC_3' 
    }
    ,
   CS_AC_FEED_01: { 
      type: DataTypes.STRING(60), 
      allowNull: true, 
      
      field: 'CS_AC_FEED_01' 
    }
    ,
   CS_AC_FEED_02: { 
      type: DataTypes.STRING(60), 
      allowNull: true, 
      
      field: 'CS_AC_FEED_02' 
    }
    ,
   CS_AC_FEED_03: { 
      type: DataTypes.STRING(60), 
      allowNull: true, 
      
      field: 'CS_AC_FEED_03' 
    }
    ,
   CS_AC_FEED_04: { 
      type: DataTypes.STRING(60), 
      allowNull: true, 
      
      field: 'CS_AC_FEED_04' 
    }
    ,
   CS_AC_FEED_05: { 
      type: DataTypes.STRING(60), 
      allowNull: true, 
      
      field: 'CS_AC_FEED_05' 
    }
    ,
   CS_SUMM_UPD_STS: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'CS_SUMM_UPD_STS' 
    }
    ,
   CS_ENT_COMPL_YN: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'CS_ENT_COMPL_YN' 
    }
    ,
   CS_CLA_RI_INT_YN: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'CS_CLA_RI_INT_YN' 
    }
    ,
   CS_CLA_RI_INT_REM: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'CS_CLA_RI_INT_REM' 
    }
    ,
   CS_FLEX_YN_01: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'CS_FLEX_YN_01' 
    }
    ,
   CS_FLEX_YN_02: { 
      type: DataTypes.STRING(2), 
      allowNull: true, 
      
      field: 'CS_FLEX_YN_02' 
    }
    ,
   CS_FLEX_YN_03: { 
      type: DataTypes.STRING(3), 
      allowNull: true, 
      
      field: 'CS_FLEX_YN_03' 
    }
    ,
   CS_FLEX_YN_04: { 
      type: DataTypes.STRING(4), 
      allowNull: true, 
      
      field: 'CS_FLEX_YN_04' 
    }
    ,
   CS_FLEX_YN_05: { 
      type: DataTypes.STRING(5), 
      allowNull: true, 
      
      field: 'CS_FLEX_YN_05' 
    }
    ,
   CS_CLM_BR_STATUS: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'CS_CLM_BR_STATUS' 
    }
    ,
   CS_REINST_DONE_YN: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'CS_REINST_DONE_YN' 
    }
    
    }, {
        tableName: 'PGIT_CLM_SETL',
        timestamps: false,
        freezeTableName: true,
        underscored: true,
    });
    return PgitClmSetl;
};