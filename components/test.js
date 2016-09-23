/**
 * Created by semianchuk on 07.04.16.
 */
var React = require('react');
var Link = require('react-router').Link

var test = React.createClass({
    render() {
    return (
        <ul>
            <li>test</li>
            <li><Link to="/">home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/test">test</Link></li>
            <li><Link to="/place/1">place</Link></li>
        </ul>
        );
}
});

module.exports = test;