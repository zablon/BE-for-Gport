/**
 * Created by semianchuk on 01.06.16.
 */
var config = require('./../config');
var helper = require('../helper');
var CommentsArea = require('./CommentsArea');
import React, { Component } from 'react'
import { connect } from 'react-redux'
import store from "../../store"

class Comments extends Component {

    constructor(props) {
        super(props);
        this.state = { commentsObj : ''}
    }
    componentDidMount(){
        this.getData();
    }
    send(e){
        e.preventDefault();

        var data = {
            username     : this.refs.username.getDOMNode().value,
            email : this.refs.email.getDOMNode().value,
            message    : this.refs.message.getDOMNode().value,
            'zport.id' : this.props.placeId,
            create : 'Create',
            controller : 'comments',
            format : null,
            action:'save'
        }
        this.refs.username.getDOMNode().value = ''
        this.refs.email.getDOMNode().value = ''
        this.refs.message.getDOMNode().value = ''
        this.ajaxSend(data)
    }
    ajaxSend(data){
        var url = 'http://localhost:8080/comments/send?format=json',
            self=this;

        $.ajax({
            type: "POST",
            url: url,
            dataType: "json",
            data: data,
            success: function (obj) {
                if(obj.status == 'success'){
                    self.getData();
                }
            }
        })
    }
    getData(){
        var data = {
            'zport.id' : this.props.placeId,
            'max' : 100
        }
        this.ajaxGetData(data)
    }
    ajaxGetData(data){
        var url = 'http://localhost:8080/comments/get',
            self=this;
        $.ajax({
            type: "POST",
            url: url,
            dataType: "json",
            data: data,
            success: function (obj) {
                if(typeof obj == 'object'){
                    commentsObj = obj.map(function(data){
                        return  <CommentsArea comment={data} placeId={self.props.placeId}></CommentsArea>
                    })
                    self.setState({
                        commentsObj: commentsObj
                    })
                }
            }
        })
    }
    render() {
        var commentsObj;
        return (
            <div>
                <div className="form-horizontal" role="form">
                    <div className="form-group">
                        <label for="email" className="col-sm-2 control-label">ФИО</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="email" ref="username" placeholder="Name"/>
                        </div>
                    </div>
                    <div className="form-group">
                        <label for="email" className="col-sm-2 control-label">Email</label>
                        <div className="col-sm-10">
                            <input type="email" className="form-control" id="email" name="email" ref="email" placeholder="example@domain.com"/>
                        </div>
                    </div>
                    <div className="form-group">
                        <label for="email" className="col-sm-2 control-label">Сообщения</label>
                        <div className="col-sm-10">
                            <textarea className="form-control" id="message" name="message" ref="message" placeholder="Message"></textarea>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-sm-10 col-sm-offset-2 text-right">
                            <input id="submit" name="submit" type="submit" value="Отправить" onClick={ this.send } className="btn btn-primary" />
                        </div>
                    </div>
                </div>
                    {this.state.commentsObj}
            </div>
        );
    }
};

module.exports = Comments;