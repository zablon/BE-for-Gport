"use strict";
module.exports = function(sequelize, DataTypes) {
    var Room = sequelize.define("Room", {
        title: DataTypes.STRING,
        folderImg: DataTypes.STRING,
        conditioner: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        dush: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        toilet: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        tv: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        wifi: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        refrigeter: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        swiming: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        }
    }, {
        classMethods: {
            associate: function(models) {
                Room.belongsTo(models.Place, {
                    onDelete: "CASCADE",
                    foreignKey: {
                        allowNull: false
                    }
                }),
                Room.hasMany(models.Price),
                Room.hasMany(models.Image)
            }
        }
    });

    return Room;
};
