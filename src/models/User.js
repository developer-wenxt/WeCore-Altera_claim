module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    username: {
      type: DataTypes.STRING(100), // Oracle prefers explicit length
      allowNull: false,
      unique: true
    },
    password: {
      type: DataTypes.STRING(100),
      allowNull: false
    }
  }, {
    tableName: 'USERS',                    // Oracle stores table names in UPPERCASE
    schema: process.env.DB_SCHEMA || 'MYUSER', // Ensure correct schema
    timestamps: false,
    underscored: true                     // Optional: maps created_at instead of createdAt
  });

  User.associate = (models) => {
    User.hasMany(models.Order, { 
      foreignKey: 'userId', 
      sourceKey: 'id' // Important for explicit mapping
    });
  };

  return User;
};
