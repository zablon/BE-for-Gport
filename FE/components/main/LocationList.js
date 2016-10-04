import React, { Component } from 'react'
import LocationItem from './locationItem/LocationItem'
import helper from '../helper'
import { setFilterType } from "../../actions/filterActions"
import { connect } from 'react-redux'
import store from "../../store"

class LocationList extends Component {

    clearFilter(){
        this.props.clearFilter();
    }
	render(){

		var self = this;
        var props = this.props;
        var num=0;
        console.log('locationlist')
        console.log(this.props)
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
                <span className="caption-of-result glyphicon glyphicon-remove" onClick={this.clearFilter.bind(this)}></span>
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