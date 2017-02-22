var models  = require('../models');
var express = require('express');
var fs = require('fs');
var multer  = require('multer');
var cors  = require('cors');

module.exports = function(app) {
    app.use(cors({ credentials: true, origin: 'http://localhost:4200' }));

    app.options('/api'); // enable pre-flight request for DELETE request
    var upload = multer({ dest: 'uploads/' })

    app.post('/upload', upload.any(), function(req, res)  {
       console.log(req.files)
        res.statusCode = 200;
        res.json({
            title: 'Get data success',
            images: req.files.originalname,
            status: 'success'
        });
    });


    /**
     * @api {get} /image Image list
     * @apiName getImage
     * @apiGroup Image
     *
     * @apiSuccess {JSON} field title,image,status
     * @apiError {JSON} field title,messages,errors,status
     */
    app.get('/image', function (req, res) {
        models.Image.findAll().then(function (images) {
            res.statusCode = 200;
            res.json({
                title: 'Get data success',
                images: images,
                status: 'success'
            });
        });
    });
    /**
     * @api {post} /image Create new image
     * @apiName createImage
     * @apiGroup Image
     *
     * @apiParam {String} mounth
     * @apiParam {String} RoomId - parent
     * @apiParam {String} CountryId - parent
     * @apiParam {String} RegionId - parent
     * @apiParam {String} CityId - parent
     * @apiParam {String} AreaId - parent
     * @apiParam {String} PlaceId - parent
     * @apiParam {String} CommunityId - parent
     * @apiParam {Float} image
     * @apiParam {Integer} stock
     *
     * @apiSuccess {JSON} field title,image,status
     * @apiSuccess {JSON} field title,messages,errors,status
     */
    app.post('/image', function (req, res) {
        var image = {
            RoomId: req.query.RoomId ? req.query.RoomId : '',
            CountryId: req.query.CountryId ? req.query.CountryId : '',
            RegionId: req.query.RegionId ? req.query.RegionId : '',
            CityId: req.query.CityId ? req.query.CityId : '',
            AreaId: req.query.AreaId ? req.query.AreaId : '',
            PlaceId: req.query.PlaceId ? req.query.PlaceId : '',
            CommunityId: req.query.CommunityId ? req.query.CommunityId : '',
            mounth: req.query.mounth ? req.query.mounth : '',
            image: req.query.image ? req.query.image : '',
            stock: req.query.stock ? req.query.stock : '',
        }
        models.Image.create(image).then(function () {
            res.statusCode = 200;
            res.json({
                title: 'Get data success',
                image: image,
                status: 'success'
            });
        });
    });
    /**
     * @api {get} /image/:id Image information
     * @apiName getImageById
     * @apiGroup Image
     *
     * @apiParam {Number} id Image unique ID.
     *
     * @apiSuccess {JSON} field title,image,status
     * @apiSuccess {JSON} field title,messages,errors,status
     */
    app.get('/image/:id', function (req, res) {
        var id = req.params.id;
        req.assert('id', 'id is required').isInt();
        var errors = req.validationErrors();
        if (!errors) {
            models.Image.find(
                {
                    where: {
                        id: id
                    }
                })
                .then(function (image) {
                    res.statusCode = 200;
                    res.json({
                        title: 'Get data by id' + id,
                        image: image,
                        status: 'success'
                    });
                });
        } else {
            res.statusCode = 400;
            res.json({
                title: 'cant get image from this id',
                message: 'cant get image from this id',
                errors: errors,
                status: 'error'
            });
        }
    });
    /**
     * @api {put} /image/:id Update image
     * @apiName putImage
     * @apiGroup Image
     *
     * @apiParam {String} mounth
     * @apiParam {String} RoomId - parent
     * @apiParam {String} CountryId - parent
     * @apiParam {String} RegionId - parent
     * @apiParam {String} CityId - parent
     * @apiParam {String} AreaId - parent
     * @apiParam {String} PlaceId - parent
     * @apiParam {String} CommunityId - parent
     * @apiParam {Float} image
     * @apiParam {Integer} stock
     *
     * @apiSuccess {JSON} field title,image,status
     * @apiSuccess {JSON} field title,messages,errors,status
     */
    app.put('/image/:id', function (req, res) {
        var id = req.params.id;
        req.assert('id', 'id is required').isInt();
        var errors = req.validationErrors();
        if (!errors) {
            models.Image.find(
                {
                    where: {
                        id: id
                    }
                })
                .then(function (image) {
                    image.updateAttributes(req.query)
                        .then(function (update_image) {
                            res.statusCode = 200;
                            res.json({
                                title: 'image id -' + id + ' update',
                                image: update_image,
                                status: 'success'
                            });
                        }).catch(function (error) {
                        res.statusCode = 404;
                        res.json({
                            title: error,
                            image: '',
                            status: 'error'
                        });
                    })


                });
        } else {
            res.statusCode = 400;
            res.json({
                title: 'cant update image from this id',
                message: 'cant update image from this id',
                errors: errors,
                status: 'error'
            });
        }

    });
    /**
     * @api {delete} /image/:id Delete image
     * @apiName deleteImage
     * @apiGroup Image
     *
     * @apiParam {Number} id Image unique ID.
     *
     * @apiSuccess {JSON} field title,image,status
     * @apiError {JSON} field title,messages,errors,status
     */
    app.delete('/image/:id', function (req, res) {
        var id = req.params.id;
        req.assert('id', 'id is required').isInt();
        var errors = req.validationErrors();
        if (!errors) {
            models.Image.destroy({id: id})
                .then(function (deletedRecord) {
                    if (deletedRecord === 1) {
                        res.statusCode = 200;
                        res.json({
                            title: 'image id -' + id + ' deleted',
                            image: '',
                            status: 'success'
                        });
                    }
                    else {
                        res.statusCode = 404;
                        res.json({
                            title: 'record not found',
                            image: '',
                            status: 'error'
                        });
                    }

                })
                .catch(function (error) {
                    res.statusCode = 404;
                    res.json({
                        title: error,
                        image: '',
                        status: 'error'
                    });
                });
        } else {
            res.statusCode = 400;
            res.json({
                title: 'cant delete image from this id',
                message: 'cant delete image from this id',
                errors: errors,
                status: 'error'
            });
        }
    });
}