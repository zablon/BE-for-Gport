/**
 * Created by semianchuk on 30.09.16.
 */
var comments = require('../controller/comment.js');
var helper = require('../../config/helper.js');

module.exports = function(app) {

    app.post('/comments/getbyplaceid', function(req, res) {
        req.assert('placeid', 'placeid is required').isInt();

        var errors = req.validationErrors();
        if( !errors){
            function callback(err, msg){
                if(err) {
                    res.json({
                        title: 'cant get comment',
                        message: err,
                        status: 'error'
                    });
                }

                res.statusCode = 200;
                res.json({
                    title: 'comment get success',
                    message: msg,
                    status: 'success'
                });
            }
            comments.getbyplaceid(req.body,callback)
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
            function callback(err,msg){
                if(err) {
                    res.json({
                        title: 'cant add comment',
                        message: err,
                        status: 'error'
                    });
                }

                res.statusCode = 200;
                res.json({
                    title: 'comment add success',
                    message: msg,
                    status: 'success'
                });
            }
            comments.add(req.body,callback)
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
            var user = helper.parseUserObj(req.user);
            if(user.id != req.body.data.user.id){
                res.json({message: 'you are have no permissions ', status: 'error'});
                return ;
            }
            function callback(err,msg){
                if(err) {
                    res.statusCode = 200;
                    res.json({
                        title: 'cant remove comment',
                        message: err,
                        status: 'error'
                    });
                }

                res.statusCode = 200;
                res.json({
                    title: 'comment remove success',
                    message: msg,
                    status: 'success'
                });
            }
            comments.remove(req.body,callback)
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