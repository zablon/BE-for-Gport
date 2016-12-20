/**
 * Created by semianchuk on 08.05.16.
 */
var helper = require('./../helper');
var Link = require('react-router').Link;
import React, { Component } from 'react'

export default class MainNav extends Component {

    handleSubmit(){
        var self = this;
        setTimeout(function(){
            self.props.typeFilter(self.props.type);
        },100)
    }

    render() {
        var routeType= this.props.type,
            NavBar = helper.filterData.type
            .map(function(data,index){
                let active = '';
                if(data==routeType){ active = "active"}
                if(index<4){
                    return <li className={active}>
                                <Link to={'/'+ data}>
                                   {helper.type(data)}
                                </Link>
                            </li>
                };
            })
            return (<div>
                        <ul className="nav nav-pills"  onClick={this.handleSubmit}>
                            <li className='active'><a href="/">Главная</a></li>
                                {NavBar}
                            <li>
                                <Link to={'/infrastructure/gport'}>
                                    Инфраструктура
                                </Link>
                            </li>
                            <li>
                                <Link to={'/map/list'}>
                                    Карта
                                </Link>
                            </li>
                            <li>
                                <Link to={'/contact/us'}>
                                    Контакты
                                </Link>
                            </li>
                        </ul>
                    </div>
                );
    }
}