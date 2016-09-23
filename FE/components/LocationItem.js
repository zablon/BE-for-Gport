var React = require('react');
var moment = require('moment');
var Link = require('react-router').Link;
var helper = require('./helper');

var LocationItem = React.createClass({

    getInitialState: function () {
        return {hover: false};
    },

    mouseOver: function () {
        this.setState({hover: true});
    },

    mouseOut: function () {
        this.setState({hover: false});
    },

	handleClick(){
		this.props.onClick(this.props.data);
	},

	render(){

		var cn = "list-group-item";

		if(this.props.active){
			cn += " active-location";
		}
        if(this.state.hover==true){
            this.state.toogle = 'location-block-open'
        }else{
            this.state.toogle = 'location-block-close'
        }
		return (
            <div>
                <Link to={'/place/'+this.props.data.id} className="location-title">
                    <h4 className="location-title">{this.props.data.title}</h4>
                </Link>
                <a className={cn} onClick={this.handleClick} onMouseOver={this.mouseOver} onMouseOut={this.mouseOut}>
                    <div class="raw" className="location-block">
                        <div className={this.state.toogle} >
                            <ul class="list-group">
                                <li className="list-group-item">
                                    <i className="glyphicon glyphicon-home"></i> {this.props.data.title}
                                </li><li className="list-group-item">
                                <i className="glyphicon glyphicon-star"></i> Тип: {helper.type(this.props.data.type)}
                                </li>
                                <li className="list-group-item">
                                    <i className="glyphicon glyphicon-send"></i> Дистанция: {this.props.data.distance} м.
                                </li>
                                <li className="list-group-item">
                                    <i className="glyphicon glyphicon-shopping-cart"></i> Удобства: <i className={this.props.data.toilet==true ? "glyphicon glyphicon-ok" : " glyphicon glyphicon-remove"}></i>
                                </li>
                                <li className="list-group-item">
                                    <i className="glyphicon glyphicon-equalizer"></i> Душ:  <i className={this.props.data.dush==true ? "glyphicon glyphicon-ok" : " glyphicon glyphicon-remove"}></i>
                                </li>
                                <li className="list-group-item">
                                    <i className="glyphicon glyphicon-expand"></i> TV:  <i className={this.props.data.tv==true ? "glyphicon glyphicon-ok" : " glyphicon glyphicon-remove"}></i>
                                </li>
                                <li className="list-group-item">
                                    <i className="glyphicon glyphicon-folder-close"></i> Холодильник: <i className={this.props.data.refrigeter==true ? "glyphicon glyphicon-ok" : " glyphicon glyphicon-remove"}></i>
                                </li>
                                <li className="list-group-item">
                                    <i className="glyphicon glyphicon-globe"></i> Кондиционер: <i className={this.props.data.conditioner==true ? "glyphicon glyphicon-ok" : " glyphicon glyphicon-remove"}></i>
                                </li>
                                <li className="list-group-item">
                                    <i className="glyphicon glyphicon-cd"></i> Wifi:  <i className={this.props.data.wifi==true ? "glyphicon glyphicon-ok" : " glyphicon glyphicon-remove"}></i>
                                </li>
                                <li className="list-group-item">
                                    <i className="glyphicon glyphicon-apple"></i> Питания:   <i className={this.props.data.eat==true ? "glyphicon glyphicon-ok" : " glyphicon glyphicon-remove"}></i>
                                </li>
                            </ul>
                            <span className="glyphicon glyphicon-zoom-in"></span>
                        </div>
                    </div>
                </a>
            </div>

		)
	}

});

module.exports = LocationItem;

/*

<a className={cn} onClick={this.handleClick} onMouseOver={this.mouseOver} onMouseOut={this.mouseOut}>
    <div class="raw" className="location-block">
        <div className={this.state.toogle} >

            <h4 className="location-title">{this.props.data.title} - {this.state.hover}</h4>
            <ul class="list-group">
                <li class="list-group-item">
                    <i class="glyphicon glyphicon-star"></i> Тип: {this.props.data.type}
                </li>
                <li class="list-group-item">
                    <i class="glyphicon glyphicon-star"></i> Дистанция: {this.props.data.distance} / 5
                </li>
                <li class="list-group-item">
                    <i class="glyphicon glyphicon-globe"></i> Удобства: {this.props.data.toilet}
                </li>
                <li class="list-group-item">
                    <i class="glyphicon glyphicon-globe"></i> Душ: {this.props.data.dush}
                </li>
                <li class="list-group-item">
                    <i class="glyphicon glyphicon-globe"></i> TV: {this.props.data.tv}
                </li>
                <li class="list-group-item">
                    <i class="glyphicon glyphicon-globe"></i> Холодильник: {this.props.data.refrigeter}
                </li>
                <li class="list-group-item">
                    <i class="glyphicon glyphicon-globe"></i> Кондиционер: {this.props.data.conditioner}
                </li>
                <li class="list-group-item">
                    <i class="glyphicon glyphicon-globe"></i> Wifi: {this.props.data.wifi}
                </li>
                <li class="list-group-item">
                    <i class="glyphicon glyphicon-globe"></i> Питание: {this.props.data.eat}
                </li>
            </ul>
            <span className="glyphicon glyphicon-zoom-in"></span>
        </div>
    </div>
</a>*/
