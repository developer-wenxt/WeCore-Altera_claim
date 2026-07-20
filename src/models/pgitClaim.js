module.exports = (sequelize, DataTypes) => {
  const PgitClaim = sequelize.define('PgitClaim', {
       CLM_FLEXI_08: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'CLM_FLEXI_08' 
    }
    ,
   CLM_FLEXI_09: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'CLM_FLEXI_09' 
    }
    ,
   CLM_FLEXI_10: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'CLM_FLEXI_10' 
    }
    ,
   CLM_CLF_LF_NO: { 
      type: DataTypes.STRING(20), 
      allowNull: true, 
      
      field: 'CLM_CLF_LF_NO' 
    }
    ,
   CLM_UPD_SUMM_YN: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'CLM_UPD_SUMM_YN' 
    }
    ,
   CLM_ACNDT_ADDR_01: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'CLM_ACNDT_ADDR_01' 
    }
    ,
   CLM_ACNDT_ADDR_02: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'CLM_ACNDT_ADDR_02' 
    }
    ,
   CLM_ACNDT_ADDR_03: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'CLM_ACNDT_ADDR_03' 
    }
    ,
   CLM_ACNDT_COUNTRY: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'CLM_ACNDT_COUNTRY' 
    }
    ,
   CLM_ACNDT_STATE: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'CLM_ACNDT_STATE' 
    }
    ,
   CLM_ACNDT_CITY: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'CLM_ACNDT_CITY' 
    }
    ,
   CLM_REINST_REQD_YN: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'CLM_REINST_REQD_YN' 
    }
    ,
   CLM_ORPH_CONV_DT: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'CLM_ORPH_CONV_DT' 
    }
    ,
   CLM_INTEREST_PROC_DT: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'CLM_INTEREST_PROC_DT' 
    }
    ,
   CLM_YEAR: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      
      field: 'CLM_YEAR' 
    }
    ,
   CLM_CLMNT_NAME: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'CLM_CLMNT_NAME' 
    }
    ,
   CLM_CLMNT_ADDR_01: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'CLM_CLMNT_ADDR_01' 
    }
    ,
   CLM_CLMNT_ADDR_02: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'CLM_CLMNT_ADDR_02' 
    }
    ,
   CLM_CLMNT_ADDR_03: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'CLM_CLMNT_ADDR_03' 
    }
    ,
   CLM_CLMNT_COUNTRY: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'CLM_CLMNT_COUNTRY' 
    }
    ,
   CLM_CLMNT_STATE: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'CLM_CLMNT_STATE' 
    }
    ,
   CLM_CLMNT_CITY: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'CLM_CLMNT_CITY' 
    }
    ,
   CLM_CLMNT_PIN_CODE: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'CLM_CLMNT_PIN_CODE' 
    }
    ,
   CLM_DOC_SUBMISSION_DT: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'CLM_DOC_SUBMISSION_DT' 
    }
    ,
   CLM_DISCOVERY_DT: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'CLM_DISCOVERY_DT' 
    }
    ,
   CLM_SUIT_DT: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'CLM_SUIT_DT' 
    }
    ,
   CLM_REINST_TYPE: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'CLM_REINST_TYPE' 
    }
    ,
   CLM_INST_CODE: { 
      type: DataTypes.STRING(60), 
      allowNull: true, 
      
      field: 'CLM_INST_CODE' 
    }
    ,
   CLM_FLEXI_11: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'CLM_FLEXI_11' 
    }
    ,
   CLM_FLEXI_12: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'CLM_FLEXI_12' 
    }
    ,
   CLM_FLEXI_13: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'CLM_FLEXI_13' 
    }
    ,
   CLM_FLEXI_14: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'CLM_FLEXI_14' 
    }
    ,
   CLM_FLEXI_15: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'CLM_FLEXI_15' 
    }
    ,
   CLM_FINAL_YN: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'CLM_FINAL_YN' 
    }
    ,
   CLM_CLMNT_TEL_NO: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'CLM_CLMNT_TEL_NO' 
    }
    ,
   CLM_CLMNT_FAX_NO: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'CLM_CLMNT_FAX_NO' 
    }
    ,
   CLM_CLMNT_EMAIL_ID: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'CLM_CLMNT_EMAIL_ID' 
    }
    ,
   CLM_CLMNT_SSN_NO: { 
      type: DataTypes.STRING(11), 
      allowNull: true, 
      
      field: 'CLM_CLMNT_SSN_NO' 
    }
    ,
   CLM_SETTLEMENT_INST_CODE: { 
      type: DataTypes.STRING(60), 
      allowNull: true, 
      
      field: 'CLM_SETTLEMENT_INST_CODE' 
    }
    ,
   CLM_ADDL_CLMNT_NAME: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'CLM_ADDL_CLMNT_NAME' 
    }
    ,
   CLM_ACNDT_COUNTY: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'CLM_ACNDT_COUNTY' 
    }
    ,
   CLM_CLMNT_COUNTY: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'CLM_CLMNT_COUNTY' 
    }
    ,
   CLM_ADJUSTOR_CODE: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'CLM_ADJUSTOR_CODE' 
    }
    ,
   CLM_AC_FEED_01: { 
      type: DataTypes.STRING(60), 
      allowNull: true, 
      
      field: 'CLM_AC_FEED_01' 
    }
    ,
   CLM_POL_STAT_CODE: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'CLM_POL_STAT_CODE' 
    }
    ,
   CLM_POL_REF_NO: { 
      type: DataTypes.STRING(60), 
      allowNull: true, 
      
      field: 'CLM_POL_REF_NO' 
    }
    ,
   CLM_TYP_OF_CLM: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'CLM_TYP_OF_CLM' 
    }
    ,
   CLM_OCC_TYPE: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'CLM_OCC_TYPE' 
    }
    ,
   CLM_SUMM_UPD_STS: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'CLM_SUMM_UPD_STS' 
    }
    ,
   CLM_ENT_COMPL_YN: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'CLM_ENT_COMPL_YN' 
    }
    ,
   CLM_REMARKS_01: { 
      type: DataTypes.STRING(4000), 
      allowNull: true, 
      
      field: 'CLM_REMARKS_01' 
    }
    ,
   CLM_REMARKS_02: { 
      type: DataTypes.STRING(4000), 
      allowNull: true, 
      
      field: 'CLM_REMARKS_02' 
    }
    ,
   CLM_MRTA_YN: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'CLM_MRTA_YN' 
    }
    ,
   CLM_MRTA_NO: { 
      type: DataTypes.STRING(60), 
      allowNull: true, 
      
      field: 'CLM_MRTA_NO' 
    }
    ,
   CLM_BR_STATUS: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'CLM_BR_STATUS' 
    }
    ,
   CLM_RETRO_DT: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'CLM_RETRO_DT' 
    }
    ,
   CLM_FAC_APPL_YN: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'CLM_FAC_APPL_YN' 
    }
    ,
   CLM_SYS_ID: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      primaryKey: true,
      field: 'CLM_SYS_ID' 
    }
    ,
   CLM_POL_SYS_ID: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'CLM_POL_SYS_ID' 
    }
    ,
   CLM_CI_SYS_ID: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'CLM_CI_SYS_ID' 
    }
    ,
   CLM_INTM_NO: { 
      type: DataTypes.STRING(60), 
      allowNull: true, 
      
      field: 'CLM_INTM_NO' 
    }
    ,
   CLM_NO: { 
      type: DataTypes.STRING(60), 
      allowNull: true, 
      
      field: 'CLM_NO' 
    }
    ,
   CLM_POL_NO: { 
      type: DataTypes.STRING(60), 
      allowNull: true, 
      
      field: 'CLM_POL_NO' 
    }
    ,
   CLM_ORPHAN_YN: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'CLM_ORPHAN_YN' 
    }
    ,
   CLM_RECOVERY_YN: { 
      type: DataTypes.STRING(1), 
      allowNull: false, 
      
      field: 'CLM_RECOVERY_YN' 
    }
    ,
   CLM_SALVAGE_YN: { 
      type: DataTypes.STRING(1), 
      allowNull: false, 
      
      field: 'CLM_SALVAGE_YN' 
    }
    ,
   CLM_INTER_DIVN_YN: { 
      type: DataTypes.STRING(1), 
      allowNull: false, 
      
      field: 'CLM_INTER_DIVN_YN' 
    }
    ,
   CLM_DIVN_CODE: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'CLM_DIVN_CODE' 
    }
    ,
   CLM_PROD_CODE: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'CLM_PROD_CODE' 
    }
    ,
   CLM_POL_DIVN_CODE: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'CLM_POL_DIVN_CODE' 
    }
    ,
   CLM_TYPE: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'CLM_TYPE' 
    }
    ,
   CLM_STS: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'CLM_STS' 
    }
    ,
   CLM_LOSS_DT: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'CLM_LOSS_DT' 
    }
    ,
   CLM_EVENT_CODE: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'CLM_EVENT_CODE' 
    }
    ,
   CLM_LOSS_CODE: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'CLM_LOSS_CODE' 
    }
    ,
   CLM_CURR_CODE: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'CLM_CURR_CODE' 
    }
    ,
   CLM_INTM_DT: { 
      type: DataTypes.DATE, 
      allowNull: false, 
      
      field: 'CLM_INTM_DT' 
    }
    ,
   CLM_DS_TYPE: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'CLM_DS_TYPE' 
    }
    ,
   CLM_DS_CODE: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'CLM_DS_CODE' 
    }
    ,
   CLM_CR_DT: { 
      type: DataTypes.DATE, 
      allowNull: false, 
      
      field: 'CLM_CR_DT' 
    }
    ,
   CLM_CR_UID: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'CLM_CR_UID' 
    }
    ,
   CLM_UPD_DT: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'CLM_UPD_DT' 
    }
    ,
   CLM_UPD_UID: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'CLM_UPD_UID' 
    }
    ,
   CLM_POL_END_NO_IDX: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'CLM_POL_END_NO_IDX' 
    }
    ,
   CLM_POL_END_SR_NO: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'CLM_POL_END_SR_NO' 
    }
    ,
   CLM_COMP_CODE: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'CLM_COMP_CODE' 
    }
    ,
   CLM_DEPT_CODE: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'CLM_DEPT_CODE' 
    }
    ,
   CLM_CLASS_CODE: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'CLM_CLASS_CODE' 
    }
    ,
   CLM_CUST_CODE: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'CLM_CUST_CODE' 
    }
    ,
   CLM_ASSR_CODE: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'CLM_ASSR_CODE' 
    }
    ,
   CLM_ASSR_NAME: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'CLM_ASSR_NAME' 
    }
    ,
   CLM_INIT_EST_FC: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'CLM_INIT_EST_FC' 
    }
    ,
   CLM_INIT_EST_LC_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'CLM_INIT_EST_LC_1' 
    }
    ,
   CLM_INIT_EST_LC_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'CLM_INIT_EST_LC_2' 
    }
    ,
   CLM_INIT_EST_LC_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'CLM_INIT_EST_LC_3' 
    }
    ,
   CLM_CLAIMED_AMT_FC: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'CLM_CLAIMED_AMT_FC' 
    }
    ,
   CLM_CLAIMED_AMT_LC_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'CLM_CLAIMED_AMT_LC_1' 
    }
    ,
   CLM_CLAIMED_AMT_LC_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'CLM_CLAIMED_AMT_LC_2' 
    }
    ,
   CLM_CLAIMED_AMT_LC_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'CLM_CLAIMED_AMT_LC_3' 
    }
    ,
   CLM_SETL_TYPE_CODE: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'CLM_SETL_TYPE_CODE' 
    }
    ,
   CLM_SETL_BASIS_CODE: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'CLM_SETL_BASIS_CODE' 
    }
    ,
   CLM_LOSS_REMARKS: { 
      type: DataTypes.STRING(4000), 
      allowNull: true, 
      
      field: 'CLM_LOSS_REMARKS' 
    }
    ,
   CLM_CAUSE_LOSS: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'CLM_CAUSE_LOSS' 
    }
    ,
   CLM_SPUDDING_DT: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'CLM_SPUDDING_DT' 
    }
    ,
   CLM_APPR_DT: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'CLM_APPR_DT' 
    }
    ,
   CLM_APPR_UID: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'CLM_APPR_UID' 
    }
    ,
   CLM_CLOSE_DT: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'CLM_CLOSE_DT' 
    }
    ,
   CLM_CLOSE_UID: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'CLM_CLOSE_UID' 
    }
    ,
   CLM_CLOSE_REASON_CODE: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'CLM_CLOSE_REASON_CODE' 
    }
    ,
   CLM_CLOSE_REMARKS: { 
      type: DataTypes.STRING(4000), 
      allowNull: true, 
      
      field: 'CLM_CLOSE_REMARKS' 
    }
    ,
   CLM_ACNDT_PIN_CODE: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'CLM_ACNDT_PIN_CODE' 
    }
    ,
   CLM_SUIT_YN: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'CLM_SUIT_YN' 
    }
    ,
   CLM_FLEXI_01: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'CLM_FLEXI_01' 
    }
    ,
   CLM_FLEXI_02: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'CLM_FLEXI_02' 
    }
    ,
   CLM_FLEXI_03: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'CLM_FLEXI_03' 
    }
    ,
   CLM_FLEXI_04: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'CLM_FLEXI_04' 
    }
    ,
   CLM_FLEXI_05: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'CLM_FLEXI_05' 
    }
    ,
   CLM_FLEXI_06: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'CLM_FLEXI_06' 
    }
    ,
   CLM_FLEXI_07: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'CLM_FLEXI_07' 
    }
    
    }, {
        tableName: 'PGIT_CLAIM',
        timestamps: false,
        freezeTableName: true,
        underscored: true,
    });
    return PgitClaim;
};