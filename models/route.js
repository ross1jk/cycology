module.exports = (sequelize, DataTypes) => {
const Route = sequelize.define("Route", {
  start_location: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  end_location: {
    type: DataTypes.STRING,
    allowNull: false,
  }
}, {});
Route.associate = function(models) { 
  Route.belongsToMany(models.User, { through: 'UsersRoutes', foreignKey: 'routeId', as: 'routeId' }) };
  return Route; 
};
