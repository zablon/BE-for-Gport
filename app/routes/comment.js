var models  = require('../models');
var express = require('express');

module.exports = function(app) {
    /**
     * @api {get} /comment Comment list
     * @apiName getComment
     * @apiGroup Comment
     *
     * @apiParam {Integer} offset = 0
     * @apiParam {Integer} limit = 20
     *
     * @apiSuccess {JSON} field title,comment,status
     * @apiError {JSON} field title,messages,errors,status
     */
    app.get('/comment', function (req, res) {
        var offset = req.params.offset || 0,
            limit = req.params.limit || 20;

        models.Comment.findAll({ offset: offset, limit: limit }).then(function (comments) {
            res.statusCode = 200;
            res.json({
                title: 'Get data success',
                comments: comments,
                status: 'success'
            });
        });
    });
    /**
     * @api {post} /comment Create new comment
     * @apiName createComment
     * @apiGroup Comment
     *
     * @apiParam {String} PlaceId - parent
     * @apiParam {String} name
     * @apiParam {String} email
     * @apiParam {String} data
     *
     * @apiSuccess {JSON} field title,comment,status
     * @apiSuccess {JSON} field title,messages,errors,status
     */
    app.post('/comment', function (req, res) {
        var comment = {
            PlaceId: req.query.PlaceId ? req.query.PlaceId : '',
            name: req.query.name ? req.query.name : '',
            email: req.query.email ? req.query.email : '',
            data: req.query.data ? req.query.data : ''
        }
        models.Comment.create(comment).then(function () {
            res.statusCode = 200;
            res.json({
                title: 'Get data success',
                comment: comment,
                status: 'success'
            });
        });
    });
    /**
     * @api {get} /comment/:id Comment information
     * @apiName getCommentById
     * @apiGroup Comment
     *
     * @apiParam {Number} id Comment unique ID.
     *
     * @apiSuccess {JSON} field title,comment,status
     * @apiSuccess {JSON} field title,messages,errors,status
     */
    app.get('/comment/:id', function (req, res) {
        var id = req.params.id;
        req.assert('id', 'id is required').isInt();
        var errors = req.validationErrors();
        if (!errors) {
            models.Comment.find(
                {
                    where: {
                        id: id
                    }
                })
                .then(function (comment) {
                    res.statusCode = 200;
                    res.json({
                        title: 'Get data by id' + id,
                        comment: comment,
                        status: 'success'
                    });
                });
        } else {
            res.statusCode = 400;
            res.json({
                title: 'cant get comment from this id',
                message: 'cant get comment from this id',
                errors: errors,
                status: 'error'
            });
        }
    });
    /**
     * @api {put} /comment/:id Update comment
     * @apiName putComment
     * @apiGroup Comment
     *
     * @apiParam {String} PlaceId - parent
     * @apiParam {String} name
     * @apiParam {String} email
     * @apiParam {String} data
     *
     * @apiSuccess {JSON} field title,comment,status
     * @apiSuccess {JSON} field title,messages,errors,status
     */
    app.put('/comment/:id', function (req, res) {
        var id = req.params.id;
        req.assert('id', 'id is required').isInt();
        var errors = req.validationErrors();
        if (!errors) {
            models.Comment.find(
                {
                    where: {
                        id: id
                    }
                })
                .then(function (comment) {
                    comment.updateAttributes(req.query)
                        .then(function (update_comment) {
                            res.statusCode = 200;
                            res.json({
                                title: 'comment id -' + id + ' update',
                                comment: update_comment,
                                status: 'success'
                            });
                        }).catch(function (error) {
                        res.statusCode = 404;
                        res.json({
                            title: error,
                            comment: '',
                            status: 'error'
                        });
                    })


                });
        } else {
            res.statusCode = 400;
            res.json({
                title: 'cant update comment from this id',
                message: 'cant update comment from this id',
                errors: errors,
                status: 'error'
            });
        }

    });
    /**
     * @api {delete} /comment/:id Delete comment
     * @apiName deleteComment
     * @apiGroup Comment
     *
     * @apiParam {Number} id Comment unique ID.
     *
     * @apiSuccess {JSON} field title,comment,status
     * @apiError {JSON} field title,messages,errors,status
     */
    app.delete('/comment/:id', function (req, res) {
        var id = req.params.id;
        req.assert('id', 'id is required').isInt();
        var errors = req.validationErrors();
        if (!errors) {
            models.Comment.destroy({id: id})
                .then(function (deletedRecord) {
                    if (deletedRecord === 1) {
                        res.statusCode = 200;
                        res.json({
                            title: 'comment id -' + id + ' deleted',
                            comment: '',
                            status: 'success'
                        });
                    }
                    else {
                        res.statusCode = 404;
                        res.json({
                            title: 'record not found',
                            comment: '',
                            status: 'error'
                        });
                    }

                })
                .catch(function (error) {
                    res.statusCode = 404;
                    res.json({
                        title: error,
                        comment: '',
                        status: 'error'
                    });
                });
        } else {
            res.statusCode = 400;
            res.json({
                title: 'cant delete comment from this id',
                message: 'cant delete comment from this id',
                errors: errors,
                status: 'error'
            });
        }
    });
}