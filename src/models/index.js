const { Sequelize, DataTypes } = require('sequelize');
const fs = require('fs');
const path = require('path');
const oracledb = require('oracledb');

// Initialize Oracle client using ORACLE_LIB_DIR from .env
try {
  const initOptions = {};
  if (process.env.ORACLE_LIB_DIR) {
    initOptions.libDir = process.env.ORACLE_LIB_DIR;
  }
  oracledb.initOracleClient(initOptions);
} catch (err) {
  console.error('Error initializing Oracle Client:', err);
  process.exit(1);
}

const sequelize = new Sequelize(
  process.env.DB_NAME, // Service name for Oracle
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

module.exports = db;