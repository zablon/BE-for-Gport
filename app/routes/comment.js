/**
 * Created by semianchuk on 30.09.16.
 */
var comments = require('../controller/comment.js');

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

}