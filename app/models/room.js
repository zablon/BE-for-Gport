"use strict";
module.exports = function(sequelize, DataTypes) {
    var Room = sequelize.define("Room", {
        title: DataTypes.STRING,
        description: DataTypes.STRING,
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
        kitchen: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        smoke: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        animal: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        soundproofing: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        limited_opportunities: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        free_cancel_booking: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        stock: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        double_bed: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        single_bed: {
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
