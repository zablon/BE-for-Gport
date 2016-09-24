import React, { Component } from 'react'
import helper from './helper'
import { setFilterType } from "../actions/filterActions"
import { connect } from 'react-redux'
import store from "../store"

class SearchComponent extends Component {

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
          this.props.store.dispatch(setFilterToiler(e.currentTarget.value));
      }
      onTvChanged(e) {
          this.props.store.dispatch(setFilterTv(e.currentTarget.value));

      }
      onRefrigeterChanged(e) {
          this.props.store.dispatch(setFilterRefrigeter(e.currentTarget.value));
      }
      onConditionerChanged(e) {
          this.props.store.dispatch(setFilterConditioner(e.currentTarget.value));
      }
      onWifiChanged(e) {
          this.props.store.dispatch(setFilterWifi(e.currentTarget.value));
      }
      onEatChanged(e) {
          this.props.store.dispatch(setFilterEat(e.currentTarget.value));
      }
      onChildrenChanged(e) {
          this.props.store.dispatch(setFilterChildren(e.currentTarget.value));
      }
      onSwimingChanged(e) {
          this.props.store.dispatch(setFilterSwiming(e.currentTarget.value));
      }
      componentDidMount(){
        var self=this;
        this.setState({
            type: self.props.type
        })
      }
	  render() {
        var self=this;
		var params = this.state;
        var type = helper.filterData.type.map(function(res){
            return   <option selected = {self.props.type==res} value={res}>{helper.type(res)}</option>
        })
        var distance = helper.filterData.distance.map(function(res){
            return   <option value={res}>{res}</option>
        })
		return (
            <div className="col-md-12">
                <div className="col-md-12">
                    <div className="col-md-4">
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
                    <div className="col-md-2">
                        <ul className="list-unstyled text-center">
                            <li><strong>Wi-fi</strong></li>
                            <li>
                                <label className="btn btn-default">
                                    <input type="radio"
                                        value="true"
                                        checked={this.state.wifi}
                                        onChange={this.onWifiChanged}/>
                                </label>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-2">
                        <ul className="list-unstyled text-center">
                            <li><strong>Туалет</strong></li>
                            <li>
                                <label className="btn btn-default">
                                    <input type="radio"
                                        value="true"
                                        checked={this.state.toilet}
                                        onChange={this.onToiletChanged}/>
                                </label>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-2">
                        <ul className="list-unstyled text-center">
                            <li><strong>Телевизор</strong></li>
                            <li>
                                <label className="btn btn-default">
                                    <input type="radio"
                                        value="true"
                                        checked={this.state.tv}
                                        onChange={this.onTvChanged}/>
                                </label>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-2">
                        <ul className="list-unstyled text-center">
                            <li><strong>Холодильник</strong></li>
                            <li>
                                <label className="btn btn-default">
                                    <input type="radio"
                                        value="true"
                                        checked={this.state.refrigeter}
                                        onChange={this.onRefrigeterChanged}/>
                                </label>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col-md-12">
                    <div className="col-md-4">
                        <ul className="list-unstyled">
                            <li className="text-center"><strong>Дистанция</strong></li>
                            <li>
                                <select className="form-control"  onChange={this.onDistanceChanged} >
                                    <option selected = "true" value=""></option>
                                    {distance}
                                </select>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-2">
                        <ul className="list-unstyled text-center">
                            <li><strong>Кондиционер</strong></li>
                            <li>
                                <label className="btn btn-default">
                                    <input type="radio"
                                        value="true"
                                        checked={this.state.conditioner}
                                        onChange={this.onConditionerChanged}/>
                                </label>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-2">
                        <ul className="list-unstyled text-center">
                            <li><strong>Питания</strong></li>
                            <li>
                                <label className="btn btn-default">
                                    <input type="radio"
                                        value="true"
                                        checked={this.state.eat}
                                        onChange={this.onEatChanged}/>
                                </label>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-2">
                        <ul className="list-unstyled text-center">
                            <li><strong>Детские пл.</strong></li>
                            <li>
                                <label className="btn btn-default">
                                    <input type="radio"
                                        value="true"
                                        checked={this.state.children}
                                        onChange={this.onChildrenChanged}/>
                                </label>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-2">
                        <ul className="list-unstyled text-center">
                            <li><strong>Бассейн</strong></li>
                            <li>
                                <label className="btn btn-default">
                                    <input type="radio"
                                        value="true"
                                        checked={this.state.swiming}
                                        onChange={this.onSwimingChanged}/>
                                </label>
                            </li>
                        </ul>
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
        user: user,
        tweets: tweets,
        filter: filter
    }
}

module.exports = connect(mapStateToProps)(SearchComponent);