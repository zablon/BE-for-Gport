var models  = require('../models');
var express = require('express');

module.exports = function(app) {

    /**
     * @api {get} /room Room list
     * @apiName getRoom
     * @apiGroup Room
     *
     * @apiSuccess {JSON} field title,room,status
     * @apiError {JSON} field title,messages,errors,status
     */
    app.get('/room', function(req, res) {
        models.Room.findAll().then(function (rooms) {
            res.statusCode = 200;
            res.json({
                title: 'Get data success',
                rooms: rooms,
                status: 'success'
            });
        });
    });
    /**
     * @api {post} /room Create new room
     * @apiName createRoom
     * @apiGroup Room
     *
     * @apiParam {String} title
     * @apiParam {String} PlaceId - parent
     * @apiParam {Float} description
     * @apiParam {Integer} folderImg
     * @apiParam {Boolean} conditioner
     * @apiParam {Boolean} dush
     * @apiParam {Boolean} toilet
     * @apiParam {Boolean} tv
     * @apiParam {Boolean} wifi
     * @apiParam {Boolean} refrigeter
     * @apiParam {Boolean} smoke
     * @apiParam {Boolean} animal
     * @apiParam {Boolean} soundproofing
     * @apiParam {Boolean} massage
     * @apiParam {Boolean} limited_opportunities
     * @apiParam {Boolean} free_cancel_booking
     * @apiParam {Boolean} stock
     * @apiParam {Boolean} double_bed
     * @apiParam {Boolean} single_bed
     *
     * @apiSuccess {JSON} field title,room,status
     * @apiSuccess {JSON} field title,messages,errors,status
     */
    app.post('/room', function(req, res) {
        var room = {
            PlaceId: req.query.PlaceId ? req.query.PlaceId : '',
            title: req.query.title ? req.query.title : '',
            description: req.query.description ? req.query.description : '',
            folderImg: req.query.folderImg ? req.query.folderImg : '',
            conditioner: req.query.conditioner ? req.query.conditioner : '',
            dush: req.query.dush ? req.query.dush : '',
            kitchen: req.query.kitchen ? req.query.kitchen : '',
            toilet: req.query.toilet ? req.query.toilet : '',
            tv: req.query.tv ? req.query.tv : '',
            wifi: req.query.wifi ? req.query.wifi : '',
            refrigeter: req.query.refrigeter ? req.query.refrigeter : '',
            smoke: req.query.smoke ? req.query.smoke : '',
            animal: req.query.animal ? req.query.animal : '',
            soundproofing: req.query.soundproofing ? req.query.soundproofing : '',
            massage: req.query.massage ? req.query.massage : '',
            limited_opportunities: req.query.limited_opportunities ? req.query.limited_opportunities : '',
            free_cancel_booking: req.query.free_cancel_booking ? req.query.free_cancel_booking : '',
            stock: req.query.stock ? req.query.stock : '',
            double_bed: req.query.double_bed ? req.query.double_bed : '',
            single_bed: req.query.single_bed ? req.query.single_bed : '',
        }
        models.Room.create(room).then(function () {
            res.statusCode = 200;
            res.json({
                title: 'Get data success',
                room: room,
                status: 'success'
            });
        });
    });
    /**
     * @api {get} /room/:id Room information
     * @apiName getRoomById
     * @apiGroup Room
     *
     * @apiParam {Number} id Room unique ID.
     *
     * @apiSuccess {JSON} field title,room,status
     * @apiSuccess {JSON} field title,messages,errors,status
     */
    app.get('/room/:id', function(req, res) {
        var id = req.params.id;
        req.assert('id', 'id is required').isInt();
        var errors = req.validationErrors();
        if( !errors){
            models.Room.find(
                {
                    include: [
                        {model: models.Price},
                        {model: models.Image},
                        {model: models.Comment},
                    ],
                    where: {
                        id: id
                    }
                })
                .then(function (room) {
                    res.statusCode = 200;
                    res.json({
                        title: 'Get data by id' + id,
                        room: room,
                        status: 'success'
                    });
                });
        }else {
            res.statusCode = 400;
            res.json({
                title: 'cant get room from this id',
                message: 'cant get room from this id',
                errors: errors,
                status: 'error'
            });
        }
    });
    /**
     * @api {put} /room/:id Update room
     * @apiName putRoom
     * @apiGroup Room
     *
     * @apiParam {String} title
     * @apiParam {String} PlaceId - parent
     * @apiParam {Float} description
     * @apiParam {Integer} folderImg
     * @apiParam {Boolean} conditioner
     * @apiParam {Boolean} dush
     * @apiParam {Boolean} toilet
     * @apiParam {Boolean} tv
     * @apiParam {Boolean} wifi
     * @apiParam {Boolean} refrigeter
     * @apiParam {Boolean} smoke
     * @apiParam {Boolean} animal
     * @apiParam {Boolean} soundproofing
     * @apiParam {Boolean} massage
     * @apiParam {Boolean} limited_opportunities
     * @apiParam {Boolean} free_cancel_booking
     * @apiParam {Boolean} stock
     * @apiParam {Boolean} double_bed
     * @apiParam {Boolean} single_bed
     *
     * @apiSuccess {JSON} field title,room,status
     * @apiSuccess {JSON} field title,messages,errors,status
     */
    app.put('/room/:id', function (req, res){
        var id = req.params.id;
        req.assert('id', 'id is required').isInt();
        var errors = req.validationErrors();
        if( !errors){
            models.Room.find(
                {where: {
                    id: id
                }})
                .then(function (room) {
                    room.updateAttributes(req.query)
                        .then(function (update_room) {
                            res.statusCode = 200;
                            res.json({
                                title: 'room id -' + id + ' update',
                                room: update_room,
                                status: 'success'
                            });
                        }).catch(function (error) {
                        res.statusCode = 404;
                        res.json({
                            title: error,
                            room: '',
                            status: 'error'
                        });
                    })


                });
        }else {
            res.statusCode = 400;
            res.json({
                title: 'cant update room from this id',
                message: 'cant update room from this id',
                errors: errors,
                status: 'error'
            });
        }

    });
    /**
     * @api {delete} /room/:id Delete room
     * @apiName deleteRoom
     * @apiGroup Room
     *
     * @apiParam {Number} id Room unique ID.
     *
     * @apiSuccess {JSON} field title,room,status
     * @apiError {JSON} field title,messages,errors,status
     */
    app.delete('/room/:id', function (req, res){
        var id = req.params.id;
        req.assert('id', 'id is required').isInt();
        var errors = req.validationErrors();
        if( !errors){
            models.Room.destroy({id: id})
                .then(function (deletedRecord) {
                    if(deletedRecord === 1){
                        res.statusCode = 200;
                        res.json({
                            title: 'room id -' + id + ' deleted',
                            room: '',
                            status: 'success'
                        });
                    }
                    else
                    {
                        res.statusCode = 404;
                        res.json({
                            title: 'record not found',
                            room: '',
                            status: 'error'
                        });
                    }

                })
                .catch(function (error) {
                    res.statusCode = 404;
                    res.json({
                        title: error,
                        room: '',
                        status: 'error'
                    });
                });
        }else {
            res.statusCode = 400;
            res.json({
                title: 'cant delete room from this id',
                message: 'cant delete room from this id',
                errors: errors,
                status: 'error'
            });
        }
    });
}
