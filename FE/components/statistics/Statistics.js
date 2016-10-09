/**
 * Created by semianchuk on 09.10.16.
 */

var config = require('./../config');
var helper = require('../helper');
import React, { Component } from 'react'
import { connect } from 'react-redux'
import store from "../../store"
import Social from "../social/Social"
import rd3 from 'react-d3';

class Statistics extends Component {

    constructor(props) {
        super(props);
    }
    render() {
        var privateHouse = {label: 'Private house', value: 0},
            hotel        = {label: 'Hotel', value: 0},
            pansionat    = {label: 'Pansionat', value: 0},
            recreation   = {label: 'Recreation', value: 0};

        restaurants.map(function (data,index) {
            switch (data.type){
                case 'chast':
                    privateHouse.value += 1;
                    break;
                case 'hotel':
                    hotel.value += 1;
                    break;
                case 'pansionat':
                    pansionat.value += 1;
                    break;
                case 'basi':
                    recreation.value += 1;
                    break;
                default :

            }
        })
        var pieData = [
                privateHouse,
                hotel,
                pansionat,
                recreation
            ],
            PieChart = rd3.PieChart,
            Treemap = rd3.Treemap;
        return (
            <div>
                <div className="col-md-12 header-img">
                    <Social></Social>
                    <img className="main-img" src="/site-images/header-img.jpg"/>
                </div>
                <div className="col-md-12 statistic-block">
                    Statistics on D3
                    <PieChart
                        data={pieData}
                        width={400}
                        height={400}
                        radius={100}
                        innerRadius={20}
                        sectorBorderColor="white"
                        title="Pie Chart"
                    />
                    <hr/>
                    <Treemap
                        data={pieData}
                        width={450}
                        height={250}
                        textColor="#484848"
                        fontSize="12px"
                        title="Treemap"
                        hoverAnimation={false}
                    />
                </div>
            </div>
        );
    }
};

function mapStateToProps (state) {
    return {
        state: store.getState(),
    }
}
module.exports = connect(mapStateToProps)(Statistics);