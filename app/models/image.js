"use strict";

module.exports = function(sequelize, DataTypes) {
    var Image = sequelize.define("Image", {
        name: DataTypes.STRING
    }, {
        classMethods: {
            associate: function(models) {
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
