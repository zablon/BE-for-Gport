var models  = require('../models');
var express = require('express');

module.exports = function(app) {

    /**
     * @api {get} /country Country list
     * @apiName getCountry
     * @apiGroup Country
     *
     *
     * @apiSuccess {JSON} field title,country,status
     * @apiError {JSON} field title,messages,errors,status
     */
    app.get('/country', function (req, res) {
        models.Country.findAll({
                include: [
                    {model: models.City,
                        include: [
                            {model: models.Place},
                        ]
                    },
                ]
            })
            .then(function (country) {
                res.statusCode = 200;
                res.json({
                    title: 'Get list of country',
                    country: country,
                    status: 'success'
                });
            })
            .catch(function (error) {
                res.statusCode = 400;
                res.json({
                    title: 'Cant get list of country',
                    countrys: error,
                    status: 'error'
                });
            })
    });
    /**
     * @api {post} /country Create new country
     * @apiName createCountry
     * @apiGroup Country
     *
     * @apiParam {String} name
     *
     * @apiSuccess {JSON} field title,country,status
     * @apiSuccess {JSON} field title,messages,errors,status
     */
    app.post('/country', function(req, res) {
        var country = {
            name: req.query.name ? req.query.name : '',
        }
        models.Country.create(country)
            .then(function (data) {
                res.statusCode = 200;
                res.json({
                    title: 'Create country success',
                    country: data,
                    status: 'success'
                })
            })
            .catch(function (error) {
                res.statusCode = 400;
                res.json({
                    title: 'Cant create country success',
                    country: error,
                    status: 'error'
                })
            });
    });
    /**
     * @api {get} /country/:id Country name
     * @apiName getCountryById
     * @apiGroup Country
     *
     * @apiParam {Number} id Country unique ID.
     *
     * @apiSuccess {JSON} field title,country,status
     * @apiSuccess {JSON} field title,messages,errors,status
     */
    app.get('/country/:id', function(req, res) {
        var id = req.params.id;
        req.assert('id', 'id is required').isInt();
        var errors = req.validationErrors();
        if( !errors){
            models.Country.find(
                {
                    include: [
                        {model: models.City}
                    ],
                    where: {
                        id: id
                    }
                })
                .then(function (country) {
                    res.statusCode = 200;
                    res.json({
                        title: 'Get data by id' + id,
                        country: country,
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
     * @api {put} /country/:id Update country
     * @apiName putCountry
     * @apiGroup Country
     *
     * @apiParam {Integer} id
     * @apiParam {String} name
     *
     * @apiSuccess {JSON} field title,country,status
     * @apiSuccess {JSON} field title,messages,errors,status
     */
    app.put('/country/:id', function (req, res){
        var id = req.params.id;
        req.assert('id', 'id is required').isInt();
        var errors = req.validationErrors();
        if( !errors){
            models.Country.find(
                {where: {
                    id: id
                }})
                .then(function (country) {
                    country.updateAttributes(req.query)
                        .then(function (update_country) {
                            res.statusCode = 200;
                            res.json({
                                title: 'country id -' + id + ' update',
                                country: update_country,
                                status: 'success'
                            });
                        }).catch(function (error) {
                            res.statusCode = 404;
                            res.json({
                                title: error,
                                country: '',
                                status: 'error'
                            });
                        })

                });
        }else {
            res.statusCode = 400;
            res.json({
                title: 'cant update country from this id',
                message: 'cant update country from this id',
                errors: errors,
                status: 'error'
            });
        }
    });
    /**
     * @api {delete} /country/:id Delete country
     * @apiName deleteCountry
     * @apiGroup Country
     *
     * @apiParam {Number} id Country unique ID.
     *
     * @apiSuccess {JSON} field title,country,status
     * @apiError {JSON} field title,messages,errors,status
     */
    app.delete('/country/:id', function (req, res){
        var id = req.params.id;
        req.assert('id', 'id is required').isInt();
        var errors = req.validationErrors();
        if( !errors){
            models.Country.destroy({id: id})
                .then(function (deletedRecord) {
                    if(deletedRecord === 1){
                        res.statusCode = 200;
                        res.json({
                            title: 'country id -' + id + ' deleted',
                            country: '',
                            status: 'success'
                        });
                    }
                    else
                    {
                        res.statusCode = 404;
                        res.json({
                            title: 'record not found',
                            country: '',
                            status: 'error'
                        });
                    }

                })
                .catch(function (error) {
                    res.statusCode = 404;
                    res.json({
                        title: error,
                        country: '',
                        status: 'error'
                    });
                });
        }else {
            res.statusCode = 400;
            res.json({
                title: 'cant delete country from this id',
                message: 'cant delete country from this id',
                errors: errors,
                status: 'error'
            });
        }
    });
}