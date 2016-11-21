"use strict";

module.exports = function(sequelize, DataTypes) {
    var Image = sequelize.define("Image", {
        name: DataTypes.STRING
    });

    return Image;
};
