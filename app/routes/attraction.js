var models  = require('../models');
var express = require('express');

module.exports = function(app) {
    /**
     * @api {get} /attraction Attraction list
     * @apiName getAttraction
     * @apiGroup Attraction
     *
     * @apiParam {Integer} offset = 0
     * @apiParam {Integer} limit = 20
     *
     * @apiSuccess {JSON} field title,attraction,status
     * @apiError {JSON} field title,messages,errors,status
     */
    app.get('/attraction', function (req, res) {
        var offset = req.params.offset || 0,
            limit = req.params.limit || 20;

        models.Attraction.findAll({ offset: offset, limit: limit }).then(function (attractions) {
            res.statusCode = 200;
            res.json({
                title: 'Get data success',
                attractions: attractions,
                status: 'success'
            });
        });
    });
    /**
     * @api {post} /attraction Create new attraction
     * @apiName createAttraction
     * @apiGroup Attraction
     *
     * @apiParam {String} CityId - parent
     * @apiParam {String} AreaId - parent
     * @apiParam {String} title
     * @apiParam {String} rating
     * @apiParam {String} address
     * @apiParam {String} description
     * @apiParam {Double} lng
     * @apiParam {Double} lat
     *
     * @apiSuccess {JSON} field title,attraction,status
     * @apiSuccess {JSON} field title,messages,errors,status
     */
    app.post('/attraction', function (req, res) {
        var attraction = {
            CityId: req.query.CityId ? req.query.CityId : '',
            AreaId: req.query.AreaId ? req.query.AreaId : '',
            title: req.query.title ? req.query.title : '',
            rating: req.query.rating ? req.query.rating : '',
            address: req.query.address ? req.query.address : '',
            description: req.query.description ? req.query.description : '',
            lng: req.query.lng ? req.query.lng : '',
            lat: req.query.lat ? req.query.lat : '',
        }
        models.Attraction.create(attraction).then(function () {
            res.statusCode = 200;
            res.json({
                title: 'Get data success',
                attraction: attraction,
                status: 'success'
            });
        });
    });
    /**
     * @api {get} /attraction/:id Attraction information
     * @apiName getAttractionById
     * @apiGroup Attraction
     *
     * @apiParam {Number} id Attraction unique ID.
     *
     * @apiSuccess {JSON} field title,attraction,status
     * @apiSuccess {JSON} field title,messages,errors,status
     */
    app.get('/attraction/:id', function (req, res) {
        var id = req.params.id;
        req.assert('id', 'id is required').isInt();
        var errors = req.validationErrors();
        if (!errors) {
            models.Attraction.find(
                {
                    where: {
                        id: id
                    }
                })
                .then(function (attraction) {
                    res.statusCode = 200;
                    res.json({
                        title: 'Get data by id' + id,
                        attraction: attraction,
                        status: 'success'
                    });
                });
        } else {
            res.statusCode = 400;
            res.json({
                title: 'cant get attraction from this id',
                message: 'cant get attraction from this id',
                errors: errors,
                status: 'error'
            });
        }
    });
    /**
     * @api {put} /attraction/:id Update attraction
     * @apiName putAttraction
     * @apiGroup Attraction
     *
     * @apiParam {String} CityId - parent
     * @apiParam {String} AreaId - parent
     * @apiParam {String} title
     * @apiParam {String} rating
     * @apiParam {String} address
     * @apiParam {String} description
     * @apiParam {Float} lng
     * @apiParam {Float} lat
     *
     * @apiSuccess {JSON} field title,attraction,status
     * @apiSuccess {JSON} field title,messages,errors,status
     */
    app.put('/attraction/:id', function (req, res) {
        var id = req.params.id;
        req.assert('id', 'id is required').isInt();
        var errors = req.validationErrors();
        if (!errors) {
            models.Attraction.find(
                {
                    where: {
                        id: id
                    }
                })
                .then(function (attraction) {
                    attraction.updateAttributes(req.query)
                        .then(function (update_attraction) {
                            res.statusCode = 200;
                            res.json({
                                title: 'attraction id -' + id + ' update',
                                attraction: update_attraction,
                                status: 'success'
                            });
                        }).catch(function (error) {
                        res.statusCode = 404;
                        res.json({
                            title: error,
                            attraction: '',
                            status: 'error'
                        });
                    })


                });
        } else {
            res.statusCode = 400;
            res.json({
                title: 'cant update attraction from this id',
                message: 'cant update attraction from this id',
                errors: errors,
                status: 'error'
            });
        }

    });
    /**
     * @api {delete} /attraction/:id Delete attraction
     * @apiName deleteAttraction
     * @apiGroup Attraction
     *
     * @apiParam {Number} id Attraction unique ID.
     *
     * @apiSuccess {JSON} field title,attraction,status
     * @apiError {JSON} field title,messages,errors,status
     */
    app.delete('/attraction/:id', function (req, res) {
        var id = req.params.id;
        req.assert('id', 'id is required').isInt();
        var errors = req.validationErrors();
        if (!errors) {
            models.Attraction.destroy({id: id})
                .then(function (deletedRecord) {
                    if (deletedRecord === 1) {
                        res.statusCode = 200;
                        res.json({
                            title: 'attraction id -' + id + ' deleted',
                            attraction: '',
                            status: 'success'
                        });
                    }
                    else {
                        res.statusCode = 404;
                        res.json({
                            title: 'record not found',
                            attraction: '',
                            status: 'error'
                        });
                    }

                })
                .catch(function (error) {
                    res.statusCode = 404;
                    res.json({
                        title: error,
                        attraction: '',
                        status: 'error'
                    });
                });
        } else {
            res.statusCode = 400;
            res.json({
                title: 'cant delete attraction from this id',
                message: 'cant delete attraction from this id',
                errors: errors,
                status: 'error'
            });
        }
    });
}