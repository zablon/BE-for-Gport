"use strict";

module.exports = function(sequelize, DataTypes) {
    var Comment = sequelize.define("Comment", {
        name: DataTypes.STRING,
        email: {
            type: DataTypes.STRING,
            validate: {
                isEmail: true
            }
        },
        data: DataTypes.STRING,
        type: DataTypes.STRING,
    }, {
        classMethods: {
            associate: function(models) {
                Comment.belongsTo(models.Place, {
                    onDelete: "CASCADE",
                    foreignKey: {
                        allowNull: false
                    }
                })
            }
        }
    });

    return Comment;
};
