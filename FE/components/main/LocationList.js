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