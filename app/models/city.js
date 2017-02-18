"use strict";

module.exports = function(sequelize, DataTypes) {
    var City = sequelize.define("City", {
        name: DataTypes.STRING,
    }, {
        classMethods: {
            associate: function(models) {
                City.belongsTo(models.Country, {
                    onDelete: "CASCADE",
                    foreignKey: {
                        allowNull: false
                    }
                }),
                City.hasMany(models.Place);
            }
        }
    });

    return City;
};
