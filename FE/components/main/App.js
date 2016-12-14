import React, { Component } from 'react'
import { connect } from 'react-redux'

var Search = require('./../search/Search');
var Map = require('./Map');
var CurrentLocation = require('./CurrentLocation');
var LocationList = require('./LocationList');
var SearchField = require('./../search/SearchField');
var SearchComponent = require('./../search/SearchComponent');
//import restauran from "../../restaurants"

window.restaurants = [];

var helper = require('./../helper');

var MainNav = require('./MainNav');
var Auth = require('./../auth/auth');
var Social = require('./../social/social');
var Adsense = require('./../Adsense/Adsense');

import ProfileBlock from "../Profile/ProfileBlock"
import { addTweet } from "../../actions/tweetsActions"
import { setUserParams } from "../../actions/userActions"
import { setPlaceParams, fetchPlace } from "../../actions/placeActions"
import { setFilterType, fetchFilter, setFilterText, clearFilter } from "../../actions/filterActions"
import store from "../../store"
import config from "../config"
import io from 'socket.io-client'
import Notifier from "react-desktop-notification"

window.gmarkers = [];

class App extends Component {
    constructor(props) {
        super(props);

        fetchPlace(this.props.store.dispatch);

        this.props.store.dispatch(setUserParams(window.userSettings))
        var type = (this.props.params.type ? this.props.params.type : '');
        this.state = {
			currentAddress: 'Zport',
			mapCoordinates: {
                lat: 46.12363029999999,
                lng: 32.29127140000003
            },
            filter: this.props.filter
        };
    }
    componentDidMount () {
        this.socket = io('/')
        this.socket.on('user', data => {
            Notifier.start(data.title, data.text, config.domain, config.domain+"images/icon/logo.jpeg");
        })
    }
	filterFunc(data){
        this.props.store.dispatch(fetchFilter());
        this.state.filter = this.props.filter
	}
	searchForAddress(data){
        this.props.store.dispatch(setFilterText(data.title));
        this.state.filter = this.props.filter
        this.state.removeMarkers= true
        this.state.mapCoordinates= {
            lat: data.lat,
            lng: data.lng
        }
	}
    handleFilterText(filterText){
        this.props.store.dispatch(setFilterText(filterText));
        this.state.filter = this.props.filter
    }
    clearFilter(){
        this.props.store.dispatch(clearFilter());
        this.state.filter = this.props.filter
    }
    typeFilter(){
        if(this.props.params.type){
            this.props.store.dispatch(setFilterType(this.props.params.type));
            this.state.filter = this.props.filter
        }else{
            this.clearFilter();
        }

    }
	render(){
    var routeType = (this.props.params.type ? this.props.params.type : '');
        let filter = this.props.filter;
        return (
			<div className="main-page">
                <div className="col-md-12 header-img">
                    <Social></Social>
                    <img className="main-img" src="site-images/header-img.jpg"/>
                </div>
                <div className="col-md-12">
                    <MainNav type={routeType} typeFilter={this.typeFilter.bind(this)}></MainNav>
                </div>
                <div className="col-md-12 profile-img">
                    <ProfileBlock ></ProfileBlock>
                </div>
                <div className="col-md-12">
                    <div className="col-md-7">
                        <Auth></Auth>
                        <div className="main-map-block">
                            <div className="col-md-12">
                                <h2>Поиск жилья</h2>
                                <SearchField onSearch={this.searchForAddress.bind(this)} onFilterInput={this.handleFilterText.bind(this)} filterText={this.state.filterText}/>
                            </div>
                            <SearchComponent key="SearchComponent" type={routeType}/>
                        </div>
                    </div>
                    <div className="mark-map-block col-md-5">
                        <LocationList key="LocationList" filter= {filter} filterText={this.state.filterText} clearFilter={this.clearFilter.bind(this)} locations={this.props.place} activeLocationAddress={this.state.currentAddress}
                        onClick={this.searchForAddress.bind(this)} />
                    </div>
                    <div className="map-block col-md-5 hidden">
                        <Map filter= {filter} filterText={this.state.filterText} locations={this.props.place.places} removeMarkers={this.state.removeMarkers} lat={this.state.mapCoordinates.lat} lng={this.state.mapCoordinates.lng} />
                    </div>
                </div>

			</div>
		);
	}

};

function mapStateToProps (state) {
    const { user, tweets, filter, place } = state.reducer;
    return {
        state: store.getState(),
        store: store,
        user: user,
        tweets: tweets,
        filter: filter,
        place: place,
    }
}

module.exports = connect(mapStateToProps)(App);

/*
 <div className="col-md-12">
 <div className="main-map-block">
 <SearchComponent key="SearchComponent" type={routeType}/>
 </div>
 </div>
 <Adsense></Adsense>
 */
