/**
 * Created by semianchuk on 01.06.16.
 */

import React, { Component } from 'react'
import Timestamp from 'react-timestamp';

class CommentsArea extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        var data = this.props.comment,
            img  = this.props.comment.user ?  this.props.comment.user.photos : "https://ssl.gstatic.com/accounts/ui/avatar_2x.png",
            editPermission = ((this.props.comment.user && this.props.comment.user.id == this.props.user.id) ? true : false);
        return (
            <div className="row">
                <div className="col-sm-1">
                    <div className="thumbnail">
                        <img className="img-responsive user-photo" src={img} />
                    </div>
                </div>
                <div className="col-sm-11">
                    <div className="panel panel-default">
                        <div className="panel-heading">
                            <strong>{data.name}</strong> <span className="text-muted"> <Timestamp time={data.dateCreated} format='full' /></span>
                            <i onClick={this.props.remove} className={editPermission ? 'fa fa-times comment-remove show-block' : 'fa fa-times comment-remove hide-block'}
                               aria-hidden="true"></i>
                        </div>
                        <div className="panel-body">
                             {data.data}
                        </div>
                    </div>
                </div>
            </div>
            );
    }
};

module.exports = CommentsArea;