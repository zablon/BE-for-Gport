import React, { Component } from 'react'
import LocationItem from './locationItem/LocationItem'


export default class LocationList extends Component {
    
    clearFilter(){
        this.props.clearFilter();
    }
	render(){
		var self = this;
        var props = this.props;
        var num=0;

		return (
			<div className="list-group col-xs-12">
				<span className="list-group-item list-group-item-first active">Результаты: {props.locations.length}</span>
                <span className="caption-of-result glyphicon glyphicon-remove" onClick={this.clearFilter.bind(this)}></span>
				{
                    props.locations
                        .map(function(l){
                            num++;
                            let active = props.activeLocationAddress == l.address;
                            return <LocationItem key={l.id} data={l} timestamp={l.timestamp}
                                                 active={active} onClick={self.props.onClick} />
                        })
                }
			</div>
		)

	}

};