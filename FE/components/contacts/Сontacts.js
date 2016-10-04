/**
 * Created by semianchuk on 28.05.16.
 */


var React = require('react');
var config = require('./../config');
var MainNav = require('../main/MainNav');
var Link = require('react-router').Link;
var helper = require('../helper');

var Contacts = React.createClass({
    getInitialState(){
    return {
    }
},
componentDidMount(){
    VK.Widgets.Group("vk_groups", {mode: 0, width: "275", height: "400"}, 14959699);
},
render() {
    return (
        <div>
            <div className="col-md-12">
                <MainNav type="" typeFilter=""></MainNav>
            </div>
            <div className="col-md-12">
                <div className="col-md-8 text-left">
                    <h3 className="text-center"> Контакты </h3>
                    <p>Мы предлагаем вам сайт который станет хорошим помошником в поиске жилья.
                    Сайт находится на стадии разработки с каждным днем мы будем его делать все лучше и лучше для Вас.</p>
                    <p>Предложения и пожелания по сайту пишите на почту <a href="mailto:fix20152@gmail.com">fix20152@gmail.com</a></p>
                    <p>Developer - <a href="https://vk.com/semenchuka">https://vk.com/semenchuka</a></p>
                    <p>VK group - <a href="https://vk.com/gport">https://vk.com/gport</a></p>
                    <hr/>
                    <img src="site-images/site-screen.png"/>
                </div>
                <div className="col-md-4">
                    <div id="vk_groups"></div>
                    <span className="myName"><h4>По вопросам сотрудничества обращайтесь по телефону +380507612588</h4></span>
                </div>
            </div>
            <div className="col-md-12">

            </div>

        </div>
        );
}
});

module.exports = Contacts;