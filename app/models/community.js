"use strict";

module.exports = function(sequelize, DataTypes) {
    var Community = sequelize.define("Community", {
        name: DataTypes.STRING,
        title: DataTypes.STRING,
        description: DataTypes.STRING,
        suscribers: DataTypes.INTEGER,
        wall: DataTypes.STRING,
        msg: DataTypes.STRING,
    }, {
        classMethods: {
            associate: function(models) {
                Community.belongsTo(models.City, {
                    onDelete: "CASCADE",
                    foreignKey: {
                        allowNull: false
                    }
                }),
                Community.hasMany(models.Place);
            }
        }
    });

    return Community;
};
