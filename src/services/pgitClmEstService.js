const { PgitClmEst } = require('../models');

exports.getAll = async (filters, { limit = 10, offset = 0, order } = {}) => {
  return PgitClmEst.findAll({ where: filters, limit, offset, ...(order && { order }) });
};

exports.getById = async (id) => {
  const items = await PgitClmEst.findAll({
    where: { CE_CLMAP_SYS_ID: id },
    raw: true
  });
  if (!items || items.length === 0) {
    const error = new Error(`PgitClmEst with CE_CLMAP_SYS_ID ${id} not found`);
    error.statusCode = 404;
    throw error;
  }

  const groupedResult = items.reduce((acc, row) => {
    const key = row.CE_SYS_ID;
    (acc[key] ??= []).push(row);
    return acc;
  }, {});

  return groupedResult;
};

exports.create = async (data) => {
  return await PgitClmEst.create(data);
};

exports.update = async (id, updatedData) => {
  const item = await PgitClmEst.findByPk(id);
  if (!item) {
    const error = new Error(`PgitClmEst with ID ${id} not found`);
    error.statusCode = 404;
    throw error;
  }
  await item.update(updatedData);
  return item;
};

exports.deleteItem = async (id) => {
  const item = await PgitClmEst.findByPk(id);
  if (!item) {
    const error = new Error(`PgitClmEst with ID ${id} not found`);
    error.statusCode = 404;
    throw error;
  }
  await item.destroy();
  return item;
};