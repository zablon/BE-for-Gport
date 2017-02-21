"use strict";

module.exports = function(sequelize, DataTypes) {
    var Price = sequelize.define("Price", {
        mounth: DataTypes.STRING,
        price: DataTypes.INTEGER,
        stock: DataTypes.BOOLEAN,
    }, {
        classMethods: {
            associate: function(models) {
                Price.belongsTo(models.Room, {
                    onDelete: "CASCADE",
                    foreignKey: {
                        allowNull: false
                    }
                })
            }
        }
    });

    return Price;
};
