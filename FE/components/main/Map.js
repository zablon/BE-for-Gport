var React = require('react');
var helper = require('./../helper');
import config from "../config"

var Map = React.createClass({
    getInitialState() {
        return { num: 0 };
    },
    infoWindow(data){
        return '<div class="col-md-12 map-list-preview" style="text-align: left">'+
            '<h4><a href="#/place/'+data.id+'">'+data.title+'</a></h4>'+
            '<ul class="list-group" style="padding: 0; margin-top: 0px;">'+
            '<li class="list-group-item">'+
            '<i class="glyphicon glyphicon-star"></i> Тип: '+helper.type(data.type)+
            '</li>'+
            '<li class="list-group-item">'+
            '<i class="glyphicon glyphicon-send"></i> Дистанция: '+data.distance+
            '</li>'+
            '<li class="list-group-item">'+
            '<i class="glyphicon glyphicon-shopping-cart"></i> Удобства: <i class="'+ (data.toilet==true ? "glyphicon glyphicon-ok" : " glyphicon glyphicon-remove") +'"></i>'+
            '</li>'+
            '<li class="list-group-item">'+
            '<i class="glyphicon glyphicon-equalizer"></i> Душ: <i class="'+ (data.dush==true ? "glyphicon glyphicon-ok" : " glyphicon glyphicon-remove") +'"></i>'+
            '</li>'+
            '<li class="list-group-item">'+
            '<i class="glyphicon glyphicon-expand"></i> TV: <i class="'+ (data.tv==true ? "glyphicon glyphicon-ok" : " glyphicon glyphicon-remove") +'"></i>'+
            '</li>'+
            '<li class="list-group-item">'+
            '<i class="glyphicon glyphicon-folder-close"></i> Холодильник: <i class="'+ (data.refrigeter==true ? "glyphicon glyphicon-ok" : " glyphicon glyphicon-remove") +'"></i>'+
            '</li>'+
            '<li class="list-group-item">'+
            '<i class="glyphicon glyphicon-globe"></i> Кондиционер: <i class="'+ (data.conditioner==true ? "glyphicon glyphicon-ok" : " glyphicon glyphicon-remove") +'"></i>'+
            '</li>'+
            '<li class="list-group-item">'+
            '<i class="glyphicon glyphicon-cd"></i> Wifi: <i class="'+ (data.wifi==true ? "glyphicon glyphicon-ok" : " glyphicon glyphicon-remove") +'"></i>'+
            '</li>'+
            '<li class="list-group-item">'+
            '<i class="glyphicon glyphicon-apple"></i> Питание:  <i class="'+ (data.eat==true ? "glyphicon glyphicon-ok" : " glyphicon glyphicon-remove") +'"></i>'+
            '</li>'+
            '</ul>'+
        '</div>'
    },
	componentDidUpdate(){
        if(!this.props.action) return ;
		if(this.lastLat == this.props.lat && this.lastLng == this.props.lng){
			return;
		}
        var map = new GMaps({
            el: '#map',
             lat: 46.12363029999999,
             lng: 32.29127140000003,
            markerClusterer: function(map) {
               let options = {
                    gridSize: 40
                }

                return new MarkerClusterer(map, [], options);
            }
        });
        map.removeMarkers();
        this.addMarkers(map, this.props)
	},
    addMarkers(map, props){
        var self = this,
            num=0;
        var locations = this.props.locations
            .filter(function(data){
                return (props.filter.textSearch==true) ? data.title.toLowerCase().indexOf(props.filter.filterText.toLowerCase()) > -1 : true;
            })
            .filter(function(data){
                return (props.filter.filterSearch==true) ? props.filter.type ? data.type.toLowerCase().indexOf(props.filter.type.toLowerCase()) > -1 : true : true
            })
            .filter(function(data){
                return (props.filter.filterSearch==true) ?  props.filter.toilet ? (data.toilet==props.filter.toilet)  : true : true
            })
            .filter(function(data){
                return (props.filter.filterSearch==true) ? props.filter.distance ? data.distance.toLowerCase().indexOf(props.filter.distance.toLowerCase()) > -1 : true : true
            })
            .filter(function(data){
                return (props.filter.filterSearch==true) ? props.filter.tv ? (data.tv==props.filter.tv) : true  : true
            })
            .filter(function(data){
                return (props.filter.filterSearch==true) ? props.filter.refrigeter ? (data.refrigeter==props.filter.refrigeter) : true : true
            })
            .filter(function(data){
                return (props.filter.filterSearch==true) ? props.filter.conditioner ? (data.conditioner==props.filter.conditioner) : true : true
            })
            .filter(function(data){
                return (props.filter.filterSearch==true) ? props.filter.wifi ? (data.wifi==props.filter.wifi) : true : true
            })
            .filter(function(data){
                return (props.filter.filterSearch==true) ? props.filter.eat ? (data.eat==props.filter.eat) : true : true
            })
            .filter(function(data){
                return (props.filter.filterSearch==true) ? props.filter.children ? props.filter.children : true : true
            })
            .filter(function(data){
                return (props.filter.filterSearch==true) ? props.filter.swiming ? props.filter.swiming : true : true
            })
            .map(function(data){
                num++;
                var icon = config.domain + 'images/icon/green-icon.png'
                switch(data.type){
                    case 'chast':
                        icon = config.domain + 'images/icon/chast.png'
                        break;
                    case 'pansionat':
                        icon = config.domain + 'images/icon/pansionat.png'
                        break;
                    case 'hotel':
                        icon = config.domain + 'images/icon/hotel.png'
                        break;
                    case 'sanatoriy':
                        icon = config.domain + 'images/icon/sanatoriy.png'
                        break;
                    case 'otel':
                        icon = config.domain + 'images/icon/otel.png'
                        break;
                    case 'children':
                        icon = config.domain + 'images/icon/children.png'
                        break;
                    case 'basi':
                        icon = config.domain + 'images/icon/basi.png'
                        break;
                    case 'room':
                        icon = config.domain + 'images/icon/room.png'
                        break;
                    default:

                }
                var marker = map.addMarker({
                        lat: data.lat,
                        lng: data.lng,
                    click: function(e) {
                        //alert('You clicked in this marker');
                    },
                    infoWindow: {
                        content: self.infoWindow(data)
                    }
                }).setIcon(icon);
                gmarkers.push(marker);
        })

        new MarkerClusterer(map, gmarkers);
    },
    clearFilter(){
        this.props.clearFilter();
    },
	render(){
        console.log(this.props)
        return (
			<div className="map-holder">
                <span className="list-group-item list-group-item-first active">Результаты: {this.state.num}</span>
                <span className="caption-of-result glyphicon glyphicon-remove" onClick={this.clearFilter.bind(this)}></span>
				<p>Loading...</p>
				<div id="map"></div>
			</div>
		);
	}

});

module.exports = Map;