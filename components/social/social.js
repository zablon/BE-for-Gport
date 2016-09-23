/**
 * Created by semianchuk on 28.05.16.
 */


var React = require('react');
var config = require('./../config');
var helper = require('../helper');

var social = React.createClass({
    getInitialState(){

    return {
    }
},
componentDidMount(){
},
render() {
    console.log(helper)
    var socialButton = helper.socialButton
        .map(function(data){
            return  <li><a target="_blank" href={data.link}><img src={data.url}/></a></li>
        })
    return (
        <div>
            <ul className="list-inline social-button">
            {socialButton}
            </ul>
        </div>
        );
}
});

module.exports = social;