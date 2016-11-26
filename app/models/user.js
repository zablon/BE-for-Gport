"use strict";

module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define("User", {
        token: DataTypes.INTEGER,
        name: DataTypes.STRING,
        photos: DataTypes.STRING,
        email: {
            type: DataTypes.STRING,
            validate: {
                isEmail: true
            }
        },
        type: DataTypes.STRING,
        password: DataTypes.STRING
    }, {
        classMethods: {
            associate: function(models) {
                //User.hasMany(models.Place);
                User.hasMany(models.Comment);
            }
        }
    });

    return User;
};
