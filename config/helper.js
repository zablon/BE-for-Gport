/**
 * Created by semianchuk on 03.10.16.
 */
var helper = {};

    helper.parseUserObj = function (obj) {
        var user;
        for(i in obj){
            if(typeof obj[i] !=='undefined' && obj[i].id){
                user = obj[i];
            }
        }
        return user;
    }

    helper.queryForMongo = function(data){
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

    helper.queryForReturnUser = function(data, user){
        if(!user) return ;
        switch(data.type){
            case 'local':
                return user.local;
            case 'facebook':
                return user.facebook;
            case 'twitter':
                return user.twitter;
            case 'google':
                return user.google;
            case 'vk':
                return user.vk;
            case 'odnoklassniki':
                return user.odnoklassniki;
        }
        return ;
    }

module.exports = helper;