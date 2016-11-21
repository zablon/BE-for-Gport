"use strict";

module.exports = function(sequelize, DataTypes) {
    var Place = sequelize.define("Place", {
        title: DataTypes.STRING,
        type: DataTypes.STRING,
        folder: DataTypes.STRING,
        distance: DataTypes.STRING,
        phone: DataTypes.STRING,
        address: DataTypes.STRING,
        description: DataTypes.STRING,
        children: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        conditioner: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        dush: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        eat: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        toilet: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        tv: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        wifi: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        refrigeter: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        swiming: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        lat: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        lng: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
    }, {
        classMethods: {
            associate: function(models) {
                Place.hasMany(models.Room)
            }
        }
    });

    return Place;
};
