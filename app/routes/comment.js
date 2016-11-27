/**
 * Created by semianchuk on 30.09.16.
 */
var models  = require('../models'),
    express = require('express'),
    helper = require('../../config/helper.js');

module.exports = function(app) {
    
    app.post('/comments/getbyplaceid', function(req, res) {
        req.assert('placeid', 'placeid is required').isInt();
        var errors = req.validationErrors();
        if( !errors){
            models.Comment.findAll({where: {'PlaceId': req.body.placeid},
                    include: [models.User]})
                .then(function (comments) {
                    res.statusCode = 200;
                    res.json({
                        title: 'Get data by id',
                        message: comments,
                        status: 'success'
                    });
                });
        }
        else {
            res.statusCode = 200;
            res.json({
                title: 'cant get comments from this id',
                message: 'cant get comments from this id',
                errors: errors,
                status: 'error'
            });
        }
    });

    app.post('/comments/add', function(req, res) {
        req.assert('placeid', 'placeid is not integer').isInt();
        req.assert('data', 'data is empty').notEmpty();

        var errors = req.validationErrors();
        if( !errors){
            models.Comment.create({
                data: req.body.data,
                name: req.body.name,
                PlaceId: req.body.placeid,
                UserId: req.user ? req.user.id : req.body.userid ? req.body.userid : 1240170586050377,
                type: req.body.type,
                email: req.body.email,
            }).then(function (msg) {
                res.statusCode = 200;
                res.json({
                    title: 'comment add success',
                    message: msg,
                    status: 'success'
                });
            });
        }
        else {
            res.statusCode = 200;
            res.json({
                title: 'cant add comment',
                message: 'cant add comment',
                errors: errors,
                status: 'error'
            });
        }

    });
    app.post('/comments/remove', function(req, res) {
        if(!req.user){
            res.json({message: 'you are not login ', status: 'error'});
            return ;
        }

        req.assert('data', 'data is not obj').notEmpty();

        var errors = req.validationErrors();
        if( !errors){
            var user = req.user;
            if(user.id != req.body.data.User.id){
                res.json({message: 'you are have no permissions ', status: 'error'});
                return ;
            }
            models.Comment.destroy({
                where: {
                    id: req.body.data.id
                }
            }).then(function (result) {
                res.statusCode = 200;
                res.json({
                    title: 'remove comment success',
                    message: result,
                    status: 'success'
                });
            })
            .catch(function () {
                res.statusCode = 400;
                res.json({
                    title: 'cant remove comment',
                    message: err,
                    status: 'error'
                });
            });
        }
        else {
            res.statusCode = 200;
            res.json({
                title: 'cant remove comment',
                message: 'cant remove comment',
                errors: errors,
                status: 'error'
            });
        }

    })
}