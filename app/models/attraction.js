"use strict";

module.exports = function(sequelize, DataTypes) {
    var Attraction = sequelize.define("Attraction", {
        title: DataTypes.STRING,
        rating: DataTypes.INTEGER,
        phone: DataTypes.STRING,
        address: DataTypes.STRING,
        description: DataTypes.STRING,
        lat: {
            type: DataTypes.DOUBLE,
            defaultValue: false
        },
        lng: {
            type: DataTypes.DOUBLE,
            defaultValue: false
        }
    }, {
        classMethods: {
            associate: function(models) {
                Attraction.belongsTo(models.City, {
                    onDelete: "CASCADE",
                    foreignKey: {
                        allowNull: false
                    }
                }),
                Attraction.belongsTo(models.Area, {
                    onDelete: "CASCADE",
                    foreignKey: {
                        allowNull: false
                    }
                })
            }
        }
    });

    return Attraction;
};
