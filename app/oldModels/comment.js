/*
/!**
 * Created by semianchuk on 30.09.16.
 *!/
var mongoose = require('mongoose');

var commentSchema = mongoose.Schema({

        userid       : Number,
        name         : String,
        email        : String,
        data         : String,
        type         : String,
        placeid      : Number,
        dateCreated  : { type: Date, default: Date.now },
        dateModified : { type: Date, default: Date.now },

});

module.exports = mongoose.model('Comment', commentSchema);
*/
