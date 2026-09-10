const { Sequelize, DataTypes, QueryTypes } = require('sequelize');
const fs = require('fs');
const path = require('path');
const initOracle = require('../utils/initOracle');

initOracle();

const sequelize = new Sequelize(
  process.env.DB_NAME || process.env.DB_SERVICE_NAME || process.env.DB_SCHEMA,
  process.env.DB_USER,
  process.env.DB_PASS,
  {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT || 1521, // Default Oracle port
    dialect: 'oracle', // Changed from 'mysql'
    logging: false,
    dialectOptions: {
      connectString: `${process.env.DB_HOST}:${process.env.DB_PORT || 1521}/${process.env.DB_SERVICE_NAME}`,
      // Additional Oracle-specific options if needed
    },
  }
);

// Patch Oracle queryGenerator to use ROWNUM pagination for Oracle 11g and lower version compatibility across all model APIs
const qg = sequelize.dialect.queryGenerator;
if (qg && qg.selectQuery) {
  const origSelectQuery = qg.selectQuery.bind(qg);
  qg.selectQuery = function(tableName, options, model) {
    const limit = options.limit;
    const offset = options.offset || 0;
    const hasPagination = (limit !== undefined && limit !== null) || offset > 0;
    const optsWithoutLimitOffset = hasPagination
      ? { ...options, limit: undefined, offset: undefined }
      : options;
    let sql = origSelectQuery(tableName, optsWithoutLimitOffset, model);
    if (hasPagination) {
      if (sql.endsWith(';')) sql = sql.slice(0, -1);
      const maxRow = limit !== undefined && limit !== null ? Number(offset) + Number(limit) : null;
      const maxRowCond = maxRow !== null ? ` WHERE ROWNUM <= ${maxRow}` : '';
      sql = `SELECT * FROM (SELECT inner_query.*, ROWNUM rnum FROM (${sql}) inner_query${maxRowCond}) WHERE rnum > ${offset}`;
    }
    return sql;
  };
}

const db = {};

// Load models (same as before)
fs.readdirSync(__dirname)
  .filter(file => file !== 'index.js' && file.endsWith('.js'))
  .forEach(file => {
    const modelFn = require(path.join(__dirname, file));
    if (typeof modelFn === 'function') {
      const model = modelFn(sequelize, DataTypes);
      db[model.name] = model;
    }
  });

// Run associations (same as before)
Object.keys(db).forEach(modelName => {
  if ('associate' in db[modelName]) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;
db.QueryTypes = QueryTypes;

module.exports = db;