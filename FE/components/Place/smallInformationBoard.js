/**
 * Created by semianchuk on 27.09.16.
 */
import React, { Component } from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import store from "../../store"
import helper from "../helper"

class SmallInformationBoard extends Component {
    constructor(props) {
        super(props);
        this.socButton();
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
    render(){
        var data = this.props.data;
        return (
            <ul className="list-group">
                <li className="list-group-item">
                    <i className="glyphicon glyphicon-home"></i> {data.place.title}
                </li>
                <li className="list-group-item">
                    <i className="glyphicon glyphicon-star"></i> Тип: {helper.type(data.place.type)}
                </li>
                <li className="list-group-item">
                    <i className="glyphicon glyphicon-send"></i> Дистанция: {data.place.distance} м.
                </li>
                <li className="list-group-item">
                    <i className="glyphicon glyphicon-shopping-cart"></i> Удобства: <i className={data.place.toilet==true ? "glyphicon glyphicon-ok" : "glyphicon glyphicon-remove"}></i>
                </li>
                <li className="list-group-item">
                    <i className="glyphicon glyphicon-equalizer"></i> Душ: <i className={data.place.dush==true ? "glyphicon glyphicon-ok" : " glyphicon glyphicon-remove"}></i>
                </li>
                <li className="list-group-item">
                    <i className="glyphicon glyphicon-expand"></i> TV: <i className={data.place.tv==true ? "glyphicon glyphicon-ok" : " glyphicon glyphicon-remove"}></i>
                </li>
                <li className="list-group-item">
                    <i className="glyphicon glyphicon-folder-close"></i> Холодильник: <i className={data.place.refrigeter==true ? "glyphicon glyphicon-ok" : " glyphicon glyphicon-remove"}></i>
                </li>
                <li className="list-group-item">
                    <i className="glyphicon glyphicon-cloud"></i> Басейн: <i className={data.place.swiming==true ? "glyphicon glyphicon-ok" : " glyphicon glyphicon-remove"}></i>
                </li>
                <li className="list-group-item">
                    <i className="glyphicon glyphicon-cd"></i> Wifi: <i className={data.place.wifi==true ? "glyphicon glyphicon-ok" : " glyphicon glyphicon-remove"}></i>
                </li>
                <li className="list-group-item">
                    <i className="glyphicon glyphicon-apple"></i> Кухня:  <i className={data.place.eat==true ? "glyphicon glyphicon-ok" : " glyphicon glyphicon-remove"}></i>
                </li>
                <li className="list-group-item">
                    <i className="glyphicon glyphicon-phone-alt"></i> Контакты: <span> {data.place.phone}</span>
                </li>
                <li className="list-group-item">
                    <i className="glyphicon glyphicon-map-marker"></i> Адрес: <span> {data.place.address}</span>
                </li>
                <li className="list-group-item">
                    <i className="glyphicon glyphicon-hand-right"></i>   <Link to={'/guides/'+data.place.id}>Путеводитель для {data.place.title}</Link>
                </li>
            </ul>
        )
    }
}
function mapStateToProps (state) {
    return {
        store: store,
    }
}

module.exports = connect(mapStateToProps)(SmallInformationBoard);