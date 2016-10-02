/**
 * Created by semianchuk on 30.09.16.
 */
var Comment    = require('../models/comment.js'),
    User       = require('../models/user'),
    async      = require('async');

var comments ={};
var queryForMongo = function(data){
    switch(data.type){
        case 'local':
            return {'local': data.userid};
        case 'facebook':
            return {'facebook.id': data.userid};
        case 'twitter':
            return {'twitter.id': data.userid};
        case 'google':
            return {'google.id': data.userid};
        case 'vk':
            return {'vk.id': data.userid};
        case 'odnoklassniki':
            return {'odnoklassniki.id': data.userid};
    }
    return ;
}
comments.getbyplaceid = function (obj, done) {
    Comment.find(obj, function(err, comment) {

        var calls = [];

        comment.forEach(function(data,index){
            calls.push(function(callback) {
                    if(data.type) {
                        User.findOne(queryForMongo(data), function(err, user) {
                            data.user = user
                            console.log('===data====')
                            console.log(data)
                            console.log(user)
                            callback(null, data);
                        });
                    }else{
                        callback(null, data);
                    }
                }
            )});

        async.parallel(calls, function(err, result) {
            if (err)
                return console.log(err);

            done(err, result);
        });


    }).sort( { dateCreated: -1 } );
}

comments.add = function (data, done) {
    var newComment      = new Comment();
    newComment.placeid  = data.placeid;
    newComment.userid   = data.userid;
    newComment.email    = data.email;
    newComment.data     = data.data;
    newComment.type     = data.type;
    newComment.save(function(err) {
        if (err)
            return done(null, err);

        return done(null, newComment);
    });
}


module.exports = comments;