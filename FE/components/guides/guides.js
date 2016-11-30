/**
 * Created by semianchuk on 23.04.16.
 */

var config = require('./../config');
var directionsService = new google.maps.DirectionsService;
var directionsDisplay = new google.maps.DirectionsRenderer;
var Steps = require('./steps');
var MainNav = require('../main/MainNav');
var Link = require('react-router').Link;
var helper = require('../helper');
var endPoint = helper.endPoint

import React, { Component } from 'react'
import { connect } from 'react-redux'
import store from "../../store"
import { setPlaceProfileUrl, setPlaceId, setPlaceParams } from "../../actions/placeActions"
import { setUserParams } from "../../actions/userActions"

class Guides extends Component {
    constructor(props) {
        super(props);
        this.props.store.dispatch(setUserParams(window.userSettings));
        this.props.store.dispatch(setPlaceId(this.props.params.placeName));
        this.state= {
            fulldata: {},
            legs: {},
            url: '',
            description: '',
            destination: '',
            endPoint:endPoint
        }
    }
    initMap() {
        var self = this;
        setTimeout(function(){
            var map = new google.maps.Map(document.getElementById('map'),{
                zoom: 14,
                center: {
                    lat: Number(self.state.fulldata.lat),
                    lng: Number(self.state.fulldata.lng)
                }
            });
            directionsDisplay.setMap(map);
        },100)
    }
    calculateAndDisplayRoute(end) {
        var lat = Number(this.state.fulldata.lat),
            lng = Number(this.state.fulldata.lng),
            self=this;
        directionsService.route({
            origin: {lat: lat, lng: lng},  // Haight.
            destination: end,
            travelMode: google.maps.TravelMode.WALKING
        }, function(response, status) {
            if (status === google.maps.DirectionsStatus.OK) {
                self.setState({
                    legs : response.routes[0].legs[0],
                    url : end.url,
                    description :  end.description,
                    destination : end
                })
                directionsDisplay.setDirections(response);
            } else {
                window.alert('Directions request failed due to ' + status);
            }
        });
    }
    calcRoute(event){
        var end = this.state.endPoint;
        for(var i=0; i<end.length; i++){
            if(end[i].name == event.target.value){
                this.calculateAndDisplayRoute(end[i]);
            }
        }
    }
    getDataFromJSON(){
        var url =  config.domain + 'place/get/'+this.props.params.placeName,
            self=this;
        $.ajax({
            type: "POST",
            url: url,
            dataType: "json",
            success: function (obj) {
                if(obj.status == 'success'){
                    var dataHouse = obj.place;
                    dataHouse.typeHouse = 'zport';
                    var placeParams = {
                        place:dataHouse,
                        description:dataHouse.description
                    }
                    self.props.store.dispatch(setPlaceParams(placeParams));
                    self.setState({
                        fulldata:dataHouse
                    })
                    setTimeout(function(){
                        self.calcRoute({target: {value: 'bazarNew'}})
                    },200)
                }else{
                    console.log(obj.errors)
                }
            }
        })
    }
    componentDidMount(){
        this.getDataFromJSON();
    }
    render() {
        this.initMap();
        var end = this.state.endPoint
            .map(function(data){
                return   <option value={data.name}>{data.label}</option>
            })
        var distance = this.state.legs.distance ? this.state.legs.distance.value : ''
        var put =  <h4>Дорога до - {distance}</h4>
        return (
            <div className="guide">
                <div className="col-md-12">
                    <MainNav type="" typeFilter=""></MainNav>
                </div>
                <div className="col-md-12">
                    <h3>Путеводитель для  -  <Link to={'/place/'+this.state.fulldata.id} className="location-title"> {this.state.fulldata.title}</Link> </h3>
                </div>
                <div className="col-md-12" id="floating-panel">
                    <div  className="col-md-6">
                        <b>Начало: </b>
                        <select id="start" onChange={this.calcRoute.bind(this)}>
                            <option value="chicago, il">{this.state.fulldata.title}</option>
                        </select>
                    </div>
                    <div className="col-md-6">
                        <b>Конечная точка: </b>
                        <select id="end" onChange={this.calcRoute.bind(this)}>
                            {end}
                        </select>
                    </div>
                </div>
                <div className="col-md-12">
                    <div className="col-md-6">
                        <h4>{ this.state.destination ? this.state.destination.label : ''} находится на расстоянии -{ this.state.legs.distance ? this.state.legs.distance.value : ''} м от {this.state.fulldata.title}</h4>
                        <Steps step={this.state.legs}></Steps>
                    </div>
                    <div className="col-md-6" id="map"></div>
                </div>
                <div className="col-md-12">
                    <hr/>
                </div>
                <div className="col-md-12">
                    <div className="col-md-6"><img src={config.domain + 'site-images/'+ this.state.url}/></div>
                    <div className="col-md-6">{this.state.description}</div>
                </div>
            </div>
            );
    }
}

function mapStateToProps (state) {
    const { user, place } = state.reducer;
    return {
        store: store,
        user: user,
        place: place
    }
}

module.exports = connect(mapStateToProps)(Guides);

