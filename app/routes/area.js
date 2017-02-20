var models  = require('../models');
var express = require('express');

module.exports = function(app) {

    /**
     * @api {get} /area Area list
     * @apiName getArea
     * @apiGroup Area
     *
     *
     * @apiSuccess {JSON} field title,area,status
     * @apiError {JSON} field title,messages,errors,status
     */
    app.get('/area', function (req, res) {
        models.Area.findAll({
                include: [
                    {model: models.Place}
                ]
            })
            .then(function (area) {
                res.statusCode = 200;
                res.json({
                    title: 'Get list of area',
                    area: area,
                    status: 'success'
                });
            })
            .catch(function (error) {
                res.statusCode = 400;
                res.json({
                    title: 'Cant get list of area',
                    citys: error,
                    status: 'error'
                });
            })
    });
    /**
     * @api {post} /area Create new area
     * @apiName createArea
     * @apiGroup Area
     *
     * @apiParam {String} name
     * @apiParam {Integer} CityId - parent
     *
     * @apiSuccess {JSON} field title,area,status
     * @apiSuccess {JSON} field title,messages,errors,status
     */
    app.post('/area', function(req, res) {
        var area = {
            name: req.query.name ? req.query.name : '',
            CityId: req.query.CityId ? req.query.CityId : '',
        }
        models.Area.create(area)
            .then(function (data) {
                res.statusCode = 200;
                res.json({
                    title: 'Create area success',
                    area: data,
                    status: 'success'
                })
            })
            .catch(function (error) {
                res.statusCode = 400;
                res.json({
                    title: 'Cant create area success',
                    area: error,
                    status: 'error'
                })
            });
    });
    /**
     * @api {get} /area/:id Area name
     * @apiName getAreaById
     * @apiGroup Area
     *
     * @apiParam {Number} id Area unique ID.
     *
     * @apiSuccess {JSON} field title,area,status
     * @apiSuccess {JSON} field title,messages,errors,status
     */
    app.get('/area/:id', function(req, res) {
        var id = req.params.id;
        req.assert('id', 'id is required').isInt();
        var errors = req.validationErrors();
        if( !errors){
            models.Area.find(
                {
                    include: [
                        {model: models.Place}
                    ],
                    where: {
                        id: id
                    }
                })
                .then(function (area) {
                    res.statusCode = 200;
                    res.json({
                        title: 'Get data by id ' + id,
                        area: area,
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
     * @api {put} /area/:id Update area
     * @apiName putArea
     * @apiGroup Area
     *
     * @apiParam {Integer} id
     * @apiParam {Integer} CityId - parent
     *
     * @apiSuccess {JSON} field title,area,status
     * @apiSuccess {JSON} field title,messages,errors,status
     */
    app.put('/area/:id', function (req, res){
        var id = req.params.id;
        req.assert('id', 'id is required').isInt();
        var errors = req.validationErrors();
        if( !errors){
            models.Area.find(
                {where: {
                    id: id
                }})
                .then(function (area) {
                    area.updateAttributes(req.query)
                        .then(function (update_city) {
                            res.statusCode = 200;
                            res.json({
                                title: 'area id -' + id + ' update',
                                area: update_city,
                                status: 'success'
                            });
                        }).catch(function (error) {
                        res.statusCode = 404;
                        res.json({
                            title: error,
                            area: '',
                            status: 'error'
                        });
                    })

                });
        }else {
            res.statusCode = 400;
            res.json({
                title: 'cant update area from this id',
                message: 'cant update area from this id',
                errors: errors,
                status: 'error'
            });
        }
    });
    /**
     * @api {delete} /area/:id Delete area
     * @apiName deleteArea
     * @apiGroup Area
     *
     * @apiParam {Number} id Area unique ID.
     *
     * @apiSuccess {JSON} field title,area,status
     * @apiError {JSON} field title,messages,errors,status
     */
    app.delete('/area/:id', function (req, res){
        var id = req.params.id;
        req.assert('id', 'id is required').isInt();
        var errors = req.validationErrors();
        if( !errors){
            models.Area.destroy({id: id})
                .then(function (deletedRecord) {
                    if(deletedRecord === 1){
                        res.statusCode = 200;
                        res.json({
                            title: 'area id -' + id + ' deleted',
                            area: '',
                            status: 'success'
                        });
                    }
                    else
                    {
                        res.statusCode = 404;
                        res.json({
                            title: 'record not found',
                            area: '',
                            status: 'error'
                        });
                    }

                })
                .catch(function (error) {
                    res.statusCode = 404;
                    res.json({
                        title: error,
                        area: '',
                        status: 'error'
                    });
                });
        }else {
            res.statusCode = 400;
            res.json({
                title: 'cant delete area from this id',
                message: 'cant delete area from this id',
                errors: errors,
                status: 'error'
            });
        }
    });
}