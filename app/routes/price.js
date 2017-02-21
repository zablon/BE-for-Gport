var models  = require('../models');
var express = require('express');

module.exports = function(app) {

    /**
     * @api {get} /price Price list
     * @apiName getPrice
     * @apiGroup Price
     *
     * @apiSuccess {JSON} field title,price,status
     * @apiError {JSON} field title,messages,errors,status
     */
    app.get('/price', function (req, res) {
        models.Price.findAll().then(function (prices) {
            res.statusCode = 200;
            res.json({
                title: 'Get data success',
                prices: prices,
                status: 'success'
            });
        });
    });
    /**
     * @api {post} /price Create new price
     * @apiName createPrice
     * @apiGroup Price
     *
     * @apiParam {String} mounth
     * @apiParam {String} RoomId - parent
     * @apiParam {Float} price
     * @apiParam {Integer} stock
     *
     * @apiSuccess {JSON} field title,price,status
     * @apiSuccess {JSON} field title,messages,errors,status
     */
    app.post('/price', function (req, res) {
        var price = {
            RoomId: req.query.RoomId ? req.query.RoomId : '',
            mounth: req.query.mounth ? req.query.mounth : '',
            price: req.query.price ? req.query.price : '',
            stock: req.query.stock ? req.query.stock : '',
        }
        models.Price.create(price).then(function () {
            res.statusCode = 200;
            res.json({
                title: 'Get data success',
                price: price,
                status: 'success'
            });
        });
    });
    /**
     * @api {get} /price/:id Price information
     * @apiName getPriceById
     * @apiGroup Price
     *
     * @apiParam {Number} id Price unique ID.
     *
     * @apiSuccess {JSON} field title,price,status
     * @apiSuccess {JSON} field title,messages,errors,status
     */
    app.get('/price/:id', function (req, res) {
        var id = req.params.id;
        req.assert('id', 'id is required').isInt();
        var errors = req.validationErrors();
        if (!errors) {
            models.Price.find(
                {
                    where: {
                        id: id
                    }
                })
                .then(function (price) {
                    res.statusCode = 200;
                    res.json({
                        title: 'Get data by id' + id,
                        price: price,
                        status: 'success'
                    });
                });
        } else {
            res.statusCode = 400;
            res.json({
                title: 'cant get price from this id',
                message: 'cant get price from this id',
                errors: errors,
                status: 'error'
            });
        }
    });
    /**
     * @api {put} /price/:id Update price
     * @apiName putPrice
     * @apiGroup Price
     *
     * @apiParam {String} mounth
     * @apiParam {String} RoomId - parent
     * @apiParam {Float} price
     * @apiParam {Integer} stock
     *
     * @apiSuccess {JSON} field title,price,status
     * @apiSuccess {JSON} field title,messages,errors,status
     */
    app.put('/price/:id', function (req, res) {
        var id = req.params.id;
        req.assert('id', 'id is required').isInt();
        var errors = req.validationErrors();
        if (!errors) {
            models.Price.find(
                {
                    where: {
                        id: id
                    }
                })
                .then(function (price) {
                    price.updateAttributes(req.query)
                        .then(function (update_price) {
                            res.statusCode = 200;
                            res.json({
                                title: 'price id -' + id + ' update',
                                price: update_price,
                                status: 'success'
                            });
                        }).catch(function (error) {
                        res.statusCode = 404;
                        res.json({
                            title: error,
                            price: '',
                            status: 'error'
                        });
                    })


                });
        } else {
            res.statusCode = 400;
            res.json({
                title: 'cant update price from this id',
                message: 'cant update price from this id',
                errors: errors,
                status: 'error'
            });
        }

    });
    /**
     * @api {delete} /price/:id Delete price
     * @apiName deletePrice
     * @apiGroup Price
     *
     * @apiParam {Number} id Price unique ID.
     *
     * @apiSuccess {JSON} field title,price,status
     * @apiError {JSON} field title,messages,errors,status
     */
    app.delete('/price/:id', function (req, res) {
        var id = req.params.id;
        req.assert('id', 'id is required').isInt();
        var errors = req.validationErrors();
        if (!errors) {
            models.Price.destroy({id: id})
                .then(function (deletedRecord) {
                    if (deletedRecord === 1) {
                        res.statusCode = 200;
                        res.json({
                            title: 'price id -' + id + ' deleted',
                            price: '',
                            status: 'success'
                        });
                    }
                    else {
                        res.statusCode = 404;
                        res.json({
                            title: 'record not found',
                            price: '',
                            status: 'error'
                        });
                    }

                })
                .catch(function (error) {
                    res.statusCode = 404;
                    res.json({
                        title: error,
                        price: '',
                        status: 'error'
                    });
                });
        } else {
            res.statusCode = 400;
            res.json({
                title: 'cant delete price from this id',
                message: 'cant delete price from this id',
                errors: errors,
                status: 'error'
            });
        }
    });
}