/**
 * Created by semianchuk on 23.04.16.
 */

var config = require('./../components/config');
var Link = require('react-router').Link;

import React, { Component } from 'react'
import { connect } from 'react-redux'
import store from "../store"
import  Guidelist  from './../components/guides/guide'
import { setPlaceId, setPlaceParams } from "../actions/placeActions"
import { setUserParams } from "../actions/userActions"

class Guides extends Component {
    constructor(props) {
        super(props);
        this.props.store.dispatch(setUserParams(window.userSettings));
        this.props.store.dispatch(setPlaceId(this.props.params.placeName));
        this.state= {
            fulldata: {},
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
        return (
            <div className="guide">
                <div className="col-md-12">
                    <ol className="breadcrumb text-left" onClick={this.handleSubmit}>
                        <li className="active">
                            <Link to={'/'}>
                                Главная
                            </Link>
                        </li>
                        <li>
                            <Link to={'/place/'+this.state.fulldata.id}>
                                {this.state.fulldata.title}
                            </Link>
                        </li>
                    </ol>
                </div>
                <div className="col-md-12">
                    <h3>Путеводитель для  -  <Link to={'/place/'+this.state.fulldata.id} className="location-title"> {this.state.fulldata.title}</Link> </h3>
                </div>
                <Guidelist fulldata={this.state.fulldata}></Guidelist>
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

