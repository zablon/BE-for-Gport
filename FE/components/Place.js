/**
 * Created by semianchuk on 07.04.16.
 */
import React, { Component } from 'react'
import { connect } from 'react-redux'
var MainTable = require('./mainTable');
var helper = require('./helper');
var config = require('./config');
var EditPlace = require('./editPlace');
var Breadcrumbs = require('react-breadcrumbs');
var Link = require('react-router').Link;
var Comments = require('./comments/Comments');
var FotoFolder = require('./FotoFolder');
import store from "../store"

class Place extends Component {
    constructor(props) {
        super(props);
        this.state = { display: 2,
            placeId: this.props.params.placeId,
            mainTable:'',
            profileUrl:'',
            post:'',
            place: {
                type:'',
                description:'',
                distance:'',
                toilet:'',
                dush:'',
                tv:'',
                refrigeter:'',
                conditioner:'',
                wifi:'',
                eat:''
            }
        };
    }
    socButton(){
        (function() {
            if (window.pluso)if (typeof window.pluso.start == "function") return;
            if (window.ifpluso==undefined) { window.ifpluso = 1;
                var d = document, s = d.createElement('script'), g = 'getElementsByTagName';
                s.type = 'text/javascript'; s.charset='UTF-8'; s.async = true;
                s.src = ('https:' == window.location.protocol ? 'https' : 'http')  + '://share.pluso.ru/pluso-like.js';
                var h=d[g]('body')[0];
                h.appendChild(s);
            }})();
    }
    checkImg(){
        var profileImg = new Image(),
            self = this;
            profileImg.onload = function(){
                self.setState({
                    profileUrl: config.domain + 'images/zport/'+ self.props.params.placeId + '/ico.jpg'
                })
            }
            profileImg.onerror = function(){
                self.setState({
                    profileUrl: config.domain + 'site-images/default.ico'
                })
            }
            profileImg.src = config.domain + 'images/zport/'+ this.props.params.placeId + '/ico.jpg';
    }
    componentDidMount() {
    this.setState({
        post : 'some'
    })
    this.socButton();
    this.checkImg();
    this.setState({
            placeId: this.props.params.placeId,
            display: 2,
            mainTable: '',
            place: {
                type:'',
                description:'',
                distance:'',
                toilet:'',
                dush:'',
                tv:'',
                refrigeter:'',
                conditioner:'',
                wifi:'',
                eat:''
            }
        })
        var self=this;
        if(this.state != null){
            var num=1,
                locations = restaurants
                    .filter(function(data){
                        if(data.id){
                            return data.id == self.props.params.placeId
                        }
                    })
                    .map(function(data){
                        var dataHouse = data;
                        dataHouse.typeHouse = 'zport';
                        self.setState({
                            place:dataHouse,
                            description:dataHouse.description,
                            images: <FotoFolder data={dataHouse}></FotoFolder>,
                            mainTable : dataHouse.room
                            .map(function(data){
                                num++;
                                return <MainTable fullData={dataHouse} data={data} count={dataHouse.room.length} num={num}></MainTable>;
                            })
                        })
                    })
        }
    }
render() {
    console.log('======Place=======')
    console.log(this.props)
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
                        <Link to={'/place/'+this.state.place.id}>
                           {this.state.place.title}
                         </Link>
                    </li>
                </ul>
            </div>
            <div className="location-block col-md-12">
                <div className="col-md-4">
                        <a className="fancyimage" data-fancybox-group="group" href={this.state.profileUrl}>
                            <img classNameName='img-responsive' src={this.state.profileUrl}/>
                        </a>
                </div>
                <div className="col-md-8">
                    <ul className="list-group">
                        <li className="list-group-item">
                            <i className="glyphicon glyphicon-home"></i> {this.state.place.title}
                        </li><li className="list-group-item">
                            <i className="glyphicon glyphicon-star"></i> Тип: {helper.type(this.state.place.type)}
                        </li>
                        <li className="list-group-item">
                            <i className="glyphicon glyphicon-send"></i> Дистанция: {this.state.place.distance} м.
                        </li>
                        <li className="list-group-item">
                            <i className="glyphicon glyphicon-shopping-cart"></i> Удобства: <i className={this.state.place.toilet==true ? "glyphicon glyphicon-ok" : "glyphicon glyphicon-remove"}></i>
                        </li>
                        <li className="list-group-item">
                            <i className="glyphicon glyphicon-equalizer"></i> Душ: <i className={this.state.place.dush==true ? "glyphicon glyphicon-ok" : " glyphicon glyphicon-remove"}></i>
                        </li>
                        <li className="list-group-item">
                            <i className="glyphicon glyphicon-expand"></i> TV: <i className={this.state.place.tv==true ? "glyphicon glyphicon-ok" : " glyphicon glyphicon-remove"}></i>
                        </li>
                        <li className="list-group-item">
                            <i className="glyphicon glyphicon-folder-close"></i> Холодильник: <i className={this.state.place.refrigeter==true ? "glyphicon glyphicon-ok" : " glyphicon glyphicon-remove"}></i>
                        </li>
                        <li className="list-group-item">
                            <i className="glyphicon glyphicon-cloud"></i> Басейн: <i className={this.state.place.swiming==true ? "glyphicon glyphicon-ok" : " glyphicon glyphicon-remove"}></i>
                        </li>
                        <li className="list-group-item">
                            <i className="glyphicon glyphicon-cd"></i> Wifi: <i className={this.state.place.wifi==true ? "glyphicon glyphicon-ok" : " glyphicon glyphicon-remove"}></i>
                        </li>
                        <li className="list-group-item">
                            <i className="glyphicon glyphicon-apple"></i> Кухня:  <i className={this.state.place.eat==true ? "glyphicon glyphicon-ok" : " glyphicon glyphicon-remove"}></i>
                        </li>
                        <li className="list-group-item">
                            <i className="glyphicon glyphicon-phone-alt"></i> Контакты: <span> {this.state.place.phone}</span>
                        </li>
                        <li className="list-group-item">
                            <i className="glyphicon glyphicon-map-marker"></i> Адрес: <span> {this.state.place.address}</span>
                        </li>
                        <li className="list-group-item">
                            <i className="glyphicon glyphicon-hand-right"></i>   <Link to={'/guides/'+this.state.place.id}>Путеводитель для {this.state.place.title}</Link>
                        </li>
                        <li className="list-group-item">
                            <div className="pluso"
                                data-background="#ebebeb"
                                data-options="medium,square,line,horizontal,counter,theme=04"
                                data-services="vkontakte,odnoklassniki,facebook,twitter,google,moimir,email,print"
                                data-url={config.domain +'#/place/'+this.state.place.id}
                                data-title={this.state.place.title}
                                data-description={this.state.place.description}>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="col-md-12 location-block-description text-left">
                 {this.state.description}
            </div>
            <div className="col-md-12 location-block-description">
                {this.state.images}
            </div>
            {this.state.mainTable}
        </div>
        );
}
};

function mapStateToProps (state) {
    console.log('mapStateToProps')
    console.log(state)
    const { user, tweets } = state.reducer;
    return {
        store: store,
        user: user,
        tweets: tweets
    }
}

module.exports = connect(mapStateToProps)(Place);


/*

 <div className="col-md-12">
 <Comments placeId={this.state.placeId}></Comments>
 </div>



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
