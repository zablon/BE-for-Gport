/**
 * Created by semianchuk on 01.06.16.
 */
import React, { Component } from 'react'
var Config = require('../config')
var url ='login';

export default class Auth extends Component {
    login(){
        url = 'auth/login'
        this.sendAuth();
    }
    signup(){
        url = 'auth/signup'
        this.sendAuth();
    }
    FB(){
        url = 'auth/facebook'
        this.sendAuth();
    }
    twitter(){
        url = 'auth/twitter'
        this.sendAuth();
    }
    google(){
        url = 'auth/google'
        this.sendAuth();
    }
    vk(){
        url = 'auth/vk'
        this.sendAuth();
    }
    odnoklassniki(){
        url = 'auth/odnoklassniki'
        this.sendAuth();
    }
    sendAuth(){
        console.log('send request', url)
        window.location.href = Config.domain + url
    }
    render() {
        var commentsObj;
        return (
            <div className="auth-block">
                <div onClick={this.vk} className="btn btn-primary btn-vk"><span className="fa fa-vk"></span> </div>
                <div onClick={this.FB} className="btn btn-primary"><span className="fa fa-facebook"></span> </div>
                <div onClick={this.google} className="btn btn-danger"><span className="fa fa-google-plus"></span> </div>
            </div>
        );
    }
}

/*
 <div onClick={this.twitter} className="btn btn-info"><span className="fa fa-twitter"></span> </div>
 <div onClick={this.odnoklassniki} className="btn btn-warning"><span className="fa fa-odnoklassniki"></span> </div>
 <div onClick={this.login} className="btn btn-default"><span className="fa fa-user"></span> Local Login</div>
 <div onClick={this.signup} className="btn btn-default"><span className="fa fa-user"></span> Local Signup</div>
 */