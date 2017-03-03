"use strict";

var fs        = require("fs");
var path      = require("path");
var Sequelize = require("sequelize");
// var env       = process.env.NODE_ENV || "development";
var env       = "development";
var config    = require(path.join(__dirname, '..', 'config', 'config.json'))[env];

if (process.env.DATABASE_URL) {
  var sequelize = new Sequelize(process.env.DATABASE_URL);
} else {
  var sequelize = new Sequelize(config.database, config.username, config.password, config);
}
var db        = {};

fs
  .readdirSync(__dirname)
  .filter(function(file) {
    return (file.indexOf(".") !== 0) && (file !== "index.js");
  })
  .forEach(function(file) {
    var model = sequelize.import(path.join(__dirname, file));
    db[model.name] = model;
  });


Object.keys(db).forEach(function(modelName) {
  if ("associate" in db[modelName]) {
    db[modelName].associate(db);
  }
});

// need if we will have pb with foreign key
sequelize.query('PRAGMA foreign_keys = OFF;')
sequelize.query('PRAGMA foreign_keys = ON')

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
