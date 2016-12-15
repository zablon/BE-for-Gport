/**
 * Created by semianchuk on 24.04.16.
 */

import React, { Component } from 'react'
import FotoFolder from './../Place/FotoFolder'

export default class PriceTable extends Component {

    constructor(props) {
        super(props);

    }
    componentDidMount() {
        $("a.fancyimage").fancybox();
    }
    handleClick(event){
        this.props.onChangeData(event);
    }
    render() {

        let { Rooms } = this.props.place;

        return (
            <div>
                {
                    !Rooms ?
                        <p>Загрузка...</p>
                        :
                    Rooms.map((data, index) =>
                        <div className="col-md-12 main-block">
                            <div className="col-md-12"><span>{data.title}</span></div>
                            <div className="col-md-12 price-table-block">
                                <div className="col-md-2"></div>
                                <div className="col-md-4" >
                                    <table className="table price-table table-bordered table-striped" onClick={this.handleClick.bind(this)} data-id={data.type}>
                                        <thead>
                                            <tr>
                                                <th>Месяц</th>
                                                <th>Цена</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                        {
                                            !data.Prices ?
                                                <p>Загрузка...</p>
                                                :
                                                data.Prices.map((data, index) =>
                                                    <tr key={index}>
                                                        <td>{data.mounth}</td>
                                                        <td>{data.price}грн</td>
                                                    </tr>
                                                )
                                        }
                                        </tbody>
                                    </table>
                                </div>
                                <div className="col-md-4">
                                    <table className="table price-table table-bordered table-striped" onClick={this.handleClick.bind(this)} data-id={data.type}>
                                        <tbody>
                                            <tr>
                                                <td><i className="glyphicon glyphicon-globe"></i> Кондиционер</td>
                                                <td><i className={data.conditioner==true ? "glyphicon glyphicon-ok" : "glyphicon glyphicon-remove"}></i></td>
                                            </tr>
                                            <tr>
                                                <td><i className="glyphicon glyphicon-equalizer"></i> Душ в номере</td>
                                                <td><i className={data.dush==true ? "glyphicon glyphicon-ok" : "glyphicon glyphicon-remove"}></i></td>
                                            </tr>
                                            <tr>
                                                <td><i className="glyphicon glyphicon-shopping-cart"></i> Удобства в номере</td>
                                                <td><i className={data.toilet==true ? "glyphicon glyphicon-ok" : "glyphicon glyphicon-remove"}></i></td>
                                            </tr>
                                            <tr>
                                                <td><i className="glyphicon glyphicon-folder-close"></i> Телевизор</td>
                                                <td><i className={data.tv==true ? "glyphicon glyphicon-ok" : "glyphicon glyphicon-remove"}></i></td>
                                            </tr>
                                            <tr>
                                                <td><i className="glyphicon glyphicon-cd"></i> WIFI</td>
                                                <td><i className={data.wifi==true ? "glyphicon glyphicon-ok" : "glyphicon glyphicon-remove"}></i></td>
                                            </tr>
                                            <tr>
                                                <td><i className="glyphicon glyphicon-folder-close"></i> Холодильник</td>
                                                <td><i className={data.refrigeter==true ? "glyphicon glyphicon-ok" : "glyphicon glyphicon-remove"}></i></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className="col-md-2"></div>
                                <div className="col-md-12">
                                    <FotoFolder data={data} type="room" id={data.id}></FotoFolder>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        );
    }
};
