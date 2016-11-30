/**
 * Created by semianchuk on 24.04.16.
 */

import React, { Component } from 'react'
import FotoFolder from './../Place/FotoFolder'
import { connect } from 'react-redux'
import store from "../../store"

class PriceTable extends Component {

    constructor(props) {
        super(props);
        this.state = {
            num: 2,
            price:'',
            type: '',
            title: '',
            fotoFolder:'',
            properties:{
                "conditioner": true,
                "dush": true,
                "toilet": true,
                "tv": true,
                "wifi": true,
                "refrigeter": true,
                "swiming": true
            }
        };
    }
    componentDidMount() {
        $("a.fancyimage").fancybox();
        this.getImgFromFolder(this.props.data);
        this.state.num++
    }
    getImgFromFolder(images){
        images.typeHouse = 'room'
        this.state ={
            fotoFolder: images
        }
    }
    handleClick(event){
        this.props.onChangeData(event);
    }
    render() {
        var {
            title,
            conditioner,
            dush,
            toilet,
            tv,
            wifi,
            refrigeter,
            Images,
        } = this.props.data;
        var price = this.props.data.Prices
            .map(function(data){
                return  (<tr>
                    <td>{data.mounth}</td>
                    <td>{data.price}грн</td>
                </tr>)
            })
        return (
            <div className="col-md-12 main-block">
                <div className="col-md-12"><span>{title}</span></div>
                <div className="col-md-12 price-table-block">
                    <div className="col-md-2"></div>
                    <div className="col-md-4" >
                        <table className="table price-table table-bordered table-striped" onClick={this.handleClick.bind(this)} data-id={this.state.type}>
                            <thead>
                                <tr>
                                    <th>Месяц</th>
                                    <th>Цена</th>
                                </tr>
                            </thead>
                            <tbody>
                                {price}
                            </tbody>
                        </table>
                    </div>
                    <div className="col-md-4">
                        <table className="table price-table table-bordered table-striped" onClick={this.handleClick.bind(this)} data-id={this.state.type}>
                            <tbody>
                                <tr>
                                    <td><i className="glyphicon glyphicon-globe"></i> Кондиционер</td>
                                    <td><i className={conditioner==true ? "glyphicon glyphicon-ok" : "glyphicon glyphicon-remove"}></i></td>
                                </tr>
                                <tr>
                                    <td><i className="glyphicon glyphicon-equalizer"></i> Душ в номере</td>
                                    <td><i className={dush==true ? "glyphicon glyphicon-ok" : "glyphicon glyphicon-remove"}></i></td>
                                </tr>
                                <tr>
                                    <td><i className="glyphicon glyphicon-shopping-cart"></i> Удобства в номере</td>
                                    <td><i className={toilet==true ? "glyphicon glyphicon-ok" : "glyphicon glyphicon-remove"}></i></td>
                                </tr>
                                <tr>
                                    <td><i className="glyphicon glyphicon-folder-close"></i> Телевизор</td>
                                    <td><i className={tv==true ? "glyphicon glyphicon-ok" : "glyphicon glyphicon-remove"}></i></td>
                                </tr>
                                <tr>
                                    <td><i className="glyphicon glyphicon-cd"></i> WIFI</td>
                                    <td><i className={wifi==true ? "glyphicon glyphicon-ok" : "glyphicon glyphicon-remove"}></i></td>
                                </tr>
                                <tr>
                                    <td><i className="glyphicon glyphicon-folder-close"></i> Холодильник</td>
                                    <td><i className={refrigeter==true ? "glyphicon glyphicon-ok" : "glyphicon glyphicon-remove"}></i></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="col-md-2"></div>
                    <div className="col-md-12">
                        <FotoFolder data={this.props.data}></FotoFolder>
                    </div>
                </div>
            </div>
        );
    }
};
function mapStateToProps (state) {
    const { user, tweets, filter } = state.reducer;
    return {
        store: store,
        filter: filter
    }
}

module.exports = connect(mapStateToProps)(PriceTable);
