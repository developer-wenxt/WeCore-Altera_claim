const { PgitClmIntimation, sequelize, Sequelize } = require('../models');
const { QueryTypes } = Sequelize;
  
exports.getAll = async (filters, queryOptions) => {
  const where = {};
  if (filters.CI_SYS_ID) where.CI_SYS_ID = filters.CI_SYS_ID;
  if (filters.CI_INTM_NO) where.CI_INTM_NO = filters.CI_INTM_NO;

  const result = await PgitClmIntimation.findAll({
    where,
    ...queryOptions
  });
  return result;
};


exports.getById = async (id) => {
  const item = await PgitClmIntimation.findOne({ where: { CI_INTM_NO: id } });
  if (!item) {
    const error = new Error(`PgitClmIntimation with CI_INTM_NO ${id} not found`);
    error.statusCode = 404;
    throw error;
  }
  return item;
};
 
async function getNextClmIntSysId() {
  const [result] = await sequelize.query(
    'SELECT PGI_CI_SYS_ID.NEXTVAL AS NEXTVAL FROM DUAL',
    { type: QueryTypes.SELECT }
  );
  return result.NEXTVAL;
}
 
async function generateClmIntimationNumber(ciSysId, transaction) {
  const plsql = `
    DECLARE
      CURSOR C1 IS
        SELECT *
        FROM PGIT_CLM_INTIMATION
        WHERE CI_SYS_ID = :ciSysId;
 
      M_CI         C1%ROWTYPE;
      M_CI_NO      VARCHAR2(100);
      M_CI_NO_AVL  VARCHAR2(1);
    BEGIN
      OPEN C1;
      FETCH C1 INTO M_CI;
      CLOSE C1;
 
      PGIPK_DOCUMENT_NUMBER.Pr_Generate_Doc_Number(
        P_DS_TYPE    => M_CI.CI_DS_TYPE,
        P_DS_CODE    => M_CI.CI_DS_CODE,
        P_COMP_CODE  => M_CI.CI_COMP_CODE,
        P_DEPT_CODE  => M_CI.CI_DEPT_CODE,
        P_DIVN_CODE  => M_CI.CI_DIVN_CODE,
        P_SYS_ID     => M_CI.CI_SYS_ID,
        P_DOC_NUMBER => M_CI_NO,
        P_DOC_NO_AVL => M_CI_NO_AVL
      );
 
      UPDATE PGIT_CLM_INTIMATION
         SET CI_INTM_NO = M_CI_NO
       WHERE CI_SYS_ID = M_CI.CI_SYS_ID;
    END;
  `;
 
  await sequelize.query(plsql, {
    replacements: { ciSysId },
    type: QueryTypes.RAW,
    transaction
  });
 
  const result = await PgitClmIntimation.findByPk(ciSysId, {
    attributes: ['CI_INTM_NO'],
    transaction
  });
 
  return result?.CI_INTM_NO;
}
 
exports.create = async (data) => {
  const transaction = await sequelize.transaction();
 
  try {
    const nextId = await getNextClmIntSysId();
    data.CI_SYS_ID = nextId;
 
    data.CI_INTM_NO = 'NUMBER';
 
    const createdRecord = await PgitClmIntimation.create(data, { transaction });
 
    const generatedCiNo = await generateClmIntimationNumber(
      createdRecord.CI_SYS_ID,
      transaction
    );
 
    if (!generatedCiNo || generatedCiNo === 'NUMBER') {
      throw new Error('CI_INTM_NO generation failed');
    }
 
    await transaction.commit();
 
    return {
      success: true,
      message: 'Claim Intimation created successfully',
      data: {
        CI_SYS_ID: createdRecord.CI_SYS_ID,
        CI_INTM_NO: generatedCiNo, 
        createdRecord
      }
    };
 
  } catch (err) {
    await transaction.rollback();
    throw err;
  }
};
 
exports.update = async (id, updatedData) => {
  const whereClause = isNaN(Number(id)) ? { CI_INTM_NO: id } : { CI_SYS_ID: id };
  const item = await PgitClmIntimation.findOne({ where: whereClause });
  if (!item) {
    const error = new Error(`PgitClmIntimation with ID/CI_INTM_NO ${id} not found`);
    error.statusCode = 404;
    throw error;
  }
  await item.update(updatedData);
  return item;
};
 
exports.deleteItem = async (id) => {
  const whereClause = isNaN(Number(id)) ? { CI_INTM_NO: id } : { CI_SYS_ID: id };
  const item = await PgitClmIntimation.findOne({ where: whereClause });
  if (!item) {
    const error = new Error(`PgitClmIntimation with ID/CI_INTM_NO ${id} not found`);
    error.statusCode = 404;
    throw error;
  }
  await item.destroy();
  return item;
};
 