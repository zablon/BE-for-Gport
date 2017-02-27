"use strict";

module.exports = function(sequelize, DataTypes) {
    var Type = sequelize.define("Type", {
        name: DataTypes.STRING,
    }, {
        classMethods: {
            associate: function(models) {
                Type.hasMany(models.Place);
            }
        }
    });

    return Type;
};
