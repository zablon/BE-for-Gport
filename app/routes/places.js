var models  = require('../models');
var express = require('express');

module.exports = function(app) {

    app.get('/place/country/:id', function(req, res) {
        var id = req.params.id;
        req.assert('id', 'id is required').isInt();
        var errors = req.validationErrors();
        if( !errors){
            models.Country.find(
                {where: {
                    id: id
                }},{
                    include: [
                        {model: models.Place,
                            include: [
                                {model: models.Room},
                                {model: models.Image},
                                {model: models.Image},
                            ]
                        },
                        {model: models.Comment},
                        {model: models.Image}
                    ]
                })
                .then(function (place) {
                    res.statusCode = 200;
                    res.json({
                        title: 'Get data by id' + id,
                        place: place,
                        status: 'success'
                    });
                });
        }else {
            res.statusCode = 200;
            res.json({
                title: 'cant get place from this id',
                message: 'cant get place from this id',
                errors: errors,
                status: 'error'
            });
        }
    });

    app.get('/place/country/city/:id', function(req, res) {
        var id = req.params.id;
        req.assert('id', 'id is required').isInt();
        var errors = req.validationErrors();
        if( !errors){
            models.City.find(
                {where: {
                    id: id
                }},{
                    include: [
                        {model: models.Place,
                            include: [
                                {model: models.Room},
                                {model: models.Image},
                                {model: models.Image},
                            ]
                        },
                        {model: models.Comment},
                        {model: models.Image}
                    ]
                })
                .then(function (place) {
                    res.statusCode = 200;
                    res.json({
                        title: 'Get data by id' + id,
                        place: place,
                        status: 'success'
                    });
                });
        }else {
            res.statusCode = 200;
            res.json({
                title: 'cant get place from this id',
                message: 'cant get place from this id',
                errors: errors,
                status: 'error'
            });
        }
    });

    app.get('/place', function(req, res) {
        models.Place.findAll().then(function (places) {
            res.statusCode = 200;
            res.json({
                title: 'Get data success',
                places: places,
                status: 'success'
            });
        });
    });

    app.post('/place', function(req, res) {
        models.Place.create({
            title: req.params.title ? req.params.title : place.title,
            rating: req.params.rating ? req.params.rating : place.rating,
            type: req.params.type ? req.params.type : place.type,
            folder: req.params.folder ? req.params.folder : place.folder,
            distance: req.params.distance ? req.params.distance : place.distance,
            phone: req.params.phone ? req.params.phone : place.phone,
            address: req.params.address ? req.params.address : place.address,
            description: req.params.description ? req.params.description : place.description,
            children: req.params.children ? req.params.children : place.children,
            conditioner: req.params.conditioner ? req.params.conditioner : place.conditioner,
            dush: req.params.dush ? req.params.dush : place.dush,
            eat: req.params.eat ? req.params.eat : place.eat,
            kitchen: req.params.kitchen ? req.params.kitchen : place.kitchen,
            toilet: req.params.toilet ? req.params.toilet : place.toilet,
            tv: req.params.tv ? req.params.tv : place.tv,
            wifi: req.params.wifi ? req.params.wifi : place.wifi,
            refrigeter: req.params.refrigeter ? req.params.refrigeter : place.refrigeter,
            parking: req.params.parking ? req.params.parking : place.parking,
            swiming: req.params.swiming ? req.params.swiming : place.swiming,
            smoke: req.params.smoke ? req.params.smoke : place.smoke,
            animal: req.params.animal ? req.params.animal : place.animal,
            transfer: req.params.transfer ? req.params.transfer : place.transfer,
            spa: req.params.spa ? req.params.spa : place.spa,
            fitness: req.params.fitness ? req.params.fitness : place.fitness,
            garden: req.params.garden ? req.params.garden : place.garden,
            beach: req.params.beach ? req.params.beach : place.beach,
            sauna: req.params.sauna ? req.params.sauna : place.sauna,
            soundproofing: req.params.soundproofing ? req.params.soundproofing : place.soundproofing,
            massage: req.params.massage ? req.params.massage : place.massage,
            limited_opportunities: req.params.limited_opportunities ? req.params.limited_opportunities : place.limited_opportunities,
            free_cancel_booking: req.params.free_cancel_booking ? req.params.free_cancel_booking : place.free_cancel_booking,
            stock: req.params.stock ? req.params.stock : place.stock,
            double_bed: req.params.double_bed ? req.params.double_bed : place.double_bed,
            single_bed: req.params.single_bed ? req.params.single_bed : place.single_bed,
            lat: req.params.lat ? req.params.lat : place.lat,
            lng: req.params.lng ? req.params.lng : place.lng
        }).then(function () {
            res.statusCode = 200;
            res.json({
                title: 'Get data success',
                places: places,
                status: 'success'
            });
        });
    });

    app.get('/place/:id', function(req, res) {
        var id = req.params.id;
        req.assert('id', 'id is required').isInt();
        var errors = req.validationErrors();
        if( !errors){
            models.Place.find(
                {where: {
                    id: id
                }},{
                    include: [
                        {model: models.Room,
                            include: [
                                {model: models.Price},
                                {model: models.Image},
                            ]
                        },
                        {model: models.Comment},
                        {model: models.Image}
                    ]
                })
                .then(function (place) {
                    res.statusCode = 200;
                    res.json({
                        title: 'Get data by id' + id,
                        place: place,
                        status: 'success'
                    });
                });
        }else {
            res.statusCode = 200;
            res.json({
                title: 'cant get place from this id',
                message: 'cant get place from this id',
                errors: errors,
                status: 'error'
            });
        }
    });

    app.put('/place/:id', function (req, res){
        var id = req.params.id;
        req.assert('id', 'id is required').isInt();
        var errors = req.validationErrors();
        if( !errors){
            models.Place.find(
                {where: {
                    id: id
                }},{
                    include: [
                        {model: models.Room,
                            include: [
                                {model: models.Price},
                                {model: models.Image},
                            ]
                        },
                        {model: models.Comment},
                        {model: models.Image}
                    ]
                })
                .then(function (place) {
                    place.update({
                        title: req.params.title ? req.params.title : place.title,
                        rating: req.params.rating ? req.params.rating : place.rating,
                        type: req.params.type ? req.params.type : place.type,
                        folder: req.params.folder ? req.params.folder : place.folder,
                        distance: req.params.distance ? req.params.distance : place.distance,
                        phone: req.params.phone ? req.params.phone : place.phone,
                        address: req.params.address ? req.params.address : place.address,
                        description: req.params.description ? req.params.description : place.description,
                        children: req.params.children ? req.params.children : place.children,
                        conditioner: req.params.conditioner ? req.params.conditioner : place.conditioner,
                        dush: req.params.dush ? req.params.dush : place.dush,
                        eat: req.params.eat ? req.params.eat : place.eat,
                        kitchen: req.params.kitchen ? req.params.kitchen : place.kitchen,
                        toilet: req.params.toilet ? req.params.toilet : place.toilet,
                        tv: req.params.tv ? req.params.tv : place.tv,
                        wifi: req.params.wifi ? req.params.wifi : place.wifi,
                        refrigeter: req.params.refrigeter ? req.params.refrigeter : place.refrigeter,
                        parking: req.params.parking ? req.params.parking : place.parking,
                        swiming: req.params.swiming ? req.params.swiming : place.swiming,
                        smoke: req.params.smoke ? req.params.smoke : place.smoke,
                        animal: req.params.animal ? req.params.animal : place.animal,
                        transfer: req.params.transfer ? req.params.transfer : place.transfer,
                        spa: req.params.spa ? req.params.spa : place.spa,
                        fitness: req.params.fitness ? req.params.fitness : place.fitness,
                        garden: req.params.garden ? req.params.garden : place.garden,
                        beach: req.params.beach ? req.params.beach : place.beach,
                        sauna: req.params.sauna ? req.params.sauna : place.sauna,
                        soundproofing: req.params.soundproofing ? req.params.soundproofing : place.soundproofing,
                        massage: req.params.massage ? req.params.massage : place.massage,
                        limited_opportunities: req.params.limited_opportunities ? req.params.limited_opportunities : place.limited_opportunities,
                        free_cancel_booking: req.params.free_cancel_booking ? req.params.free_cancel_booking : place.free_cancel_booking,
                        stock: req.params.stock ? req.params.stock : place.stock,
                        double_bed: req.params.double_bed ? req.params.double_bed : place.double_bed,
                        single_bed: req.params.single_bed ? req.params.single_bed : place.single_bed,
                        lat: req.params.lat ? req.params.lat : place.lat,
                        lng: req.params.lng ? req.params.lng : place.lng
                    }).then(function () {
                        res.statusCode = 200;
                        res.json({
                            title: 'place id -' + req.params.place_id + ' update',
                            place: place,
                            status: 'success'
                        });
                    })

                });
        }else {
            res.statusCode = 200;
            res.json({
                title: 'cant get place from this id',
                message: 'cant get place from this id',
                errors: errors,
                status: 'error'
            });
        }

    });

    app.delete('/place/:id', function (req, res){
        var id = req.params.id;
        req.assert('id', 'id is required').isInt();
        var errors = req.validationErrors();
        if( !errors){
            models.Room.destroy({
                where: {
                    id: req.params.task_id
                }
            }).then(function () {
                res.statusCode = 200;
                res.json({
                    title: 'place id -' + req.params.place_id + ' deleted',
                    place: place,
                    status: 'success'
                });
            });
        }else {
            res.statusCode = 200;
            res.json({
                title: 'cant delete place from this id',
                message: 'cant delete place from this id',
                errors: errors,
                status: 'error'
            });
        }
    });
    
    /*
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
                        {model: models.Price},
                        {model: models.Image},
                    ]
                },
                {model: models.Comment},
                {model: models.Image}
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
*/
}
