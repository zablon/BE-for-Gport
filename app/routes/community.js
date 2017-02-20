var models  = require('../models');
var express = require('express');

module.exports = function(app) {

    /**
     * @api {get} /community Community list
     * @apiName getCommunity
     * @apiGroup Community
     *
     *
     * @apiSuccess {JSON} field title,community,status
     * @apiError {JSON} field title,messages,errors,status
     */
    app.get('/community', function (req, res) {
        models.Community.findAll({
                include: [
                    {model: models.Place}
                ]
            })
            .then(function (community) {
                res.statusCode = 200;
                res.json({
                    title: 'Get list of community',
                    community: community,
                    status: 'success'
                });
            })
            .catch(function (error) {
                res.statusCode = 400;
                res.json({
                    title: 'Cant get list of community',
                    citys: error,
                    status: 'error'
                });
            })
    });
    /**
     * @api {post} /community Create new community
     * @apiName createCommunity
     * @apiGroup Community
     *
     * @apiParam {String} name
     * @apiParam {Integer} RegionId
     *
     * @apiSuccess {JSON} field title,community,status
     * @apiSuccess {JSON} field title,messages,errors,status
     */
    app.post('/community', function(req, res) {
        var community = {
            name: req.query.name ? req.query.name : '',
            RegionId: req.query.RegionId ? req.query.RegionId : '',
        }
        models.Community.create(community)
            .then(function (data) {
                res.statusCode = 200;
                res.json({
                    title: 'Create community success',
                    community: data,
                    status: 'success'
                })
            })
            .catch(function (error) {
                res.statusCode = 400;
                res.json({
                    title: 'Cant create community success',
                    community: error,
                    status: 'error'
                })
            });
    });
    /**
     * @api {get} /community/:id Community name
     * @apiName getCommunityById
     * @apiGroup Community
     *
     * @apiParam {Number} id Community unique ID.
     *
     * @apiSuccess {JSON} field title,community,status
     * @apiSuccess {JSON} field title,messages,errors,status
     */
    app.get('/community/:id', function(req, res) {
        var id = req.params.id;
        req.assert('id', 'id is required').isInt();
        var errors = req.validationErrors();
        if( !errors){
            models.Community.find(
                {
                    include: [
                        {model: models.Place}
                    ],
                    where: {
                        id: id
                    }
                })
                .then(function (community) {
                    res.statusCode = 200;
                    res.json({
                        title: 'Get data by id ' + id,
                        community: community,
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
     * @api {put} /community/:id Update community
     * @apiName putCommunity
     * @apiGroup Community
     *
     * @apiParam {Integer} id
     * @apiParam {Integer} RegionId
     *
     * @apiSuccess {JSON} field title,community,status
     * @apiSuccess {JSON} field title,messages,errors,status
     */
    app.put('/community/:id', function (req, res){
        var id = req.params.id;
        req.assert('id', 'id is required').isInt();
        var errors = req.validationErrors();
        if( !errors){
            models.Community.find(
                {where: {
                    id: id
                }})
                .then(function (community) {
                    community.updateAttributes(req.query)
                        .then(function (update_city) {
                            res.statusCode = 200;
                            res.json({
                                title: 'community id -' + id + ' update',
                                community: update_city,
                                status: 'success'
                            });
                        }).catch(function (error) {
                        res.statusCode = 404;
                        res.json({
                            title: error,
                            community: '',
                            status: 'error'
                        });
                    })

                });
        }else {
            res.statusCode = 400;
            res.json({
                title: 'cant update community from this id',
                message: 'cant update community from this id',
                errors: errors,
                status: 'error'
            });
        }
    });
    /**
     * @api {delete} /community/:id Delete community
     * @apiName deleteCommunity
     * @apiGroup Community
     *
     * @apiParam {Number} id Community unique ID.
     *
     * @apiSuccess {JSON} field title,community,status
     * @apiError {JSON} field title,messages,errors,status
     */
    app.delete('/community/:id', function (req, res){
        var id = req.params.id;
        req.assert('id', 'id is required').isInt();
        var errors = req.validationErrors();
        if( !errors){
            models.Community.destroy({id: id})
                .then(function (deletedRecord) {
                    if(deletedRecord === 1){
                        res.statusCode = 200;
                        res.json({
                            title: 'community id -' + id + ' deleted',
                            community: '',
                            status: 'success'
                        });
                    }
                    else
                    {
                        res.statusCode = 404;
                        res.json({
                            title: 'record not found',
                            community: '',
                            status: 'error'
                        });
                    }

                })
                .catch(function (error) {
                    res.statusCode = 404;
                    res.json({
                        title: error,
                        community: '',
                        status: 'error'
                    });
                });
        }else {
            res.statusCode = 400;
            res.json({
                title: 'cant delete community from this id',
                message: 'cant delete community from this id',
                errors: errors,
                status: 'error'
            });
        }
    });
}