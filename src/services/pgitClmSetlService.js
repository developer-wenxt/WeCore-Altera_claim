const { PgitClmSetl } = require('../models');

exports.getAll = async (filters, { limit = 10, offset = 0, order } = {}) => {
  return PgitClmSetl.findAll({ where: filters, limit, offset, ...(order && { order }) });
};

exports.getById = async (id) => {
  const item = await PgitClmSetl.findByPk(id);
  if (!item) {
    const error = new Error(`PgitClmSetl with ID ${id} not found`);
    error.statusCode = 404;
    throw error;
  }
  return item;
};

exports.create = async (data) => {
  return await PgitClmSetl.create(data);
};

exports.update = async (id, updatedData) => {
  const item = await PgitClmSetl.findByPk(id);
  if (!item) {
    const error = new Error(`PgitClmSetl with ID ${id} not found`);
    error.statusCode = 404;
    throw error;
  }
  await item.update(updatedData);
  return item;
};

exports.deleteItem = async (id) => {
  const item = await PgitClmSetl.findByPk(id);
  if (!item) {
    const error = new Error(`PgitClmSetl with ID ${id} not found`);
    error.statusCode = 404;
    throw error;
  }
  await item.destroy();
  return item;
};