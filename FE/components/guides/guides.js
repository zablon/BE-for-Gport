/**
 * Created by semianchuk on 23.04.16.
 */

var React = require('react');
var config = require('./../config');
var directionsService = new google.maps.DirectionsService;
var directionsDisplay = new google.maps.DirectionsRenderer;
var Steps = require('./steps');
var MainNav = require('../main/MainNav');
var Link = require('react-router').Link;
var helper = require('../helper');
var endPoint = helper.endPoint
var Guides = React.createClass({
    getInitialState(){
        return {
            fulldata: {},
            legs: {},
            url: '',
            description: '',
            destination: '',
            endPoint:endPoint
        }
    },
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
    },
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
    },
    calcRoute(event){
        var end = this.state.endPoint;
        for(var i=0; i<end.length; i++){
            if(end[i].name == event.target.value){
                this.calculateAndDisplayRoute(end[i]);
            }
        }
    },
    componentDidMount(){
        var self = this;
        locations = restaurants
            .filter(function(data){
                if(data.id){
                    return data.id == self.props.params.placeName
                }
            })
            .map(function(data){
                self.setState({
                    fulldata:data
                })
            })
            setTimeout(function(){
                self.calcRoute({target: {value: 'bazarNew'}})
            },200)
    },

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
                        <select id="start" onChange={this.calcRoute}>
                            <option value="chicago, il">{this.state.fulldata.title}</option>
                        </select>
                    </div>
                    <div className="col-md-6">
                        <b>Конечная точка: </b>
                        <select id="end" onChange={this.calcRoute}>
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
    });

module.exports = Guides;