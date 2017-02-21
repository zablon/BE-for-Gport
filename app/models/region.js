"use strict";

module.exports = function(sequelize, DataTypes) {
    var Region = sequelize.define("Region", {
        name: DataTypes.STRING,
    }, {
        classMethods: {
            associate: function(models) {
                Region.belongsTo(models.Country, {
                    onDelete: "CASCADE",
                    foreignKey: {
                        allowNull: false
                    }
                }), 
                    Region.hasMany(models.City);
            }
        }
    });

    return Region;
};
