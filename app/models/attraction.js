"use strict";

module.exports = function(sequelize, DataTypes) {
    var Attraction = sequelize.define("Attraction", {
        title: DataTypes.STRING,
        rating: DataTypes.INTEGER,
        distance: DataTypes.STRING,
        phone: DataTypes.STRING,
        address: DataTypes.STRING,
        description: DataTypes.STRING,
        lat: {
            type: DataTypes.FLOAT,
            defaultValue: false
        },
        lng: {
            type: DataTypes.FLOAT,
            defaultValue: false
        },
    }, {
        classMethods: {
            associate: function(models) {
                Attraction.hasMany(models.Place)
            }
        }
    });

    return Attraction;
};
