var models  = require('../models');
var express = require('express');

module.exports = function(app) {

    /**
     * @api {get} /city City list
     * @apiName getCity
     * @apiGroup City
     *
     *
     * @apiSuccess {JSON} field title,city,status
     * @apiError {JSON} field title,messages,errors,status
     */
    app.get('/city', function (req, res) {
        models.City.findAll({
                include: [
                    {model: models.Area},
                    {model: models.Place}
                ]
            })
            .then(function (city) {
                res.statusCode = 200;
                res.json({
                    title: 'Get list of city',
                    city: city,
                    status: 'success'
                });
            })
            .catch(function (error) {
                res.statusCode = 400;
                res.json({
                    title: 'Cant get list of city',
                    citys: error,
                    status: 'error'
                });
            })
    });
    /**
     * @api {post} /city Create new city
     * @apiName createCity
     * @apiGroup City
     *
     * @apiParam {String} name
     * @apiParam {Integer} RegionId - parent
     *
     * @apiSuccess {JSON} field title,city,status
     * @apiSuccess {JSON} field title,messages,errors,status
     */
    app.post('/city', function(req, res) {
        var city = {
            name: req.query.name ? req.query.name : '',
            RegionId: req.query.RegionId ? req.query.RegionId : '',
        }
        models.City.create(city)
            .then(function (data) {
                res.statusCode = 200;
                res.json({
                    title: 'Create city success',
                    city: data,
                    status: 'success'
                })
            })
            .catch(function (error) {
                res.statusCode = 400;
                res.json({
                    title: 'Cant create city success',
                    city: error,
                    status: 'error'
                })
            });
    });
    /**
     * @api {get} /city/:id City name
     * @apiName getCityById
     * @apiGroup City
     *
     * @apiParam {Number} id City unique ID.
     *
     * @apiSuccess {JSON} field title,city,status
     * @apiSuccess {JSON} field title,messages,errors,status
     */
    app.get('/city/:id', function(req, res) {
        var id = req.params.id;
        req.assert('id', 'id is required').isInt();
        var errors = req.validationErrors();
        if( !errors){
            models.City.find(
                {
                    include: [
                        {model: models.Area},
                        {model: models.Place},
                        {model: models.Attraction}
                    ],
                    where: {
                        id: id
                    }
                })
                .then(function (city) {
                    res.statusCode = 200;
                    res.json({
                        title: 'Get data by id ' + id,
                        city: city,
                        status: 'success'
                    });
                });
        }else {
            res.statusCode = 400;
            res.json({
                title: 'cant get data from this id',
                message: 'cant get data from this id',
                errors: errors,
                status: 'error'
            });
        }
    });
    /**
     * @api {put} /city/:id Update city
     * @apiName putCity
     * @apiGroup City
     *
     * @apiParam {Integer} id
     * @apiParam {Integer} RegionId - parent
     *
     * @apiSuccess {JSON} field title,city,status
     * @apiSuccess {JSON} field title,messages,errors,status
     */
    app.put('/city/:id', function (req, res){
        var id = req.params.id;
        req.assert('id', 'id is required').isInt();
        var errors = req.validationErrors();
        if( !errors){
            models.City.find(
                {where: {
                    id: id
                }})
                .then(function (city) {
                    city.updateAttributes(req.query)
                        .then(function (update_city) {
                            res.statusCode = 200;
                            res.json({
                                title: 'city id -' + id + ' update',
                                city: update_city,
                                status: 'success'
                            });
                        }).catch(function (error) {
                        res.statusCode = 404;
                        res.json({
                            title: error,
                            city: '',
                            status: 'error'
                        });
                    })

                });
        }else {
            res.statusCode = 400;
            res.json({
                title: 'cant update city from this id',
                message: 'cant update city from this id',
                errors: errors,
                status: 'error'
            });
        }
    });
    /**
     * @api {delete} /city/:id Delete city
     * @apiName deleteCity
     * @apiGroup City
     *
     * @apiParam {Number} id City unique ID.
     *
     * @apiSuccess {JSON} field title,city,status
     * @apiError {JSON} field title,messages,errors,status
     */
    app.delete('/city/:id', function (req, res){
        var id = req.params.id;
        req.assert('id', 'id is required').isInt();
        var errors = req.validationErrors();
        if( !errors){
            models.City.destroy({id: id})
                .then(function (deletedRecord) {
                    if(deletedRecord === 1){
                        res.statusCode = 200;
                        res.json({
                            title: 'city id -' + id + ' deleted',
                            city: '',
                            status: 'success'
                        });
                    }
                    else
                    {
                        res.statusCode = 404;
                        res.json({
                            title: 'record not found',
                            city: '',
                            status: 'error'
                        });
                    }

                })
                .catch(function (error) {
                    res.statusCode = 404;
                    res.json({
                        title: error,
                        city: '',
                        status: 'error'
                    });
                });
        }else {
            res.statusCode = 400;
            res.json({
                title: 'cant delete city from this id',
                message: 'cant delete city from this id',
                errors: errors,
                status: 'error'
            });
        }
    });
}