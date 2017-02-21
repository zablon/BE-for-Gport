var models  = require('../models');
var express = require('express');

module.exports = function(app) {
   
    /**
     * @api {get} /place/search Search place list
     * @apiName getPlaceSearch
     * @apiGroup Place
     *
     * @apiParam {String} title
     * @apiParam {Float} rating
     * @apiParam {Integer} type
     * @apiParam {String} folder
     * @apiParam {String} distance
     * @apiParam {String} phone
     * @apiParam {String} address
     * @apiParam {String} description
     * @apiParam {Boolean} children
     * @apiParam {Boolean} conditioner
     * @apiParam {Boolean} dush
     * @apiParam {Boolean} eat
     * @apiParam {Boolean} kitchen
     * @apiParam {Boolean} toilet
     * @apiParam {Boolean} tv
     * @apiParam {Boolean} wifi
     * @apiParam {Boolean} refrigeter
     * @apiParam {Boolean} parking
     * @apiParam {Boolean} swiming
     * @apiParam {Boolean} smoke
     * @apiParam {Boolean} animal
     * @apiParam {Boolean} transfer
     * @apiParam {Boolean} spa
     * @apiParam {Boolean} fitness
     * @apiParam {Boolean} garden
     * @apiParam {Boolean} beach
     * @apiParam {Boolean} sauna
     * @apiParam {Boolean} soundproofing
     * @apiParam {Boolean} massage
     * @apiParam {Boolean} limited_opportunities
     * @apiParam {Boolean} free_cancel_booking
     * @apiParam {Boolean} stock
     * @apiParam {Boolean} double_bed
     * @apiParam {Boolean} single_bed
     *
     * @apiSuccess {JSON} field title,place,status
     * @apiError {JSON} field title,messages,errors,status
     */
    app.get('/place/search', function(req, res) {
        var obj = {
                title: req.query.title ? {$like: `%${req.query.title.toLowerCase()}%`} : '',
                rating: req.query.rating ? req.query.rating : '',
                type: req.query.type ? req.query.type : '',
                folder: req.query.folder ? req.query.folder : '',
                distance: req.query.distance ? req.query.distance : '',
                phone: req.query.phone ? {$like: `%${req.query.phone.toLowerCase()}%`}: '',
                address: req.query.address ? {$like: `%${req.query.address.toLowerCase()}%`} : '',
                description: req.query.description ? {$like: `%${req.query.description.toLowerCase()}%`} : '',
                children: req.query.children ? req.query.children : '',
                conditioner: req.query.conditioner ? req.query.conditioner : '',
                dush: req.query.dush ? req.query.dush : '',
                eat: req.query.eat ? req.query.eat : '',
                kitchen: req.query.kitchen ? req.query.kitchen : '',
                toilet: req.query.toilet ? req.query.toilet : '',
                tv: req.query.tv ? req.query.tv : '',
                wifi: req.query.wifi ? req.query.wifi : '',
                refrigeter: req.query.refrigeter ? req.query.refrigeter : '',
                parking: req.query.parking ? req.query.parking : '',
                swiming: req.query.swiming ? req.query.swiming : '',
                smoke: req.query.smoke ? req.query.smoke : '',
                animal: req.query.animal ? req.query.animal : '',
                transfer: req.query.transfer ? req.query.transfer : '',
                spa: req.query.spa ? req.query.spa : '',
                fitness: req.query.fitness ? req.query.fitness : '',
                garden: req.query.garden ? req.query.garden : '',
                beach: req.query.beach ? req.query.beach : '',
                sauna: req.query.sauna ? req.query.sauna : '',
                soundproofing: req.query.soundproofing ? req.query.soundproofing : '',
                massage: req.query.massage ? req.query.massage : '',
                limited_opportunities: req.query.limited_opportunities ? req.query.limited_opportunities : '',
                free_cancel_booking: req.query.free_cancel_booking ? req.query.free_cancel_booking : '',
                stock: req.query.stock ? req.query.stock : '',
                double_bed: req.query.double_bed ? req.query.double_bed : '',
                single_bed: req.query.single_bed ? req.query.single_bed : '',
        }
        var query = {};
        for(var prop in obj){
            if(obj[prop]) query[prop] = obj[prop] == 'true' ? true : obj[prop] == 'false' ? false : obj[prop]
        }
        models.Place.findAll({ where: query}).then(function (places) {
            res.statusCode = 200;
            res.json({
                title: 'Get data success',
                places: places,
                status: 'success'
            });
        });
    });
    /**
     * @api {get} /place Place list
     * @apiName getPlace
     * @apiGroup Place
     *
     * @apiSuccess {JSON} field title,place,status
     * @apiError {JSON} field title,messages,errors,status
     */
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
    /**
     * @api {post} /place Create new place
     * @apiName createPlace
     * @apiGroup Place
     *
     * @apiParam {String} title
     * @apiParam {String} CityId - parent
     * @apiParam {String} AreaId - parent
     * @apiParam {Float} rating
     * @apiParam {Integer} type
     * @apiParam {String} folder
     * @apiParam {String} distance
     * @apiParam {String} phone
     * @apiParam {String} address
     * @apiParam {String} description
     * @apiParam {Boolean} children
     * @apiParam {Boolean} conditioner
     * @apiParam {Boolean} dush
     * @apiParam {Boolean} eat
     * @apiParam {Boolean} kitchen
     * @apiParam {Boolean} toilet
     * @apiParam {Boolean} tv
     * @apiParam {Boolean} wifi
     * @apiParam {Boolean} refrigeter
     * @apiParam {Boolean} parking
     * @apiParam {Boolean} swiming
     * @apiParam {Boolean} smoke
     * @apiParam {Boolean} animal
     * @apiParam {Boolean} transfer
     * @apiParam {Boolean} spa
     * @apiParam {Boolean} fitness
     * @apiParam {Boolean} garden
     * @apiParam {Boolean} beach
     * @apiParam {Boolean} sauna
     * @apiParam {Boolean} soundproofing
     * @apiParam {Boolean} massage
     * @apiParam {Boolean} limited_opportunities
     * @apiParam {Boolean} free_cancel_booking
     * @apiParam {Boolean} stock
     * @apiParam {Boolean} double_bed
     * @apiParam {Boolean} single_bed
     * @apiParam {Float} lat
     * @apiParam {Float} lng
     *
     * @apiSuccess {JSON} field title,place,status
     * @apiSuccess {JSON} field title,messages,errors,status
     */
    app.post('/place', function(req, res) {
        var place = {
            CityId: req.query.CityId ? req.query.CityId : '',
            AreaId: req.query.AreaId ? req.query.AreaId : '',
            title: req.query.title ? req.query.title : '',
            rating: req.query.rating ? req.query.rating : '',
            type: req.query.type ? req.query.type : '',
            folder: req.query.folder ? req.query.folder : '',
            distance: req.query.distance ? req.query.distance : '',
            phone: req.query.phone ? req.query.phone : '',
            address: req.query.address ? req.query.address : '',
            description: req.query.description ? req.query.description : '',
            children: req.query.children ? req.query.children : '',
            conditioner: req.query.conditioner ? req.query.conditioner : '',
            dush: req.query.dush ? req.query.dush : '',
            eat: req.query.eat ? req.query.eat : '',
            kitchen: req.query.kitchen ? req.query.kitchen : '',
            toilet: req.query.toilet ? req.query.toilet : '',
            tv: req.query.tv ? req.query.tv : '',
            wifi: req.query.wifi ? req.query.wifi : '',
            refrigeter: req.query.refrigeter ? req.query.refrigeter : '',
            parking: req.query.parking ? req.query.parking : '',
            swiming: req.query.swiming ? req.query.swiming : '',
            smoke: req.query.smoke ? req.query.smoke : '',
            animal: req.query.animal ? req.query.animal : '',
            transfer: req.query.transfer ? req.query.transfer : '',
            spa: req.query.spa ? req.query.spa : '',
            fitness: req.query.fitness ? req.query.fitness : '',
            garden: req.query.garden ? req.query.garden : '',
            beach: req.query.beach ? req.query.beach : '',
            sauna: req.query.sauna ? req.query.sauna : '',
            soundproofing: req.query.soundproofing ? req.query.soundproofing : '',
            massage: req.query.massage ? req.query.massage : '',
            limited_opportunities: req.query.limited_opportunities ? req.query.limited_opportunities : '',
            free_cancel_booking: req.query.free_cancel_booking ? req.query.free_cancel_booking : '',
            stock: req.query.stock ? req.query.stock : '',
            double_bed: req.query.double_bed ? req.query.double_bed : '',
            single_bed: req.query.single_bed ? req.query.single_bed : '',
            lat: req.query.lat ? req.query.lat : '',
            lng: req.query.lng ? req.query.lng : ''
        }
        models.Place.create(place).then(function () {
            res.statusCode = 200;
            res.json({
                title: 'Get data success',
                places: place,
                status: 'success'
            });
        });
    });
    /**
     * @api {get} /place/:id Place information
     * @apiName getPlaceById
     * @apiGroup Place
     *
     * @apiParam {Number} id Place unique ID.
     *
     * @apiSuccess {JSON} field title,place,status
     * @apiSuccess {JSON} field title,messages,errors,status
     */
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
            res.statusCode = 400;
            res.json({
                title: 'cant get place from this id',
                message: 'cant get place from this id',
                errors: errors,
                status: 'error'
            });
        }
    });
    /**
     * @api {put} /place/:id Update place
     * @apiName putPlace
     * @apiGroup Place
     *
     * @apiParam {String} title
     * @apiParam {Integer} AreaId - parent
     * @apiParam {Integer} CityId - parent
     * @apiParam {Float} rating
     * @apiParam {Integer} type
     * @apiParam {String} folder
     * @apiParam {String} distance
     * @apiParam {String} phone
     * @apiParam {String} address
     * @apiParam {String} description
     * @apiParam {Boolean} children
     * @apiParam {Boolean} conditioner
     * @apiParam {Boolean} dush
     * @apiParam {Boolean} eat
     * @apiParam {Boolean} kitchen
     * @apiParam {Boolean} toilet
     * @apiParam {Boolean} tv
     * @apiParam {Boolean} wifi
     * @apiParam {Boolean} refrigeter
     * @apiParam {Boolean} parking
     * @apiParam {Boolean} swiming
     * @apiParam {Boolean} smoke
     * @apiParam {Boolean} animal
     * @apiParam {Boolean} transfer
     * @apiParam {Boolean} spa
     * @apiParam {Boolean} fitness
     * @apiParam {Boolean} garden
     * @apiParam {Boolean} beach
     * @apiParam {Boolean} sauna
     * @apiParam {Boolean} soundproofing
     * @apiParam {Boolean} massage
     * @apiParam {Boolean} limited_opportunities
     * @apiParam {Boolean} free_cancel_booking
     * @apiParam {Boolean} stock
     * @apiParam {Boolean} double_bed
     * @apiParam {Boolean} single_bed
     * @apiParam {Float} lat
     * @apiParam {Float} lng
     *
     * @apiSuccess {JSON} field title,place,status
     * @apiSuccess {JSON} field title,messages,errors,status
     */
    app.put('/place/:id', function (req, res){
        var id = req.params.id;
        req.assert('id', 'id is required').isInt();
        var errors = req.validationErrors();
        if( !errors){
            models.Place.find(
                {where: {
                    id: id
                }})
                .then(function (place) {
                    place.updateAttributes(req.query)
                    .then(function (update_place) {
                        res.statusCode = 200;
                        res.json({
                            title: 'place id -' + id + ' update',
                            place: update_place,
                            status: 'success'
                        });
                    }).catch(function (error) {
                        res.statusCode = 404;
                        res.json({
                            title: error,
                            place: '',
                            status: 'error'
                        });
                    })


                });
        }else {
            res.statusCode = 400;
            res.json({
                title: 'cant update place from this id',
                message: 'cant update place from this id',
                errors: errors,
                status: 'error'
            });
        }

    });
    /**
     * @api {delete} /place/:id Delete place
     * @apiName deletePlace
     * @apiGroup Place
     *
     * @apiParam {Number} id Place unique ID.
     *
     * @apiSuccess {JSON} field title,place,status
     * @apiError {JSON} field title,messages,errors,status
     */
    app.delete('/place/:id', function (req, res){
        var id = req.params.id;
        req.assert('id', 'id is required').isInt();
        var errors = req.validationErrors();
        if( !errors){
            models.Place.destroy({id: id})
                .then(function (deletedRecord) {
                    if(deletedRecord === 1){
                        res.statusCode = 200;
                        res.json({
                            title: 'place id -' + id + ' deleted',
                            place: '',
                            status: 'success'
                        });
                    }
                    else
                    {
                        res.statusCode = 404;
                        res.json({
                            title: 'record not found',
                            place: '',
                            status: 'error'
                        });
                    }

                })
                .catch(function (error) {
                    res.statusCode = 404;
                    res.json({
                        title: error,
                        place: '',
                        status: 'error'
                    });
                });
        }else {
            res.statusCode = 400;
            res.json({
                title: 'cant delete place from this id',
                message: 'cant delete place from this id',
                errors: errors,
                status: 'error'
            });
        }
    });
    /**
     * @api {get} /place/country/:id Country list
     * @apiName getCountry
     * @apiGroup Place
     *
     * @apiParam {Number} id Place unique ID.
     *
     * @apiSuccess {JSON} field title,place,status
     * @apiError {JSON} field title,messages,errors,status
     */
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
            res.statusCode = 400;
            res.json({
                title: 'cant get place from this id',
                message: 'cant get place from this id',
                errors: errors,
                status: 'error'
            });
        }
    });
    /**
     * @api {get} /place/country/city/:id City list
     * @apiName getCity
     * @apiGroup Place
     *
     * @apiParam {Number} id Place unique ID.
     *
     * @apiSuccess {JSON} field title,place,status
     * @apiError {JSON} field title,messages,errors,status
     */
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
            res.statusCode = 400;
            res.json({
                title: 'cant get place from this id',
                message: 'cant get place from this id',
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
