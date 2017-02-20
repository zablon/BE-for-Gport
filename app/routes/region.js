var models  = require('../models');
var express = require('express');

module.exports = function(app) {

    /**
     * @api {get} /region Region list
     * @apiName getRegion
     * @apiGroup Region
     *
     *
     * @apiSuccess {JSON} field title,region,status
     * @apiError {JSON} field title,messages,errors,status
     */
    app.get('/region', function (req, res) {
        models.Region.findAll({
                include: [
                    {model: models.City,
                        include: [
                            {model: models.Area},
                        ]
                    },
                ]
            })
            .then(function (region) {
                res.statusCode = 200;
                res.json({
                    title: 'Get list of region',
                    region: region,
                    status: 'success'
                });
            })
            .catch(function (error) {
                res.statusCode = 400;
                res.json({
                    title: 'Cant get list of region',
                    citys: error,
                    status: 'error'
                });
            })
    });
    /**
     * @api {post} /region Create new region
     * @apiName createRegion
     * @apiGroup Region
     *
     * @apiParam {String} name
     * @apiParam {Integer} CountryId - parent
     *
     * @apiSuccess {JSON} field title,region,status
     * @apiSuccess {JSON} field title,messages,errors,status
     */
    app.post('/region', function(req, res) {
        var region = {
            name: req.query.name ? req.query.name : '',
            CountryId: req.query.CountryId ? req.query.CountryId : '',
        }
        models.Region.create(region)
            .then(function (data) {
                res.statusCode = 200;
                res.json({
                    title: 'Create region success',
                    region: data,
                    status: 'success'
                })
            })
            .catch(function (error) {
                res.statusCode = 400;
                res.json({
                    title: 'Cant create region success',
                    region: error,
                    status: 'error'
                })
            });
    });
    /**
     * @api {get} /region/:id Region name
     * @apiName getRegionById
     * @apiGroup Region
     *
     * @apiParam {Number} id Region unique ID.
     *
     * @apiSuccess {JSON} field title,region,status
     * @apiSuccess {JSON} field title,messages,errors,status
     */
    app.get('/region/:id', function(req, res) {
        var id = req.params.id;
        req.assert('id', 'id is required').isInt();
        var errors = req.validationErrors();
        if( !errors){
            models.Region.find(
                {
                    include: [
                        {model: models.City,
                            include: [
                                {model: models.Area},
                            ]
                        },
                    ],
                    where: {
                        id: id
                    }
                })
                .then(function (region) {
                    res.statusCode = 200;
                    res.json({
                        title: 'Get data by id ' + id,
                        region: region,
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
     * @api {put} /region/:id Update region
     * @apiName putRegion
     * @apiGroup Region
     *
     * @apiParam {Integer} id
     * @apiParam {Integer} CountryId - parent
     *
     * @apiSuccess {JSON} field title,region,status
     * @apiSuccess {JSON} field title,messages,errors,status
     */
    app.put('/region/:id', function (req, res){
        var id = req.params.id;
        req.assert('id', 'id is required').isInt();
        var errors = req.validationErrors();
        if( !errors){
            models.Region.find(
                {where: {
                    id: id
                }})
                .then(function (region) {
                    region.updateAttributes(req.query)
                        .then(function (update_city) {
                            res.statusCode = 200;
                            res.json({
                                title: 'region id -' + id + ' update',
                                region: update_city,
                                status: 'success'
                            });
                        }).catch(function (error) {
                        res.statusCode = 404;
                        res.json({
                            title: error,
                            region: '',
                            status: 'error'
                        });
                    })

                });
        }else {
            res.statusCode = 400;
            res.json({
                title: 'cant update region from this id',
                message: 'cant update region from this id',
                errors: errors,
                status: 'error'
            });
        }
    });
    /**
     * @api {delete} /region/:id Delete region
     * @apiName deleteRegion
     * @apiGroup Region
     *
     * @apiParam {Number} id Region unique ID.
     *
     * @apiSuccess {JSON} field title,region,status
     * @apiError {JSON} field title,messages,errors,status
     */
    app.delete('/region/:id', function (req, res){
        var id = req.params.id;
        req.assert('id', 'id is required').isInt();
        var errors = req.validationErrors();
        if( !errors){
            models.Region.destroy({id: id})
                .then(function (deletedRecord) {
                    if(deletedRecord === 1){
                        res.statusCode = 200;
                        res.json({
                            title: 'region id -' + id + ' deleted',
                            region: '',
                            status: 'success'
                        });
                    }
                    else
                    {
                        res.statusCode = 404;
                        res.json({
                            title: 'record not found',
                            region: '',
                            status: 'error'
                        });
                    }

                })
                .catch(function (error) {
                    res.statusCode = 404;
                    res.json({
                        title: error,
                        region: '',
                        status: 'error'
                    });
                });
        }else {
            res.statusCode = 400;
            res.json({
                title: 'cant delete region from this id',
                message: 'cant delete region from this id',
                errors: errors,
                status: 'error'
            });
        }
    });
}