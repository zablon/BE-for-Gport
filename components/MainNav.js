/**
 * Created by semianchuk on 08.05.16.
 */
var React = require('react');
var helper = require('./helper');
var Link = require('react-router').Link;

var MainNav = React.createClass({

    getInitialState() {
        return {  };
    },
    componentDidMount() {

    },
    handleSubmit(){
        var self = this;
        setTimeout(function(){
            self.props.typeFilter(self.props.type);
        },100)
    },

    render() {
    var routeType= this.props.type,
        NavBar = helper.filterData.type
        .map(function(data,index){
            active = '';
            if(data==routeType){ active = "active"}
            if(index<5){
                return <li className={active}>
                            <Link to={'/'+ data}>
                               {helper.type(data)}
                            </Link>
                        </li>
            };
        })
/*    var NavBarDrop = helper.filterData.type
            .map(function(data,index){
                if(index>3){
                    return <li className={active}>
                                <Link to={'/'+ data.type}>
                                    {helper.type(data.type)}
                                </Link>
                            </li>
                }
        })*/
        return (<div>
                    <ul className="nav nav-pills"  onClick={this.handleSubmit}>
                        <li className='active'><a href="#">Главная</a></li>
                            {NavBar}
                        <li>
                            <Link to={'/infrastructure/gport'}>
                                Инфраструктура
                            </Link>
                        </li>
                        <li>
                            <Link to={'/contact/us'}>
                                Контакты
                            </Link>
                        </li>
                    </ul>
                </div>
            );
    }
});

module.exports = MainNav;

/*
 <li className="dropdown">
 <a className="dropdown-toggle"
 data-toggle="dropdown"
 href="#">
 Dropdown
 <b className="caret"></b>
 </a>
 <ul className="dropdown-menu">
 {NavBarDrop}
 </ul>
 </li>
 */