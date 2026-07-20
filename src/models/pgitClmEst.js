module.exports = (sequelize, DataTypes) => {
  const PgitClmEst = sequelize.define('PgitClmEst', {
       CE_SYS_ID: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      primaryKey: true,
      autoIncrement: true,
      field: 'CE_SYS_ID' 
    }
    ,
   CE_CLMAP_SYS_ID: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      
      field: 'CE_CLMAP_SYS_ID' 
    }
    ,
   CE_CLM_SYS_ID: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      
      field: 'CE_CLM_SYS_ID' 
    }
    ,
   CE_REF_TYPE: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'CE_REF_TYPE' 
    }
    ,
   CE_AC_DONE_YN: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'CE_AC_DONE_YN' 
    }
    ,
   CE_REMARKS: { 
      type: DataTypes.STRING(4000), 
      allowNull: true, 
      
      field: 'CE_REMARKS' 
    }
    ,
   CE_CR_DT: { 
      type: DataTypes.DATE, 
      allowNull: false, 
      
      field: 'CE_CR_DT' 
    }
    ,
   CE_CR_UID: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'CE_CR_UID' 
    }
    ,
   CE_UPD_DT: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'CE_UPD_DT' 
    }
    ,
   CE_UPD_UID: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'CE_UPD_UID' 
    }
    ,
   CE_CURR_CODE: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'CE_CURR_CODE' 
    }
    ,
   CE_DT: { 
      type: DataTypes.DATE, 
      allowNull: false, 
      
      field: 'CE_DT' 
    }
    ,
   CE_REF_NO: { 
      type: DataTypes.STRING(60), 
      allowNull: true, 
      
      field: 'CE_REF_NO' 
    }
    ,
   CE_EST_IND: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'CE_EST_IND' 
    }
    ,
   CE_EST_TYPE: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'CE_EST_TYPE' 
    }
    ,
   CE_EST_CODE: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'CE_EST_CODE' 
    }
    ,
   CE_EST_SIGN: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      
      field: 'CE_EST_SIGN' 
    }
    ,
   CE_AMT_FC: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: false, 
      
      field: 'CE_AMT_FC' 
    }
    ,
   CE_AMT_LC_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'CE_AMT_LC_1' 
    }
    ,
   CE_AMT_LC_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'CE_AMT_LC_2' 
    }
    ,
   CE_AMT_LC_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'CE_AMT_LC_3' 
    }
    ,
   CE_OUR_SHARE_AMT_FC: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'CE_OUR_SHARE_AMT_FC' 
    }
    ,
   CE_OUR_SHARE_AMT_LC_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'CE_OUR_SHARE_AMT_LC_1' 
    }
    ,
   CE_OUR_SHARE_AMT_LC_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'CE_OUR_SHARE_AMT_LC_2' 
    }
    ,
   CE_OUR_SHARE_AMT_LC_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'CE_OUR_SHARE_AMT_LC_3' 
    }
    ,
   CE_OUR_SHARE_PERC: { 
      type: DataTypes.DECIMAL(8, 5), 
      allowNull: true, 
      
      field: 'CE_OUR_SHARE_PERC' 
    }
    ,
   CE_CS_AMT_FC: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: false, 
      
      field: 'CE_CS_AMT_FC' 
    }
    ,
   CE_LINK_SYS_ID: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'CE_LINK_SYS_ID' 
    }
    ,
   CE_APPR_YN: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'CE_APPR_YN' 
    }
    ,
   CE_APPR_UID: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'CE_APPR_UID' 
    }
    ,
   CE_APPR_DT: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'CE_APPR_DT' 
    }
    ,
   CE_CLOSE_YN: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'CE_CLOSE_YN' 
    }
    ,
   CE_CLOSE_UID: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'CE_CLOSE_UID' 
    }
    ,
   CE_CLOSE_DT: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'CE_CLOSE_DT' 
    }
    ,
   CE_REASON_CODE: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'CE_REASON_CODE' 
    }
    ,
   CE_COMP_CODE: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'CE_COMP_CODE' 
    }
    ,
   CE_DIVN_CODE: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'CE_DIVN_CODE' 
    }
    ,
   CE_PROD_CODE: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'CE_PROD_CODE' 
    }
    ,
   CE_DEPT_CODE: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'CE_DEPT_CODE' 
    }
    ,
   CE_FINAL_SETL_YN: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'CE_FINAL_SETL_YN' 
    }
    ,
   CE_TDS_AMT_FC: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'CE_TDS_AMT_FC' 
    }
    ,
   CE_TDS_AMT_LC_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'CE_TDS_AMT_LC_1' 
    }
    ,
   CE_TDS_AMT_LC_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'CE_TDS_AMT_LC_2' 
    }
    ,
   CE_TDS_AMT_LC_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'CE_TDS_AMT_LC_3' 
    }
    ,
   CE_SRV_AMT_FC: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'CE_SRV_AMT_FC' 
    }
    ,
   CE_SRV_AMT_LC_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'CE_SRV_AMT_LC_1' 
    }
    ,
   CE_SRV_AMT_LC_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'CE_SRV_AMT_LC_2' 
    }
    ,
   CE_SRV_AMT_LC_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'CE_SRV_AMT_LC_3' 
    }
    ,
   CE_CENT_PERC_INC_DONE_YN: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'CE_CENT_PERC_INC_DONE_YN' 
    }
    ,
   CE_EST_STS: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'CE_EST_STS' 
    }
    ,
   CE_PARTY_REF_NO: { 
      type: DataTypes.STRING(60), 
      allowNull: true, 
      
      field: 'CE_PARTY_REF_NO' 
    }
    ,
   CE_CUST_CODE: { 
      type: DataTypes.STRING(60), 
      allowNull: true, 
      
      field: 'CE_CUST_CODE' 
    }
    ,
   CE_FRZ_YN: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'CE_FRZ_YN' 
    }
    ,
   CE_CLOSE_REMARKS: { 
      type: DataTypes.STRING(2000), 
      allowNull: true, 
      
      field: 'CE_CLOSE_REMARKS' 
    }
    ,
   CE_FLEXI_01: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'CE_FLEXI_01' 
    }
    ,
   CE_FLEXI_02: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'CE_FLEXI_02' 
    }
    ,
   CE_FLEXI_03: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'CE_FLEXI_03' 
    }
    ,
   CE_FLEXI_04: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'CE_FLEXI_04' 
    }
    ,
   CE_FLEXI_05: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'CE_FLEXI_05' 
    }
    ,
   CE_FLEXI_06: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'CE_FLEXI_06' 
    }
    ,
   CE_FLEXI_07: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'CE_FLEXI_07' 
    }
    ,
   CE_FLEXI_08: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'CE_FLEXI_08' 
    }
    ,
   CE_FLEXI_09: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'CE_FLEXI_09' 
    }
    ,
   CE_FLEXI_10: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'CE_FLEXI_10' 
    }
    ,
   CE_FLEXI_11: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'CE_FLEXI_11' 
    }
    ,
   CE_FLEXI_12: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'CE_FLEXI_12' 
    }
    ,
   CE_FLEXI_13: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'CE_FLEXI_13' 
    }
    ,
   CE_FLEXI_14: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'CE_FLEXI_14' 
    }
    ,
   CE_FLEXI_15: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'CE_FLEXI_15' 
    }
    ,
   CE_CLH_SYS_ID: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'CE_CLH_SYS_ID' 
    }
    ,
   CE_LINK_YN: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'CE_LINK_YN' 
    }
    ,
   CE_LINK_CE_REF_NO: { 
      type: DataTypes.STRING(60), 
      allowNull: true, 
      
      field: 'CE_LINK_CE_REF_NO' 
    }
    ,
   CE_EST_ACNT_REQD_YN: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'CE_EST_ACNT_REQD_YN' 
    }
    ,
   CE_EST_ACNT_GEN_MODE: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'CE_EST_ACNT_GEN_MODE' 
    }
    ,
   CE_CCRA_SYS_ID: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'CE_CCRA_SYS_ID' 
    }
    ,
   CE_CCR_SYS_ID: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'CE_CCR_SYS_ID' 
    }
    ,
   CE_SUPPL_NO: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'CE_SUPPL_NO' 
    }
    ,
   CE_EST_RECO_TYPE: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'CE_EST_RECO_TYPE' 
    }
    ,
   CE_ENT_COMPL_YN: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'CE_ENT_COMPL_YN' 
    }
    ,
   CE_CLM_BR_STATUS: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'CE_CLM_BR_STATUS' 
    }
    
    }, {
        tableName: 'PGIT_CLM_EST',
        timestamps: false,
        freezeTableName: true,
        underscored: true,
    });
    return PgitClmEst;
};