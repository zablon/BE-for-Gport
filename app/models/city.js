"use strict";

module.exports = function(sequelize, DataTypes) {
    var City = sequelize.define("City", {
        name: DataTypes.STRING,
    }, {
        classMethods: {
            associate: function(models) {
                City.belongsTo(models.Region, {
                    onDelete: "CASCADE",
                    foreignKey: {
                        allowNull: false
                    }
                }),
                City.hasMany(models.Area);
                City.hasMany(models.Place);
            }
        }
    });

    return City;
};
