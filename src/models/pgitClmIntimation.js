module.exports = (sequelize, DataTypes) => {
  const PgitClmIntimation = sequelize.define('PgitClmIntimation', {
       CI_EVENT_CODE: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'CI_EVENT_CODE' 
    }
    ,
   CI_COUNTY: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'CI_COUNTY' 
    }
    ,
   CI_CLM_TYPE: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'CI_CLM_TYPE' 
    }
    ,
   CI_FLEX_NUM_01: { 
      type: DataTypes.DECIMAL(20, 5), 
      allowNull: true, 
      
      field: 'CI_FLEX_NUM_01' 
    }
    ,
   CI_FLEX_NUM_02: { 
      type: DataTypes.DECIMAL(20, 5), 
      allowNull: true, 
      
      field: 'CI_FLEX_NUM_02' 
    }
    ,
   CI_FLEX_NUM_03: { 
      type: DataTypes.DECIMAL(20, 5), 
      allowNull: true, 
      
      field: 'CI_FLEX_NUM_03' 
    }
    ,
   CI_FLEX_NUM_04: { 
      type: DataTypes.DECIMAL(20, 5), 
      allowNull: true, 
      
      field: 'CI_FLEX_NUM_04' 
    }
    ,
   CI_FLEX_NUM_05: { 
      type: DataTypes.DECIMAL(20, 5), 
      allowNull: true, 
      
      field: 'CI_FLEX_NUM_05' 
    }
    ,
   CI_FLEX_DT_01: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'CI_FLEX_DT_01' 
    }
    ,
   CI_FLEX_DT_02: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'CI_FLEX_DT_02' 
    }
    ,
   CI_ENT_COMPL_YN: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'CI_ENT_COMPL_YN' 
    }
    ,
   CI_CLM_REG_INST_CODE: { 
      type: DataTypes.STRING(60), 
      allowNull: true, 
      
      field: 'CI_CLM_REG_INST_CODE' 
    }
    ,
   CI_LOSS_ADDR_01: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'CI_LOSS_ADDR_01' 
    }
    ,
   CI_LOSS_ADDR_02: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'CI_LOSS_ADDR_02' 
    }
    ,
   CI_LOSS_ADDR_03: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'CI_LOSS_ADDR_03' 
    }
    ,
   CI_LOSS_CITY: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'CI_LOSS_CITY' 
    }
    ,
   CI_LOSS_STATE: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'CI_LOSS_STATE' 
    }
    ,
   CI_LOSS_COUNTY: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'CI_LOSS_COUNTY' 
    }
    ,
   CI_LOSS_COUNTRY: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'CI_LOSS_COUNTRY' 
    }
    ,
   CI_LOSS_PIN_CODE: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'CI_LOSS_PIN_CODE' 
    }
    ,
   CI_SYS_ID: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      primaryKey: true,
      autoIncrement: true,
      field: 'CI_SYS_ID' 
    }
    ,
   CI_INTM_NO: { 
      type: DataTypes.STRING(60), 
      allowNull: false, 
      
      field: 'CI_INTM_NO' 
    }
    ,
   CI_LOSS_DT: { 
      type: DataTypes.DATE, 
      allowNull: false, 
      
      field: 'CI_LOSS_DT' 
    }
    ,
   CI_INTM_DT: { 
      type: DataTypes.DATE, 
      allowNull: false, 
      
      field: 'CI_INTM_DT' 
    }
    ,
   CI_INTM_NAME: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'CI_INTM_NAME' 
    }
    ,
   CI_ADDR_01: { 
      type: DataTypes.STRING(240), 
      allowNull: false, 
      
      field: 'CI_ADDR_01' 
    }
    ,
   CI_ADDR_02: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'CI_ADDR_02' 
    }
    ,
   CI_ADDR_03: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'CI_ADDR_03' 
    }
    ,
   CI_PHONE: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'CI_PHONE' 
    }
    ,
   CI_FAX: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'CI_FAX' 
    }
    ,
   CI_INTM_MODE: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'CI_INTM_MODE' 
    }
    ,
   CI_ASSR_NAME: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'CI_ASSR_NAME' 
    }
    ,
   CI_POL_NO: { 
      type: DataTypes.STRING(60), 
      allowNull: true, 
      
      field: 'CI_POL_NO' 
    }
    ,
   CI_DOC_DESP_YN: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'CI_DOC_DESP_YN' 
    }
    ,
   CI_CLM_REGD_YN: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'CI_CLM_REGD_YN' 
    }
    ,
   CI_CR_DT: { 
      type: DataTypes.DATE, 
      allowNull: false, 
      
      field: 'CI_CR_DT' 
    }
    ,
   CI_CR_UID: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'CI_CR_UID' 
    }
    ,
   CI_UPD_DT: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'CI_UPD_DT' 
    }
    ,
   CI_UPD_UID: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'CI_UPD_UID' 
    }
    ,
   CI_DS_TYPE: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'CI_DS_TYPE' 
    }
    ,
   CI_DS_CODE: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'CI_DS_CODE' 
    }
    ,
   CI_LOSS_REMARKS: { 
      type: DataTypes.STRING(4000), 
      allowNull: false, 
      
      field: 'CI_LOSS_REMARKS' 
    }
    ,
   CI_CITY: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'CI_CITY' 
    }
    ,
   CI_PIN_CODE: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'CI_PIN_CODE' 
    }
    ,
   CI_STATE: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'CI_STATE' 
    }
    ,
   CI_MOBILE_NO: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'CI_MOBILE_NO' 
    }
    ,
   CI_COMP_CODE: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'CI_COMP_CODE' 
    }
    ,
   CI_DIVN_CODE: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'CI_DIVN_CODE' 
    }
    ,
   CI_DEPT_CODE: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'CI_DEPT_CODE' 
    }
    ,
   CI_COUNTRY: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'CI_COUNTRY' 
    }
    ,
   CI_FLEXI_01: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'CI_FLEXI_01' 
    }
    ,
   CI_FLEXI_02: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'CI_FLEXI_02' 
    }
    ,
   CI_FLEXI_03: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'CI_FLEXI_03' 
    }
    ,
   CI_FLEXI_04: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'CI_FLEXI_04' 
    }
    ,
   CI_FLEXI_05: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'CI_FLEXI_05' 
    }
    ,
   CI_FLEXI_06: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'CI_FLEXI_06' 
    }
    ,
   CI_FLEXI_07: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'CI_FLEXI_07' 
    }
    ,
   CI_FLEXI_08: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'CI_FLEXI_08' 
    }
    ,
   CI_FLEXI_09: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'CI_FLEXI_09' 
    }
    ,
   CI_FLEXI_10: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'CI_FLEXI_10' 
    }
    ,
   CI_FLEXI_11: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'CI_FLEXI_11' 
    }
    ,
   CI_FLEXI_12: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'CI_FLEXI_12' 
    }
    ,
   CI_FLEXI_13: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'CI_FLEXI_13' 
    }
    ,
   CI_FLEXI_14: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'CI_FLEXI_14' 
    }
    ,
   CI_FLEXI_15: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'CI_FLEXI_15' 
    }
    ,
   CI_ADDL_CLMNT_NAME: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'CI_ADDL_CLMNT_NAME' 
    }
    
    }, {
        tableName: 'PGIT_CLM_INTIMATION',
        timestamps: false,
        freezeTableName: true,
        underscored: true,
    });
    return PgitClmIntimation;
};