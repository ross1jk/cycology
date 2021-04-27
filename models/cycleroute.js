module.exports = (sequelize, DataTypes) => {

const Route = sequelize.define("Route", {
  start_location: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  end_location: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  route_rating: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  comments: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
});
return Route;

};
