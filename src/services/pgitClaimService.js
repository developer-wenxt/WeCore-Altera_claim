const { PgitClaim } = require('../models');

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

exports.create = async (data) => {
  return await PgitClaim.create(data);
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