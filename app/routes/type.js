var models  = require('../models');
var express = require('express');

module.exports = function(app) {

    /**
     * @api {get} /type Type list
     * @apiName getType
     * @apiGroup Type
     *
     *
     * @apiSuccess {JSON} field title,type,status
     * @apiError {JSON} field title,messages,errors,status
     */
    app.get('/type', function (req, res) {
        models.Type.findAll()
            .then(function (type) {
                res.statusCode = 200;
                res.json({
                    title: 'Get list of type',
                    type: type,
                    status: 'success'
                });
            })
            .catch(function (error) {
                res.statusCode = 400;
                res.json({
                    title: 'Cant get list of type',
                    citys: error,
                    status: 'error'
                });
            })
    });
    /**
     * @api {post} /type Create new type
     * @apiName createType
     * @apiGroup Type
     *
     * @apiParam {String} name
     * @apiParam {Integer} CityId - parent
     *
     * @apiSuccess {JSON} field title,type,status
     * @apiSuccess {JSON} field title,messages,errors,status
     */
    app.post('/type', function(req, res) {
        var type = {
            name: req.query.name ? req.query.name : '',
            CityId: req.query.CityId ? req.query.CityId : '',
        }
        models.Type.create(type)
            .then(function (data) {
                res.statusCode = 200;
                res.json({
                    title: 'Create type success',
                    type: data,
                    status: 'success'
                })
            })
            .catch(function (error) {
                res.statusCode = 400;
                res.json({
                    title: 'Cant create type success',
                    type: error,
                    status: 'error'
                })
            });
    });
    /**
     * @api {get} /type/:id Type name
     * @apiName getTypeById
     * @apiGroup Type
     *
     * @apiParam {Number} id Type unique ID.
     *
     * @apiSuccess {JSON} field title,type,status
     * @apiSuccess {JSON} field title,messages,errors,status
     */
    app.get('/type/:id', function(req, res) {
        var id = req.params.id;
        req.assert('id', 'id is required').isInt();
        var errors = req.validationErrors();
        if( !errors){
            models.Type.find(
                {
                    include: [
                        {model: models.Place}
                    ],
                    where: {
                        id: id
                    }
                })
                .then(function (type) {
                    res.statusCode = 200;
                    res.json({
                        title: 'Get data by id ' + id,
                        type: type,
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
     * @api {put} /type/:id Update type
     * @apiName putType
     * @apiGroup Type
     *
     * @apiParam {Integer} id
     * @apiParam {Integer} CityId - parent
     *
     * @apiSuccess {JSON} field title,type,status
     * @apiSuccess {JSON} field title,messages,errors,status
     */
    app.put('/type/:id', function (req, res){
        var id = req.params.id;
        req.assert('id', 'id is required').isInt();
        var errors = req.validationErrors();
        if( !errors){
            models.Type.find(
                {where: {
                    id: id
                }})
                .then(function (type) {
                    type.updateAttributes(req.query)
                        .then(function (update_city) {
                            res.statusCode = 200;
                            res.json({
                                title: 'type id -' + id + ' update',
                                type: update_city,
                                status: 'success'
                            });
                        }).catch(function (error) {
                        res.statusCode = 404;
                        res.json({
                            title: error,
                            type: '',
                            status: 'error'
                        });
                    })

                });
        }else {
            res.statusCode = 400;
            res.json({
                title: 'cant update type from this id',
                message: 'cant update type from this id',
                errors: errors,
                status: 'error'
            });
        }
    });
    /**
     * @api {delete} /type/:id Delete type
     * @apiName deleteType
     * @apiGroup Type
     *
     * @apiParam {Number} id Type unique ID.
     *
     * @apiSuccess {JSON} field title,type,status
     * @apiError {JSON} field title,messages,errors,status
     */
    app.delete('/type/:id', function (req, res){
        var id = req.params.id;
        req.assert('id', 'id is required').isInt();
        var errors = req.validationErrors();
        if( !errors){
            models.Type.destroy({id: id})
                .then(function (deletedRecord) {
                    if(deletedRecord === 1){
                        res.statusCode = 200;
                        res.json({
                            title: 'type id -' + id + ' deleted',
                            type: '',
                            status: 'success'
                        });
                    }
                    else
                    {
                        res.statusCode = 404;
                        res.json({
                            title: 'record not found',
                            type: '',
                            status: 'error'
                        });
                    }

                })
                .catch(function (error) {
                    res.statusCode = 404;
                    res.json({
                        title: error,
                        type: '',
                        status: 'error'
                    });
                });
        }else {
            res.statusCode = 400;
            res.json({
                title: 'cant delete type from this id',
                message: 'cant delete type from this id',
                errors: errors,
                status: 'error'
            });
        }
    });
}