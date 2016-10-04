/**
 * Created by semianchuk on 01.06.16.
 */
var config = require('./../config');
var helper = require('../helper');
var CommentsArea = require('./CommentsArea');
import React, { Component } from 'react'
import { connect } from 'react-redux'
import store from "../../store"
import ReactDOM from "react-dom"
import io from 'socket.io-client'
import Notifier from "react-desktop-notification"

class Comments extends Component {

    constructor(props) {
        super(props);
        this.state = { commentsObj : '', userData:false, showComment: true}
    }
    componentDidMount () {
        var self = this;
        this.socket = io('/')
        this.socket.on('user', data => {
            Notifier.start("Title", data.text, config.domain, config.domain+"images/icon/logo.jpeg");
        })
        this.socket.on('comment', message => {
            Notifier.start(data.title, message.body.name +' добавил новый комментарий - ' +message.body.data, config.domain, config.domain+"images/icon/logo.jpeg");
            if(message.body.id == self.props.placeId){
                self.getData(self);
            }
        })
    }
    componentWillReceiveProps(){
        this.getData(this);
        this.userData(this);
    }
    send(e){
        e.preventDefault();
        var data = {
            name         : this.props.user.type!='guest' ? this.props.user.name :  ReactDOM.findDOMNode(this.refs.name).value,
            email        : this.props.user.type!='guest' && this.props.user.email ? this.props.user.email : ReactDOM.findDOMNode(this.refs.email).value,
            placeid      : this.props.placeId,
            userid       : this.props.user.type!='guest' ? this.props.user.id : null,
            type         : this.props.user.type!='guest' ? this.props.user.type : null,
            data         : this.refs.message.getDOMNode().value,
        }
        ReactDOM.findDOMNode(this.refs.message).value = ''
        this.ajaxSend(data)
    }
    ajaxSend(data){
        var url =  config.domain + 'comments/add',
            self=this;

        $.ajax({
            type: "POST",
            url: url,
            dataType: "json",
            data: data,
            success: function (obj) {
                if(obj.status == 'success'){
                    self.socket.emit('comment', {id: data.placeid, userid: data.userid, data: data.data, name: data.name})
                    self.getData(self);
                }else{
                    console.log(obj.errors)
                }
            }
        })
    }
    getData(){
        var data = {'placeid' : this.props.placeId},
            url  = config.domain + 'comments/getbyplaceid',
            self = this;
        $.ajax({
            type: "POST",
            url: url,
            dataType: "json",
            data: data,
            success: function (obj) {
                if(obj.status=='success'){
                    var commentsObj = obj.message.map(function(data, index){
                        return  <CommentsArea remove={self.remove.bind(self, data)} key={index} comment={data} placeId={self.props.placeId} id={data._id} user={self.props.user}></CommentsArea>
                    })
                    self.setState({commentsObj: commentsObj})
                }else{
                    console.log(obj.errors)
                }
            }
        })
    }
    enter(e){
        if(e.keyCode == 13) {
            this.send(e)
        }
    }
    remove(data){
        var data = {data: data},
            url = config.domain + 'comments/remove',
            self=this;
        $.ajax({
            type: "POST",
            url: url,
            dataType: "json",
            data: data,
            success: function (obj) {
                if(obj.status == 'success'){
                    self.getData(self);
                }else{
                    console.log(obj.errors)
                }
            }
        })
    }
    userData(){
        this.props.user.type!='guest' && this.props.user.type ? (this.refs.name.getDOMNode().value = this.props.user.name,
                                         this.refs.email.getDOMNode().value = this.props.user.email,
                                         this.setState({userData:false}))
                                       : this.setState({userData:true})
    }
    showComments() {
        this.setState({hover: true});
    }
    hideComments() {
        this.setState({hover: false});
    }
    render() {
        if(this.state.hover==true){
            this.state.toogle = 'comments-block-open'
        }else{
            this.state.toogle = 'comments-block-close'
        }
        return (
            <div>
                <div className="form-horizontal" role="form">
                    <div className={this.state.userData ? 'show-block' : 'hide-block'}>
                        <div className="form-group ">
                            <label for="email" className="col-sm-2 control-label">ФИО</label>
                            <div className="col-sm-10">
                                <input type="text" className="form-control" id="email" ref="name" placeholder="Name"/>
                            </div>
                        </div>
                        <div className="form-group">
                            <label for="email" className="col-sm-2 control-label">Email</label>
                            <div className="col-sm-10">
                                <input type="email" className="form-control" id="email" name="email" ref="email" placeholder="example@domain.com"/>
                            </div>
                        </div>
                    </div>
                    <div className="form-group">
                        <label for="email" className="col-sm-2 control-label">Сообщения</label>
                        <div className="col-sm-10">
                            <textarea className="form-control" id="message" name="message" ref="message" onKeyDown={this.enter.bind(this)}  placeholder="Message"></textarea>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-sm-10 col-sm-offset-2 text-right">
                            <input id="submit" name="submit" type="submit" value="Отправить" onClick={ this.send.bind(this) } className="btn btn-primary" />
                        </div>
                    </div>
                </div>
                <div className="comment-block" onClick={this.showComments.bind(this)}>
                    <div className={this.state.toogle}>
                        {this.state.commentsObj}
                    </div>
                    <div className={this.state.commentsObj.length>0 ? "comment-block-show-full" : "hide-block comment-block-show-full" }   >
                        <span >Показать полностью ...</span>
                    </div>
                </div>
            </div>
        );
    }
};

function mapStateToProps (state) {
    const { user } = state.reducer;
    return {
        state: store.getState(),
        store: store,
        user: user,
    }
}

module.exports = connect(mapStateToProps)(Comments);