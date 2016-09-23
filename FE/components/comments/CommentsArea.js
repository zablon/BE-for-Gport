/**
 * Created by semianchuk on 01.06.16.
 */

var React = require('react');
var config = require('./../config');
var helper = require('../helper');
var comments;
var CommentsArea = React.createClass({
    getInitialState(){
    return {
    }
},
componentDidMount(){

},
render() {
    var data = this.props.comment
    return (
        <div className="row">
            <div className="col-sm-1">
                <div className="thumbnail">
                    <img className="img-responsive user-photo" src="https://ssl.gstatic.com/accounts/ui/avatar_2x.png" />
                </div>
            </div>
            <div className="col-sm-11">
                <div className="panel panel-default">
                    <div className="panel-heading">
                        <strong> {data.username}</strong> <span className="text-muted"> {data.dateCreated}</span>
                    </div>
                    <div className="panel-body">
                         {data.message}
                    </div>
                </div>
            </div>
        </div>
        );
}
});

module.exports = CommentsArea;