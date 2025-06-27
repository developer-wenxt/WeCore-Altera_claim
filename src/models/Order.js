module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define('Order', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true // Sequelize will use sequence+trigger if Oracle dialect supports it
    },
    item: {
      type: DataTypes.STRING(200), // Oracle prefers explicit length
      allowNull: false
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    orderTotal: {
      type: DataTypes.DECIMAL(15, 2), // Better for money than INTEGER
      allowNull: false
    }
  }, {
    tableName: 'ORDERS',                     // UPPERCASE for Oracle
    schema: process.env.DB_SCHEMA || 'MYUSER',
    timestamps: false,
    underscored: true                        // Maps to column names like user_id
  });

  Order.associate = (models) => {
    Order.belongsTo(models.User, { 
      foreignKey: 'userId', 
      targetKey: 'id' // maps to User.id
    });
  };

  return Order;
};
