import React, { Component } from 'react'
import helper from '../helper'
import { setFilterType, setFilterDistance, setFilterToiler, setFilterTv, setFilterRefrigeter ,setFilterConditioner, setFilterWifi, setFilterEat, setFilterChildren, setFilterSwiming } from "../../actions/filterActions"


export default class SearchComponent extends Component {

    constructor(props) {
        super(props);
        this.state = this.props.filter
      }
      onTypeChanged(e) {
          this.props.store.dispatch(setFilterType(e.currentTarget.value));
      }
      onDistanceChanged(e) {
          this.props.store.dispatch(setFilterDistance(e.currentTarget.value));

      }
      onToiletChanged(e) {
          this.props.store.dispatch(setFilterToiler(parseBoolean(e.currentTarget.value)));
      }
      onTvChanged(e) {
          this.props.store.dispatch(setFilterTv(parseBoolean(e.currentTarget.value)));

      }
      onRefrigeterChanged(e) {
          this.props.store.dispatch(setFilterRefrigeter(parseBoolean(e.currentTarget.value)));
      }
      onConditionerChanged(e) {
          this.props.store.dispatch(setFilterConditioner(parseBoolean(e.currentTarget.value)));
      }
      onWifiChanged(e) {
          this.props.store.dispatch(setFilterWifi(parseBoolean(e.currentTarget.value)));
      }
      onEatChanged(e) {
          this.props.store.dispatch(setFilterEat(parseBoolean(e.currentTarget.value)));
      }
      onChildrenChanged(e) {
          this.props.store.dispatch(setFilterChildren(parseBoolean(e.currentTarget.value)));
      }
      onSwimingChanged(e) {
          this.props.store.dispatch(setFilterSwiming(parseBoolean(e.currentTarget.value)));
      }
      componentDidMount(){
        var self=this;
        this.setState({
            type: self.props.type
        })
      }
	  render() {
        var self=this,
            type = helper.filterData.type.map(function(res){
                return   <option selected = {self.props.type==res} value={res}>{helper.type(res)}</option>
            }),
            distance = helper.filterData.distance.map(function(res){
                return   <option value={res}>{res}</option>
            })
		return (
            <div className="col-md-12">
                <div className="col-md-12">
                    <div className="col-md-12">
                        <ul className="list-unstyled">
                            <li className="text-center"><strong>Тип</strong></li>
                            <li>
                                <select className="form-control"  onChange={this.onTypeChanged.bind(this)} >
                                    <option selected = "true" value=""></option>
                                    {type}
                                </select>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-12">
                        <ul className="list-unstyled">
                            <li className="text-center"><strong>Дистанция</strong></li>
                            <li>
                                <select className="form-control"  onChange={this.onDistanceChanged.bind(this)} >
                                    <option selected = "true" value=""></option>
                                    {distance}
                                </select>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-4">
                        <ul className="list-unstyled text-center">
                            <li><strong>Туалет</strong></li>
                            <li>
                                <label className="btn btn-default">
                                    <input type="radio"
                                        value="true"
                                        checked={this.props.filter.toilet}
                                        onChange={this.onToiletChanged.bind(this)}/>
                                </label>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-4">
                        <ul className="list-unstyled text-center">
                            <li><strong>Телевизор</strong></li>
                            <li>
                                <label className="btn btn-default">
                                    <input type="radio"
                                        value="true"
                                        checked={this.props.filter.tv}
                                        onChange={this.onTvChanged.bind(this)}/>
                                </label>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-4">
                        <ul className="list-unstyled text-center">
                            <li><strong>Холодильник</strong></li>
                            <li>
                                <label className="btn btn-default">
                                    <input type="radio"
                                        value="true"
                                        checked={this.props.filter.refrigeter}
                                        onChange={this.onRefrigeterChanged.bind(this)}/>
                                </label>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col-md-12">
                    <div className="col-md-4">
                        <ul className="list-unstyled text-center">
                            <li><strong>Wi-fi</strong></li>
                            <li>
                                <label className="btn btn-default">
                                    <input type="radio"
                                           value="true"
                                           checked={this.props.filter.wifi}
                                           onChange={this.onWifiChanged.bind(this)}/>
                                </label>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-4">
                        <ul className="list-unstyled text-center">
                            <li><strong>Кондиционер</strong></li>
                            <li>
                                <label className="btn btn-default">
                                    <input type="radio"
                                        value="true"
                                        checked={this.props.filter.conditioner}
                                        onChange={this.onConditionerChanged.bind(this)}/>
                                </label>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-4">
                        <ul className="list-unstyled text-center">
                            <li><strong>Питания</strong></li>
                            <li>
                                <label className="btn btn-default">
                                    <input type="radio"
                                        value="true"
                                        checked={this.props.filter.eat}
                                        onChange={this.onEatChanged.bind(this)}/>
                                </label>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-6">
                        <ul className="list-unstyled text-center">
                            <li><strong>Детские пл.</strong></li>
                            <li>
                                <label className="btn btn-default">
                                    <input type="radio"
                                        value="true"
                                        checked={this.props.filter.children}
                                        onChange={this.onChildrenChanged.bind(this)}/>
                                </label>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-6">
                        <ul className="list-unstyled text-center">
                            <li><strong>Бассейн</strong></li>
                            <li>
                                <label className="btn btn-default">
                                    <input type="radio"
                                        value="true"
                                        checked={this.props.filter.swiming}
                                        onChange={this.onSwimingChanged.bind(this)}/>
                                </label>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
		);
	}
};