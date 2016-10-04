var React = require('react');
var helper = require('./../helper');

var Map = React.createClass({
	componentDidMount(){
		this.componentDidUpdate();
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
        var self = this;
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
                return (props.filter.filterSearch==true) ? props.filter.wifi ? (console.log(data.wifi==props.filter.wifi)) : true : true
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
                var icon = 'images/icon/green-icon.png'
                switch(data.type){
                    case 'chast':
                        icon = 'images/icon/chast.png'
                        break;
                    case 'pansionat':
                        icon = 'images/icon/pansionat.png'
                        break;
                    case 'hotel':
                        icon = 'images/icon/hotel.png'
                        break;
                    case 'sanatoriy':
                        icon = 'images/icon/sanatoriy.png'
                        break;
                    case 'otel':
                        icon = 'images/icon/otel.png'
                        break;
                    case 'children':
                        icon = 'images/icon/children.png'
                        break;
                    case 'basi':
                        icon = 'images/icon/basi.png'
                        break;
                    case 'room':
                        icon = 'images/icon/room.png'
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
	render(){
		return (
			<div className="map-holder">
				<p>Loading...</p>
				<div id="map"></div>
			</div>
		);
	}

});

module.exports = Map;