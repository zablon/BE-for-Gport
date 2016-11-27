var models  = require('../models');
var express = require('express');
var router  = express.Router();

module.exports = function(app) {

  app.post('/place/get', function(req, res) {
    router.get('/', function (req, res) {
      models.Place.findAll({
        include: [
          {
            model: models.Room, 
            include: [
              {model: models.Price}
            ]
          }]
      }).then(function (places) {
        res.statusCode = 200;
        res.json({
          title: 'Sequelize: Express Example',
          places: places,
          status: 'success'
        });
      });
    });
  })
}