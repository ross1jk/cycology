// Sequelize (capital) references the standard library
const Sequelize = require("sequelize");
// Sequelize (lowercase) references our connection to the DB.
const sequelize = require("../config/connection.js");

const Route = sequelize.define("Route", {
  start_location: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  end_location: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  route_rating: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  comments: {
    type: Sequelize.TEXT,
    allowNull: true,
  },
});

Route.sync();
module.exports = Route;
