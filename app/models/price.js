"use strict";

module.exports = function(sequelize, DataTypes) {
    var Price = sequelize.define("Price", {
        mounth: DataTypes.STRING,
        price: DataTypes.STRING,
    });

    return Price;
};
