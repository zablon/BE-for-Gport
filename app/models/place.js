"use strict";

module.exports = function(sequelize, DataTypes) {
    var Place = sequelize.define("Place", {
        title: DataTypes.STRING,
        rating: DataTypes.INTEGER,
        type: DataTypes.STRING,
        folder: DataTypes.STRING,
        distance: DataTypes.STRING,
        phone: DataTypes.STRING,
        address: DataTypes.STRING,
        description: DataTypes.STRING,
        children: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        conditioner: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        dush: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        eat: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        kitchen: {
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
        parking: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        swiming: {
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
        transfer: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        spa: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        fitness: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        garden: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        beach: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        sauna: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        soundproofing: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        massage: {
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
        },
        lat: {
            type: DataTypes.FLOAT,
            defaultValue: false
        },
        lng: {
            type: DataTypes.FLOAT,
            defaultValue: false
        },
    }, {
        classMethods: {
            associate: function(models) {
                Place.belongsTo(models.Area, {
                    onDelete: "CASCADE",
                    foreignKey: {
                        allowNull: false
                    }
                }),
                Place.belongsTo(models.City, {
                    onDelete: "CASCADE",
                    foreignKey: {
                        allowNull: false
                    }
                }),
                Place.hasMany(models.Room);
                Place.hasMany(models.Image);
                Place.hasMany(models.Comment);
            }
        }
    });

    return Place;
};
