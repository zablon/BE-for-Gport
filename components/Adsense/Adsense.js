/**
 * Created by semianchuk on 04.06.16.
 */

var React = require('react');
var config = require('./../config');
var helper = require('../helper');

var Adsense = React.createClass({
    getInitialState(){
    return {
    }
},
componentDidMount(){
    (adsbygoogle = window.adsbygoogle || []).push({});
},
render() {
    var style = {display: "block", height:100}
    return (
        <div>
            <ins
            className="adsbygoogle"
            style={style}
            data-ad-client="ca-pub-5661207093403381"
            data-ad-slot="7250315357"
            />
        </div>
        );
}});

module.exports = Adsense;