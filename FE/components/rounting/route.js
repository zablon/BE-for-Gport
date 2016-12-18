/**
 * Created by semianchuk on 23.09.16.
 */
import { Router, Route, browserHistory } from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'

var App = require('../../conteiner/App');
var Place = require('../../conteiner/Place');
var Guides = require('../../conteiner/Guides');
var Contacts = require('../../conteiner/Contacts');
var Statistics = require('../statistics/Statistics');
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
                <Route path="statistics"  name="Statistics" component={Statistics}>
                <Route path="/statistics/d3" component={Statistics}/>
                </Route>
            </Router>
    </Provider>)
