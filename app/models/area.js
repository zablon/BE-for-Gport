"use strict";

module.exports = function(sequelize, DataTypes) {
    var Area = sequelize.define("Area", {
        name: DataTypes.STRING,
    }, {
        classMethods: {
            associate: function(models) {
                Area.belongsTo(models.City, {
                    onDelete: "CASCADE",
                    foreignKey: {
                        allowNull: false
                    }
                }),
                    Area.hasMany(models.Place);
            }
        }
    });

    return Area;
};
