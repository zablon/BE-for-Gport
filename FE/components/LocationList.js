import React, { Component } from 'react'
import LocationItem from './LocationItem'
import helper from './helper'
import { setFilterType } from "../actions/filterActions"
import { connect } from 'react-redux'
import store from "../store"

class LocationList extends Component {

    clearFilter(){
        this.props.clearFilter();
    }
	render(){

		var self = this;
        var props = this.props;
        var num=0;
		var locations = this.props.locations
            .filter(function(data){
                    return (props.filter.textSearch==true) ? data.title.toLowerCase().indexOf(props.filter.filterText.toLowerCase()) > -1 : true;
            })
            .filter(function(data){
                    return (props.filter.filterSearch==true) ? data.type.toLowerCase().indexOf(props.filter.type.toLowerCase()) > -1 : true
            })
            .filter(function(data){
                    return (props.filter.filterSearch==true) ?  props.filter.toilet ? props.filter.toilet : true : true
            })
            .filter(function(data){
                    return (props.filter.filterSearch==true) ? props.filter.distance ? data.distance.toLowerCase().indexOf(props.filter.distance.toLowerCase()) > -1 : true : true
            })
            .filter(function(data){
                    return (props.filter.filterSearch==true) ? props.filter.toilet ? props.filter.tv : true  : true
            })
            .filter(function(data){
                    return (props.filter.filterSearch==true) ? props.filter.toilet ? props.filter.toilet : true : true
            })
            .filter(function(data){
                    return (props.filter.filterSearch==true) ? props.filter.toilet ? props.filter.toilet : true : true
            })
            .filter(function(data){
                    return (props.filter.filterSearch==true) ? props.filter.toilet ? props.filter.toilet : true : true
            })
            .filter(function(data){
                    return (props.filter.filterSearch==true) ? props.filter.toilet ? props.filter.toilet : true : true
            })
            .filter(function(data){
                    return (props.filter.filterSearch==true) ? props.filter.toilet ? props.filter.toilet : true : true
            })
            .filter(function(data){
                    return (props.filter.filterSearch==true) ? props.filter.toilet ? props.filter.toilet : true : true
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

};

function mapStateToProps (state) {
    const { user, tweets, filter } = state.reducer;
    return {
        store: store,
        filter: filter
    }
}

module.exports = connect(mapStateToProps)(LocationList);