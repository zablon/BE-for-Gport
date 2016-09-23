/**
 * Created by semianchuk on 23.09.16.
 */
var Router = require('react-router').Router;
var hashHistory = require('react-router').hashHistory;
var Route = require('react-router').Route;
var Link = require('react-router').Link

var App = require('../App');
var Place = require('../Place');
var Guides = require('../guides/guides');
var Contacts = require('../contacts/Contacts');
var Infrastructure = require('../Infrastructure/Infrastructure');

module.exports = (<Router history={hashHistory} >
            <Route path="/" name="Main" component={App}>
                <Route path="/:type" component={App}/>
            </Route>
            <Route path="place"  name="Place" component={Place}>
            <Route path="/place/:placeId" component={Place}/>
            </Route>
            <Route path="infrastructure"  name="Infrastructure" component={Infrastructure}>
            <Route path="/infrastructure/gport" component={Infrastructure}/>
            </Route>
            <Route path="guides"  name="Guides" component={Guides}>
            <Route path="/guides/:placeName" component={Guides}/>
            </Route>
            <Route path="contacts"  name="Contacts" component={Contacts}>
            <Route path="/contact/us" component={Contacts}/>
            </Route>
        </Router>)
