var React = require('react');
var LocationItem = require('./LocationItem');

var LocationList = React.createClass({

	componentDidUpdate(){

	},
    clearFilter(){
        this.props.clearFilter();
    },
	render(){

		var self = this;
        var props = this.props;
        var num=0;
        console.log('locationlist')
        console.log(this.props)
		var locations = this.props.locations
            .filter(function(data){
                return data.title.toLowerCase().indexOf(props.filter.filterText.toLowerCase()) > -1;
            })
            .filter(function(data){
                if(props.filter!='' && data.type){
                    return (data.type.toLowerCase().indexOf(props.filter.type.toLowerCase()) > -1) ? false : true;
                }
            })
            .filter(function(data){
                    return (data.toilet==props.filter.toilet || props.filter.toilet=='') ? true : false
            })
/*            .filter(function(data){
                if(props.filter!='' && data.distance){
                    return data.distance.toLowerCase().indexOf(props.filter.distance.toLowerCase()) > -1;
                }
            })*/
            .filter(function(data){
                    return (data.tv==props.filter.tv || props.filter.tv=='') ? true : false
            })
            .filter(function(data){
                    return (data.refrigeter==props.filter.refrigeter || props.filter.refrigeter=='') ? true : false
            })
            .filter(function(data){
                    return (data.conditioner==props.filter.conditioner || props.filter.conditioner=='') ? true : false
            })
            .filter(function(data){
                    return (data.wifi==props.filter.wifi || props.filter.wifi=='') ? true : false
            })
            .filter(function(data){
                    return (data.eat==props.filter.eat || props.filter.eat=='') ? true : false
            })
            .filter(function(data){
                    return (data.swiming==props.filter.swiming || props.filter.swiming=='') ? true : false
            })
            .filter(function(data){
                    return (data.parking==props.filter.parking || props.filter.parking=='') ? true : false
            })
            .map(function(l){
                num++;
			var active = self.props.activeLocationAddress == l.address;

			return <LocationItem data={l} timestamp={l.timestamp}
					active={active} onClick={self.props.onClick} />
		});

		if(!locations.length){
			return null;
		}

		return (
			<div className="list-group col-xs-12">
				<span className="list-group-item list-group-item-first active">Результаты: {num}</span>
                <span className="caption-of-result glyphicon glyphicon-remove" onClick={this.clearFilter}></span>
				{locations}
			</div>
		)

	}

});

module.exports = LocationList;