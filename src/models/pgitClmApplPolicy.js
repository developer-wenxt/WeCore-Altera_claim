module.exports = (sequelize, DataTypes) => {
  const PgitClmApplPolicy = sequelize.define('PgitClmApplPolicy', {
       CLMAP_SYS_ID: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      primaryKey: true,
      autoIncrement: true,
      field: 'CLMAP_SYS_ID' 
    }
    ,
   CLMAP_CLM_SYS_ID: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      
      field: 'CLMAP_CLM_SYS_ID' 
    }
    ,
   CLMAP_POL_SYS_ID: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      
      field: 'CLMAP_POL_SYS_ID' 
    }
    ,
   CLMAP_SECTION_CODE: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'CLMAP_SECTION_CODE' 
    }
    ,
   CLMAP_POL_NO: { 
      type: DataTypes.STRING(60), 
      allowNull: false, 
      
      field: 'CLMAP_POL_NO' 
    }
    ,
   CLMAP_REINST_DONE_YN: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'CLMAP_REINST_DONE_YN' 
    }
    ,
   CLMAP_CR_DT: { 
      type: DataTypes.DATE, 
      allowNull: false, 
      
      field: 'CLMAP_CR_DT' 
    }
    ,
   CLMAP_CR_UID: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'CLMAP_CR_UID' 
    }
    ,
   CLMAP_UPD_DT: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'CLMAP_UPD_DT' 
    }
    ,
   CLMAP_UPD_UID: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'CLMAP_UPD_UID' 
    }
    ,
   CLMAP_TOT_LOSS_YN: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'CLMAP_TOT_LOSS_YN' 
    }
    ,
   CLMAP_PSEC_SYS_ID: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      
      field: 'CLMAP_PSEC_SYS_ID' 
    }
    ,
   CLMAP_END_NO_IDX: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      
      field: 'CLMAP_END_NO_IDX' 
    }
    ,
   CLMAP_END_SR_NO: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      
      field: 'CLMAP_END_SR_NO' 
    }
    ,
   CLMAP_COVER_CODE: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'CLMAP_COVER_CODE' 
    }
    ,
   CLMAP_PRAI_LVL1_SYS_ID: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      
      field: 'CLMAP_PRAI_LVL1_SYS_ID' 
    }
    ,
   CLMAP_PRAI_LVL1_SR_NO: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      
      field: 'CLMAP_PRAI_LVL1_SR_NO' 
    }
    ,
   CLMAP_PRAI_LVL1_DESC: { 
      type: DataTypes.STRING(240), 
      allowNull: false, 
      
      field: 'CLMAP_PRAI_LVL1_DESC' 
    }
    ,
   CLMAP_PRAI_LVL2_SYS_ID: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'CLMAP_PRAI_LVL2_SYS_ID' 
    }
    ,
   CLMAP_PRAI_LVL2_SR_NO: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'CLMAP_PRAI_LVL2_SR_NO' 
    }
    ,
   CLMAP_PRAI_LVL2_DESC: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'CLMAP_PRAI_LVL2_DESC' 
    }
    ,
   CLMAP_PRAI_LVL3_SYS_ID: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'CLMAP_PRAI_LVL3_SYS_ID' 
    }
    ,
   CLMAP_PRAI_LVL3_SR_NO: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'CLMAP_PRAI_LVL3_SR_NO' 
    }
    ,
   CLMAP_PRAI_LVL3_DESC: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'CLMAP_PRAI_LVL3_DESC' 
    }
    ,
   CLMAP_REMARKS: { 
      type: DataTypes.STRING(4000), 
      allowNull: true, 
      
      field: 'CLMAP_REMARKS' 
    }
    ,
   CLMAP_REINST_REQD_YN: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'CLMAP_REINST_REQD_YN' 
    }
    ,
   CLMAP_COMP_CODE: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'CLMAP_COMP_CODE' 
    }
    ,
   CLMAP_DIVN_CODE: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'CLMAP_DIVN_CODE' 
    }
    ,
   CLMAP_PROD_CODE: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'CLMAP_PROD_CODE' 
    }
    ,
   CLMAP_DEPT_CODE: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'CLMAP_DEPT_CODE' 
    }
    ,
   CLMAP_LOSS_CODE: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'CLMAP_LOSS_CODE' 
    }
    ,
   CLMAP_FLEXI_01: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'CLMAP_FLEXI_01' 
    }
    ,
   CLMAP_FLEXI_02: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'CLMAP_FLEXI_02' 
    }
    ,
   CLMAP_FLEXI_03: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'CLMAP_FLEXI_03' 
    }
    ,
   CLMAP_FLEXI_04: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'CLMAP_FLEXI_04' 
    }
    ,
   CLMAP_FLEXI_05: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'CLMAP_FLEXI_05' 
    }
    ,
   CLMAP_FLEXI_06: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'CLMAP_FLEXI_06' 
    }
    ,
   CLMAP_FLEXI_07: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'CLMAP_FLEXI_07' 
    }
    ,
   CLMAP_FLEXI_08: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'CLMAP_FLEXI_08' 
    }
    ,
   CLMAP_FLEXI_09: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'CLMAP_FLEXI_09' 
    }
    ,
   CLMAP_FLEXI_10: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'CLMAP_FLEXI_10' 
    }
    ,
   CLMAP_INVITE_REN_YN: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'CLMAP_INVITE_REN_YN' 
    }
    ,
   CLMAP_FLEXI_11: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'CLMAP_FLEXI_11' 
    }
    ,
   CLMAP_FLEXI_12: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'CLMAP_FLEXI_12' 
    }
    ,
   CLMAP_FLEXI_13: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'CLMAP_FLEXI_13' 
    }
    ,
   CLMAP_FLEXI_14: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'CLMAP_FLEXI_14' 
    }
    ,
   CLMAP_FLEXI_15: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'CLMAP_FLEXI_15' 
    }
    ,
   CLMAP_RETAIN_NCD_YN: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'CLMAP_RETAIN_NCD_YN' 
    }
    ,
   CLMAP_SMI_CODE: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'CLMAP_SMI_CODE' 
    }
    ,
   CLMAP_SMI_SYS_ID: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'CLMAP_SMI_SYS_ID' 
    }
    ,
   CLMAP_XL_RETN_AMT_LC_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'CLMAP_XL_RETN_AMT_LC_1' 
    }
    ,
   CLMAP_XL_RECOVERY_AMT_LC_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'CLMAP_XL_RECOVERY_AMT_LC_1' 
    }
    ,
   CLMAP_XL_RECOVERED_AMT_LC_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'CLMAP_XL_RECOVERED_AMT_LC_1' 
    }
    ,
   CLMAP_STOLEN_YN: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'CLMAP_STOLEN_YN' 
    }
    
    }, {
        tableName: 'PGIT_CLM_APPL_POLICY',
        timestamps: false,
        freezeTableName: true,
        underscored: true,
    });
    return PgitClmApplPolicy;
};