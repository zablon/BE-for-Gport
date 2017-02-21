/**
 * Created by semianchuk on 22.05.16.
 */

var React = require('react');
var config = require('./../config');

var Steps = React.createClass({
    getInitialState(){
        return {

        }
    },
    componentDidMount(){

    },

    render() {
    var steps;
        if(typeof this.props.step.steps != 'undefined'){
            steps = this.props.step.steps
                .map(function(data){
                    return <li className='list-group-item'><span className="badge">{data.distance.text}</span><div dangerouslySetInnerHTML={{__html: data.instructions}}></div></li>
                })
        }
        return (
            <ul className="list-group">
                {steps}
            </ul>
            );
    }
});

module.exports = Steps;