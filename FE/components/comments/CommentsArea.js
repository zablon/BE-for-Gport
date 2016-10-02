/**
 * Created by semianchuk on 01.06.16.
 */

import React, { Component } from 'react'

class CommentsArea extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        var data = this.props.comment,
            img = this.props.comment.userid ?  "https://ssl.gstatic.com/accounts/ui/avatar_2x.png" : "https://ssl.gstatic.com/accounts/ui/avatar_2x.png"
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
                            <strong> {data.name}</strong> <span className="text-muted"> {data.dateCreated}</span>
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