/**
 * Created by semianchuk on 07.04.16.
 */
import React, { Component } from 'react'
import { connect } from 'react-redux'
var MainTable = require('./../mainTable');
var helper = require('./../helper');
var config = require('./../config');
var Link = require('react-router').Link;
var FotoFolder = require('./../FotoFolder');
import Comments from "../comments/Comments"
import store from "../../store"
import SmallInformationBoard from "./SmallInformationBoard"
import { setPlaceProfileUrl, setPlaceId, setPlaceParams } from "../../actions/placeActions"

class Place extends Component {
    constructor(props) {
        super(props);
    }
    checkImg(){
        var self = this,
            profileImg = new Image(),
            self = this;
            profileImg.onload = function(){
                self.props.store.dispatch(setPlaceProfileUrl(config.domain + 'images/zport/'+ self.props.params.placeId + '/ico.jpg'))
            }
            profileImg.onerror = function(){
                self.props.store.dispatch(setPlaceProfileUrl(config.domain + 'site-images/default.ico'))
            }
            profileImg.src = config.domain + 'images/zport/'+ this.props.params.placeId + '/ico.jpg';
    }
    getDataFromJSON(){
        var self=this,
            num=1,
            locations = restaurants
                .filter(function(data){
                    return data.id ? data.id == self.props.params.placeId : ''
                })
                .map(function(data, index){
                    var dataHouse = data;
                    dataHouse.typeHouse = 'zport';
                    var placeParams = {
                        place:dataHouse,
                        description:dataHouse.description,
                        images: <FotoFolder key={index} data={dataHouse}></FotoFolder>,
                        mainTable : dataHouse.room
                            .map(function(data, index){
                                num++;
                                return <MainTable key={index} fullData={dataHouse} data={data} count={dataHouse.room.length} num={num}></MainTable>;
                            })
                    }
                    self.props.store.dispatch(setPlaceParams(placeParams))
                })
    }
    componentDidMount() {
        this.props.store.dispatch(setPlaceId(this.props.params.placeId));
        this.getDataFromJSON();
        this.checkImg(this);
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
                            <Link to={'/place/'+place.place.id}>
                               {place.place.title}
                             </Link>
                        </li>
                    </ul>
                </div>
                <div className="location-block col-md-12">
                    <div className="col-md-4">
                            <a className="fancyimage" data-fancybox-group="group" href={place.profileUrl}>
                                <img classNameName='img-responsive' src={place.profileUrl}/>
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
                    {place.images}
                </div>
                {place.mainTable}
            </div>
        );
    }
};

function mapStateToProps (state) {
    const { user, place } = state.reducer;
    return {
        store: store,
        user: user,
        place: place
    }
}

module.exports = connect(mapStateToProps)(Place);


/*
 var EditPlace = require('./../editPlace');


 var Breadcrumbs = require('react-breadcrumbs');

<Breadcrumbs
excludes={['Place']}
routes={this.props.routes}
params={this.props.params}
/>
*/

/*
<div className="col-md-12 location-block-edit">
    <EditPlace  data={this.state.place}></EditPlace>
</div>*/
