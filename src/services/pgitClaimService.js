const { PgitClaim, sequelize, Sequelize } = require('../models');
const { QueryTypes } = Sequelize;

exports.getAll = async (filters, { limit = 10, offset = 0, order } = {}) => {
  return PgitClaim.findAll({
    where: filters,
    attributes: [
      'CLM_SYS_ID',
      'CLM_INTM_NO',
      'CLM_NO',
      'CLM_POL_NO',
      'CLM_PROD_CODE',
      'CLM_STS',
      'CLM_ASSR_NAME',
      'CLM_LOSS_DT',
      'CLM_INTM_DT',
      'CLM_CR_DT'
    ],
    limit,
    offset,
    ...(order && { order })
  });
};

exports.getById = async (id) => {
  const item = await PgitClaim.findByPk(id);
  if (!item) {
    const error = new Error(`PgitClaim with ID ${id} not found`);
    error.statusCode = 404;
    throw error;
  }
  return item;
};

async function getNextClmSysId() {
  const [result] = await sequelize.query(
    'SELECT PGI_CLM_SYS_ID.NEXTVAL AS NEXTVAL FROM DUAL',
    { type: QueryTypes.SELECT }
  );
  return result.NEXTVAL;
}

// async function generateClmNumber(clmSysId, transaction) {
//   const plsql = `
//     DECLARE
//       CURSOR C1 IS
//         SELECT *
//         FROM PGIT_CLAIM
//         WHERE CLM_SYS_ID = :clmSysId;

//       M_CLM         C1%ROWTYPE;
//       M_CLM_NO      VARCHAR2(100);
//       M_CLM_NO_AVL  VARCHAR2(1);
//     BEGIN
//       OPEN C1;
//       FETCH C1 INTO M_CLM;
//       CLOSE C1;

//       PGIPK_DOCUMENT_NUMBER.Pr_Generate_Doc_Number(
//         P_DS_TYPE    => M_CLM.CLM_DS_TYPE,
//         P_DS_CODE    => M_CLM.CLM_DS_CODE,
//         P_COMP_CODE  => M_CLM.CLM_COMP_CODE,
//         P_DEPT_CODE  => M_CLM.CLM_DEPT_CODE,
//         P_DIVN_CODE  => M_CLM.CLM_DIVN_CODE,
//         P_SYS_ID     => M_CLM.CLM_SYS_ID,
//         P_DOC_NUMBER => M_CLM_NO,
//         P_DOC_NO_AVL => M_CLM_NO_AVL
//       );

//       UPDATE PGIT_CLAIM
//          SET CLM_NO = M_CLM_NO
//        WHERE CLM_SYS_ID = M_CLM.CLM_SYS_ID;
//     END;
//   `;

//   await sequelize.query(plsql, {
//     replacements: { clmSysId },
//     type: QueryTypes.RAW,
//     transaction
//   });

//   const result = await PgitClaim.findByPk(clmSysId, {
//     attributes: ['CLM_NO'],
//     transaction
//   });

//   return result?.CLM_NO;
// }

// exports.create = async (data) => {
//   const transaction = await sequelize.transaction();

//   try {
//     const nextId = await getNextClmSysId();
//     data.CLM_SYS_ID = nextId;

//     data.CLM_NO = 'NUMBER';

//     const createdRecord = await PgitClaim.create(data, { transaction });

//     const generatedClmNo = await generateClmNumber(
//       createdRecord.CLM_SYS_ID,
//       transaction
//     );

//     if (!generatedClmNo || generatedClmNo === 'NUMBER') {
//       throw new Error('CLM_NO generation failed');
//     }

//     await transaction.commit();

//     return {
//       success: true,
//       message: 'Claim created successfully',
//       data: {
//         CLM_SYS_ID: createdRecord.CLM_SYS_ID,
//         CLM_NO: generatedClmNo, 
//         createdRecord
//       }
//     };

//     throw err;
//   }
// };z  

exports.generateDocumentNumber = async (sysId) => {
  const plsql = `
    DECLARE
      CURSOR C1 IS
        SELECT *
        FROM PGIT_CLAIM
        WHERE CLM_SYS_ID = :sysId;

      M_CLM         C1%ROWTYPE;
      M_CLM_NO      VARCHAR2(100);
      M_CLM_NO_AVL  VARCHAR2(1);
    BEGIN
      OPEN C1;
      FETCH C1 INTO M_CLM;
      CLOSE C1;

      PGIPK_DOCUMENT_NUMBER.Pr_Generate_Doc_Number(
        P_DS_TYPE    => M_CLM.CLM_DS_TYPE,
        P_DS_CODE    => M_CLM.CLM_DS_CODE,
        P_COMP_CODE  => M_CLM.CLM_COMP_CODE,
        P_DEPT_CODE  => M_CLM.CLM_DEPT_CODE,
        P_DIVN_CODE  => M_CLM.CLM_DIVN_CODE,
        P_SYS_ID     => M_CLM.CLM_SYS_ID,
        P_DOC_NUMBER => M_CLM_NO,
        P_DOC_NO_AVL => M_CLM_NO_AVL
      );

      UPDATE PGIT_CLAIM
         SET CLM_NO = M_CLM_NO
       WHERE CLM_SYS_ID = M_CLM.CLM_SYS_ID;
    END;
  `;

  await sequelize.query(plsql, {
    bind: { sysId },
    type: QueryTypes.RAW
  });

  const result = await PgitClaim.findByPk(sysId, {
    attributes: ['CLM_NO']
  });

  return result;
};

exports.create = async (data) => {
  const nextId = await getNextClmSysId();
  data.CLM_SYS_ID = nextId;
  let createdRecord = await PgitClaim.create(data);
  let clmNo = null;

  try {
    const generatedDoc = await exports.generateDocumentNumber(nextId);
    if (generatedDoc && generatedDoc.CLM_NO) {
      clmNo = generatedDoc.CLM_NO;
    } else {
      await createdRecord.reload();
      clmNo = createdRecord.CLM_NO;
    }
  } catch (err) {
    console.error('Error generating CLM_NO:', err);
  }

  const responseData = createdRecord.toJSON ? createdRecord.toJSON() : createdRecord;
  responseData.CLM_NO = clmNo;

  return responseData;
};

exports.update = async (id, updatedData) => {
  const item = await PgitClaim.findByPk(id);
  if (!item) {
    const error = new Error(`PgitClaim with ID ${id} not found`);
    error.statusCode = 404;
    throw error;
  }
  await item.update(updatedData);
  return item;
};

exports.deleteItem = async (id) => {
  const item = await PgitClaim.findByPk(id);
  if (!item) {
    const error = new Error(`PgitClaim with ID ${id} not found`);
    error.statusCode = 404;
    throw error;
  }
  await item.destroy();
  return item;
};