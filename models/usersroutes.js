'use strict';

module.exports = (sequelize, DataTypes) => {
  const UsersRoutes = sequelize.define('UsersRoutes', {
    userId: DataTypes.INTEGER,
    routeId: DataTypes.INTEGER,
    rating: { type: DataTypes.INTEGER, defaultValue: 0 },
    comments: DataTypes.STRING,
  }, {});
  UsersRoutes.associate = (models) => {
    UsersRoutes.belongsTo(models.User, {foreignKey: 'userId'})
    UsersRoutes.belongsTo(models.Route, {foreignKey: 'routeId'})
 
}; 
return UsersRoutes; 
};