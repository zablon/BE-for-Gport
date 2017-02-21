"use strict";

module.exports = function(sequelize, DataTypes) {
    var Image = sequelize.define("Image", {
        url: DataTypes.STRING
    }, {
        classMethods: {
            associate: function(models) {
                Image.belongsTo(models.Community, {
                    onDelete: "CASCADE",
                    foreignKey: {
                        allowNull: false
                    }
                }),
                Image.belongsTo(models.Country, {
                    onDelete: "CASCADE",
                    foreignKey: {
                        allowNull: false
                    }
                }),
                Image.belongsTo(models.Region, {
                    onDelete: "CASCADE",
                    foreignKey: {
                        allowNull: false
                    }
                }),
                Image.belongsTo(models.City, {
                    onDelete: "CASCADE",
                    foreignKey: {
                        allowNull: false
                    }
                }),
                Image.belongsTo(models.Area, {
                    onDelete: "CASCADE",
                    foreignKey: {
                        allowNull: false
                    }
                }),
                Image.belongsTo(models.Place, {
                    onDelete: "CASCADE",
                    foreignKey: {
                        allowNull: false
                    }
                }),
                Image.belongsTo(models.Room, {
                    onDelete: "CASCADE",
                    foreignKey: {
                        allowNull: false
                    }
                })
            }
        }
    });

    return Image;
};
