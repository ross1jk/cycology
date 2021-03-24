module.exports = function (sequelize, DataTypes) {
    const Route = ("Route", {
        start_location: {
            type: DataTypes.STRING,
            allowNull: false
        },
        end_location: {
            type: DataTypes.STRING,
            allowNull: false
        },
        route_rating: {
            type: DataTypes.INT,
            allowNull: false
        },
        comments: {
            type: DataTypes.TEXT,
            allowNull: true
        }
    }); 
    return Route; 
};