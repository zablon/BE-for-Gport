/**
 * Created by semianchuk on 07.04.16.
 */
import React, { Component } from 'react'
import { connect } from 'react-redux'
var helper = require('./../helper');
var config = require('./../config');
var Link = require('react-router').Link;
import FotoFolder from ".//FotoFolder"
import MainTable from "./../main/mainTable"
import Comments from "../comments/Comments"
import store from "../../store"
import SmallInformationBoard from "./SmallInformationBoard"
import { setPlaceProfileUrl, setPlaceId, setPlaceParams } from "../../actions/placeActions"
import { setUserParams } from "../../actions/userActions"

class Place extends Component {
    constructor(props) {
        super(props);
        this.props.store.dispatch(setUserParams(window.userSettings))
    }
    getDataFromJSON(){
        var url =  config.domain + 'place/get/'+this.props.params.placeId,
            self=this;
        $.ajax({
            type: "POST",
            url: url,
            dataType: "json",
            success: function (obj) {
                if(obj.status == 'success'){
                    var dataHouse = obj.place;
                    var placeParams = {
                        place:dataHouse,
                        description:dataHouse.description,
                    }
                    self.props.store.dispatch(setPlaceParams(placeParams));
                }else{
                    console.log(obj.errors)
                }
            }
        })
    }
    componentDidMount() {
        this.props.store.dispatch(setPlaceId(this.props.params.placeId));
        this.getDataFromJSON();
    }
    render() {
        var place = this.props.place;

        return (
            <div>
                <div className="col-md-12 place-title">
                    <ul className="nav nav-pills"  onClick={this.handleSubmit}>
                        <li className='active'>
                            <Link to={'/'}>
                            Главная
                            </Link>
                        </li>
                        <li>
                            <Link to={'/place/'+place.id}>
                               {place.title}
                             </Link>
                        </li>
                    </ul>
                </div>
                <div className="location-block col-md-12">
                    <div className="col-md-4">
                            <a className="fancyimage" data-fancybox-group="group" href={config.domain + 'images/zport/'+ place.id + '/ico.jpg'}>
                                <img classNameName='img-responsive' src={config.domain + 'images/zport/'+ place.id + '/ico.jpg'}/>
                            </a>
                    </div>
                    <div className="col-md-8">
                        <SmallInformationBoard data={place}></SmallInformationBoard>
                    </div>
                </div>
                <div className="col-md-12">
                    <Comments placeId={place.placeId}></Comments>
                </div>
                <div className="col-md-12 location-block-description text-left">
                     {place.description}
                </div>
                <div className="col-md-12 location-block-description">
                    {
                        !place.Images ?
                            <span>Загрузки...</span>
                            :
                            <FotoFolder data={place} type="zport" id={place.id}></FotoFolder>
                    }
                </div>
                <MainTable place={place}></MainTable>
            </div>
        );
    }
};

function mapStateToProps (state) {
    const { user, place } = state.reducer;
    return {
        store: store,
        user: user,
        place: place.place
    }
}

module.exports = connect(mapStateToProps)(Place);

