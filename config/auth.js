// config/auth.js

// expose our config directly to our application using module.exports
module.exports = {
    'facebookAuth' : {
        'clientID'        : '1652875785041795', // your App ID
        'clientSecret'    : '4bd4f6e45a6efe7ba55abaf41913f756', // your App Secret
        'callbackURL'     : 'http://localhost:8080/auth/facebook/callback'
    },

    'twitterAuth' : {
        'consumerKey'        : 'pfTdbYQHGxQBGilMkFNfSaA6j',
        'consumerSecret'     : 'your-client-secret-here',
        'callbackURL'        : 'http://localhost:8080/auth/twitter/callback'
    },

    'googleAuth' : {
        'clientID'         : '794774317449-moe1qs9ldvdp6bgimgpun12e232u6ue8.apps.googleusercontent.com',
        'clientSecret'     : 'xFxnyxkdeNp9gfLgg447Wf54',
        'callbackURL'      : 'http://localhost:8080/auth/google/callback'
    }

};
