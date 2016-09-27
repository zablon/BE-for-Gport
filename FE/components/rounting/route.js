/**
 * Created by semianchuk on 23.09.16.
 */
import { Router, Route, browserHistory } from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'

var App = require('../App');
var Place = require('../Place/Place');
var Guides = require('../guides/guides');
var Contacts = require('../contacts/Contacts');
var Infrastructure = require('../Infrastructure/Infrastructure');

import store from "../../store"
import { Provider } from "react-redux"

const history = syncHistoryWithStore(browserHistory, store)

module.exports = (
    <Provider store={store}>
        <Router history={history} >
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
            </Router>
    </Provider>)
