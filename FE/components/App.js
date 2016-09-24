import React, { Component } from 'react'

var Search = require('./Search');
var Map = require('./Map');
var CurrentLocation = require('./CurrentLocation');
var LocationList = require('./LocationList');
var SearchField = require('./SearchField');
var SearchComponent = require('./SearchComponent');
import restaurants from "../restaurants"
window.restaurants = restaurants;
var helper = require('./helper');

var MainNav = require('./MainNav');
var Auth = require('./auth/Auth');
var Social = require('./social/social');
var Adsense = require('./Adsense/Adsense');
window.gmarkers = [];
import { setUserParams } from "../actions/userActions"
import { connect } from 'react-redux'
import store from "../store"

class App extends Component {
    constructor(props) {
        super(props);
        this.props.store.dispatch(setUserParams(userSettings));
        var type = (this.props.params.type ? this.props.params.type : '');
		var favorites = [];
        favorites = restaurants;
        this.getDataDromDB();
        this.state = {
			favorites: favorites,
			currentAddress: 'Zport',
			mapCoordinates: {
                lat: 46.12363029999999,
                lng: 32.29127140000003
            },
            filterText: '',
            filter:  {
                type: type,
                distance: '',
                toilet: '',
                tv: '',
                refrigeter: '',
                conditioner: '',
                wifi: '',
                eat: '',
                children: '',
                swiming: '',
                parking: ''
            }
        };
	}
    getDataDromDB(){
/*        var url = 'http://104.131.48.201:8080/zport/getjson',
            self=this;
        $.ajax({
            type: "POST",
            url: url,
            dataType: "json",
            data: '',
            success: function (obj) {
                self.setState({
                    favorites:  obj
                })
            }
        })*/
    }
	toggleFavorite(address){

		if(this.isAddressInFavorites(address)){
			this.removeFromFavorites(address);
		}
		else{
			this.addToFavorites(address);
		}

	}
	addToFavorites(address){
		var favorites = this.state.favorites;
		favorites.push({
			address: address,
			timestamp: Date.now()
		});
		this.setState({
			favorites: favorites
		});

		localStorage.favorites = JSON.stringify(favorites);
	}
	removeFromFavorites(address){
		var favorites = this.state.favorites;
		var index = -1;
		for(var i = 0; i < favorites.length; i++){

			if(favorites[i].address == address){
				index = i;
				break;
			}
		}
		// If it was found, remove it from the favorites array
		if(index !== -1){
			favorites.splice(index, 1);
			this.setState({
				favorites: favorites
			});
			localStorage.favorites = JSON.stringify(favorites);
		}
	}
	isAddressInFavorites(address){
		var favorites = this.state.favorites;
		for(var i = 0; i < favorites.length; i++){
			if(favorites[i].address == address){
				return true;
			}
		}
		return false;
	}
	filterFunc(data){
        if(data.type!='' || data.distance!='' || data.toilet!='' || data.tv!='' || data.refrigeter!='' || data.conditioner!='' || data.wifi!='' || data.eat!='' || data.children!='' || data.swiming!=''){
            this.setState({
                filter: data
            })
        }
	}
	searchForAddress(data){
		var self = this;
        this.setState({
            filterText: data.title
        })
        self.setState({
            removeMarkers: true,
            mapCoordinates: {
                lat: data.lat,
                lng: data.lng
            }
        });
	}
    handleFilterText(filterText){
        this.setState({
            filterText: filterText
        })
    }
    clearFilter(){
        this.setState({
            filterText: ''
        })
        this.setState({
            filter: {
                type: '',
                distance: '',
                toilet: '',
                tv: '',
                refrigeter: '',
                conditioner: '',
                wifi: '',
                eat: '',
                children: '',
                swiming: '',
                parking: ''
            }
        })
    }
    typeFilter(){
        if(this.props.params.type){
            this.setState({
                filter: {
                    type: this.props.params.type,
                    distance: '',
                    toilet: '',
                    tv: '',
                    refrigeter: '',
                    conditioner: '',
                    wifi: '',
                    eat: '',
                    children: '',
                    swiming: '',
                    parking: ''
                }
            })
        }else{
            this.clearFilter();
        }

    }
	render(){
/*    var url = 'http://localhost:8080/zport/getjson';
    var self=this;
    $.ajax({
        type: "POST",
        url: url,
        dataType: "json",
        data: '',
        success: function (obj) {
            self.setState({
                favorites:  obj
            })
        }
    });*/
        console.log('======App=======')
        console.log(this.props)

    var routeType = (this.props.params.type ? this.props.params.type : '');
    return (
			<div className="main-page">
                <div className="col-md-12 header-img">
                    <Social></Social>
                    <img className="main-img" src="site-images/header-img.jpg"/>
                </div>
                <div className="col-md-12">
                    <MainNav type={routeType} typeFilter={this.typeFilter}></MainNav>
                </div>
                <div className="col-md-12 main-label">
				    <h1>Поиск жилья в железном порту</h1>
                </div>
                <div className="col-md-12">
                    <SearchField onSearch={this.searchForAddress} onFilterInput={this.handleFilterText} filterText={this.state.filterText}/>
                </div>
                <div className="col-md-12">
                    <div className="col-md-7">
                        <Auth></Auth>
                        <Map filter= {this.state.filter} filterText={this.state.filterText} locations={this.state.favorites} removeMarkers={this.state.removeMarkers} lat={this.state.mapCoordinates.lat} lng={this.state.mapCoordinates.lng} />
                    <Adsense></Adsense>
                    </div>
                    <div className="mark-map-block col-md-5">
                        <LocationList filter= {this.state.filter} filterText={this.state.filterText} clearFilter={this.clearFilter} locations={this.state.favorites} activeLocationAddress={this.state.currentAddress}
                        onClick={this.searchForAddress} />
                    </div>
                </div>
                <div className="col-md-12">
                    <div className="main-map-block">
                        <SearchComponent
                        type={routeType}
                        onFilter={this.filterFunc}
                        onSearch={this.searchForAddress}
                        filterText={this.state.filterText}/>
                    </div>
                </div>
			</div>
		);
	}

};

function mapStateToProps (state) {
    console.log('mapStateToProps')
    console.log(state)
    const { user, tweets } = state.reducer;
    return {
        store: store,
        user: user,
        tweets: tweets
    }
}

module.exports = connect(mapStateToProps)(App);