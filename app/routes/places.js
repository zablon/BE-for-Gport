var models  = require('../models');
var express = require('express');

module.exports = function(app) {

    app.post('/place/get', function (req, res) {
        models.Place.findAll().then(function (places) {
            res.statusCode = 200;
            res.json({
                title: 'Get data success',
                places: places,
                status: 'success'
            });
        });
    })

    app.post('/place/get/:place_id', function (req, res) {
        var id = req.params.place_id;
        models.Place.findById(id,{
            include: [
                {model: models.Room,
                    include: [
                        {model: models.Price}
                    ]
                },
                {model: models.Comment}
            ]
            })
            .then(function (place) {
            res.statusCode = 200;
            res.json({
                title: 'Get data by id',
                place: place,
                status: 'success'
            });
        });
    })

    app.post('/create', function (req, res) {
        models.Place.create({
            title: req.body.title,
            type: req.body.type,
            folder: req.body.folder,
            distance: req.body.distance,
            phone: req.body.phone,
            address: req.body.address,
            description: req.body.description,
        }).then(function () {
            res.redirect('/');
        });
    });

    app.get('/:place_id/destroy', function (req, res) {
        models.Place.destroy({
            where: {
                id: req.params.place_id
            }
        }).then(function () {
            res.redirect('/');
        });
    });

    app.post('/:place_id/room/create', function (req, res) {
        models.Room.create({
            title: req.body.title,
            folderImg: req.body.folderImg,
            PlaceId: req.params.place_id
        }).then(function () {
            res.redirect('/');
        });
    });

    app.get('/:place_id/room/:task_id/destroy', function (req, res) {
        models.Room.destroy({
            where: {
                id: req.params.task_id
            }
        }).then(function () {
            res.redirect('/');
        });
    });

}
