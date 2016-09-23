var React = require('react');
var helper = require('./helper');

var SearchComponent = React.createClass({

  getInitialState () {
    var filter ={
        type: '',
        distance: '',
        toilet: '',
        tv: '',
        refrigeter: '',
        conditioner: '',
        wifi: '',
        eat: '',
        children: '',
        swiming: '',
        parking: ''
    }
    this.props.onFilter(filter);
    return filter;
  },
  pushToFilter(){
		var filter ={
		      type: this.state.type,
		      distance: this.state.distance,
		      toilet: this.state.toilet,
		      tv: this.state.tv,
		      refrigeter: this.state.refrigeter,
		      conditioner: this.state.conditioner,
		      wifi: this.state.wifi,
		      eat: this.state.eat,
		      children: this.state.children,
              swiming: this.state.swiming,
              parking: this.state.parking
		    };
    console.log(filter)
    this.props.onFilter(filter);
  },
  onTypeChanged(e) {
	    this.setState({
			type: e.currentTarget.value
		});
        var self=this;
        setTimeout(function(){
            self.pushToFilter();
        },200)

  },
  onDistanceChanged(e) {
        this.setState({
        	distance: e.currentTarget.value
        });
        var self=this;
        setTimeout(function(){
            self.pushToFilter();
        },2000)
  },
  onToiletChanged(e) {
    var toilet = (this.state.toilet == JSON.parse(e.currentTarget.value) ? !JSON.parse(e.currentTarget.value) : JSON.parse(e.currentTarget.value) )
    this.setState({
      toilet:toilet
      });
    var self=this;
    setTimeout(function(){
        self.pushToFilter();
    },200)
  },
  onTvChanged(e) {
    var tv = (this.state.tv == JSON.parse(e.currentTarget.value) ? !JSON.parse(e.currentTarget.value) : JSON.parse(e.currentTarget.value) )
    this.setState({
      tv: tv
      });
    var self=this;
    setTimeout(function(){
        self.pushToFilter();
    },200)
  },
  onRefrigeterChanged(e) {
    var refrigeter = (this.state.refrigeter == JSON.parse(e.currentTarget.value) ? !JSON.parse(e.currentTarget.value) : JSON.parse(e.currentTarget.value) )
    this.setState({
      refrigeter: refrigeter
      });
    var self=this;
    setTimeout(function(){
        self.pushToFilter();
    },200)
  },
  onConditionerChanged(e) {
    var conditioner = (this.state.conditioner == JSON.parse(e.currentTarget.value) ? !JSON.parse(e.currentTarget.value) : JSON.parse(e.currentTarget.value) )
    this.setState({
      conditioner: conditioner
      });
    var self=this;
    setTimeout(function(){
        self.pushToFilter();
    },200)
  },
  onWifiChanged(e) {
    var wifi = (this.state.wifi == JSON.parse(e.currentTarget.value) ? !JSON.parse(e.currentTarget.value) : JSON.parse(e.currentTarget.value) )
    this.setState({
        wifi: wifi
      });
    var self=this;
    setTimeout(function(){
        self.pushToFilter();
    },200)
  },
  onEatChanged(e) {
    var eat = (this.state.eat == JSON.parse(e.currentTarget.value) ? !JSON.parse(e.currentTarget.value) : JSON.parse(e.currentTarget.value) )
    this.setState({
      eat: eat
      });
    var self=this;
    setTimeout(function(){
        self.pushToFilter();
    },200)
  },
  onChildrenChanged(e) {
    var children = (this.state.children == JSON.parse(e.currentTarget.value) ? !JSON.parse(e.currentTarget.value) : JSON.parse(e.currentTarget.value) )
    this.setState({
      children: children
      });
    var self=this;
    setTimeout(function(){
        self.pushToFilter();
    },200)
  },
  onParkingChanged(e) {
    var children = (this.state.children == JSON.parse(e.currentTarget.value) ? !JSON.parse(e.currentTarget.value) : JSON.parse(e.currentTarget.value) )
    this.setState({
      children: children
      });
    var self=this;
    setTimeout(function(){
        self.pushToFilter();
    },200)
  },
  onSwimingChanged(e) {
    var swiming = (this.state.swiming == JSON.parse(e.currentTarget.value) ? !JSON.parse(e.currentTarget.value) : JSON.parse(e.currentTarget.value) )
    this.setState({
        swiming: swiming
      });
    var self=this;
    setTimeout(function(){
        self.pushToFilter();
    },200)
  },
    componentDidMount(){
        var self=this;
        this.setState({
            type: self.props.type
        })
    },
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
                                <select className="form-control"  onChange={this.onTypeChanged} >
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
});

module.exports = SearchComponent;

/*

 var resultRows = helper.filterData.map(function(result){
 return (
 <tbody>
 <tr>
 <td>
 <label className={params.type == result.type? 'btn btn-default active' : 'btn btn-default' }>
 <input type="radio"
 name="type"
 value={result.type}
 data-methold='type'
 className={params.type == result.type? 'hide' : 'hide' }
 checked={params.type == result.type}
 onChange={this.onTypeChanged} />
 <span >{helper.type(result.type)}</span>
 </label>
 </td>
 <td>
 <label className={params.distance == result.distance? 'btn btn-default active' : 'btn btn-default' }>
 <input type="radio" name="distance"
 value={result.distance}
 className={params.distance == result.distance? 'hide' : 'hide' }
 checked={params.distance == result.distance}
 onChange={this.onDistanceChanged} />
 <span >{result.distance}</span>
 </label>
 </td>
 <td>
 <div className={typeof result.toilet === 'boolean' ? 'show' : 'hide'}>
 <label className={params.toilet == result.toilet? 'btn btn-default active' : 'btn btn-default'}>
 <input type="radio" name="toilet"
 value={result.toilet}
 checked={params.toilet == result.toilet}
 className={params.toilet == result.toilet? 'hide' : 'hide' }
 onChange={this.onToiletChanged} />
 <span><i className={result.toilet==true ? "glyphicon glyphicon-ok" : " glyphicon glyphicon-remove"}></i></span>
 </label>
 </div>
 </td>
 <td>
 <div className={typeof result.tv === 'boolean' ? 'show' : 'hide'}>
 <label className={params.tv == result.tv? 'btn btn-default active' : 'btn btn-default' }>
 <input type="radio" name="tv"
 value={result.tv}
 checked={params.tv == result.tv}
 className={result.tv ? 'hide' : 'hide' }
 onChange={this.onTvChanged} />
 <span><i className={result.tv==true ? "glyphicon glyphicon-ok" : " glyphicon glyphicon-remove"}></i></span>
 </label>
 </div>
 </td>
 <td>
 <div className={typeof result.refrigeter === 'boolean' ? 'show' : 'hide'}>
 <label className={params.refrigeter == result.refrigeter? 'btn btn-default active' : 'btn btn-default' }>
 <input type="radio" name="refrigeter"
 value={result.refrigeter}
 checked={params.refrigeter == result.refrigeter}
 className={result.refrigeter ? 'hide' : 'hide' }
 onChange={this.onRefrigeterChanged} />
 <span><i className={result.refrigeter==true ? "glyphicon glyphicon-ok" : " glyphicon glyphicon-remove"}></i></span>
 </label>
 </div>
 </td>
 <td>
 <div className={typeof result.conditioner === 'boolean' ? 'show' : 'hide'}>
 <label className={params.conditioner == result.conditioner? 'btn btn-default active' : 'btn btn-default' }>
 <input type="radio" name="conditioner"
 value={result.conditioner}
 checked={params.conditioner == result.conditioner}
 className={result.conditioner ? 'hide' : 'hide' }
 onChange={this.onConditionerChanged} />
 <span><i className={result.conditioner==true ? "glyphicon glyphicon-ok" : " glyphicon glyphicon-remove"}></i></span>
 </label>
 </div>
 </td>
 <td>
 <div className={typeof result.wifi === 'boolean' ? 'show' : 'hide'}>
 <label className={params.wifi == result.wifi? 'btn btn-default active' : 'btn btn-default' }>
 <input type="radio" name="wifi"
 value={result.wifi}
 checked={params.wifi == result.wifi}
 className={result.wifi ? 'hide' : 'hide' }
 onChange={this.onWifiChanged} />
 <span><i className={result.wifi==true ? "glyphicon glyphicon-ok" : " glyphicon glyphicon-remove"}></i></span>
 </label>
 </div>
 </td>
 <td>
 <div className={typeof result.eat === 'boolean' ? 'show' : 'hide'}>
 <label className={params.eat == result.eat? 'btn btn-default active' : 'btn btn-default' }>
 <input type="radio" name="eat"
 value={result.eat}
 checked={params.eat == result.eat}
 className={result.eat ? 'hide' : 'hide' }
 onChange={this.onEatChanged} />
 <span><i className={result.eat==true ? "glyphicon glyphicon-ok" : " glyphicon glyphicon-remove"}></i></span>
 </label>
 </div>
 </td>
 <td>
 <div className={typeof result.children === 'boolean' ? 'show' : 'hide'}>
 <label className={params.children == result.children? 'btn btn-default active' : 'btn btn-default' }>
 <input type="radio" name="children"
 value={result.children}
 checked={params.children == result.children}
 className={result.children ? 'hide' : 'hide' }
 onChange={this.onChildrenChanged} />
 <span><i className={result.children==true ? "glyphicon glyphicon-ok" : " glyphicon glyphicon-remove"}></i></span>
 </label>
 </div>
 </td>
 <td>
 <div className={typeof result.swiming === 'boolean' ? 'show' : 'hide'}>
 <label className={params.swiming == result.swiming? 'btn btn-default active' : 'btn btn-default' }>
 <input type="radio" name="swiming"
 value={result.swiming}
 checked={params.swiming == result.swiming}
 className={result.swiming ? 'hide' : 'hide' }
 onChange={this.onSwimingChanged} />
 <span><i className={result.swiming==true ? "glyphicon glyphicon-ok" : " glyphicon glyphicon-remove"}></i></span>
 </label>
 </div>
 </td>
 </tr>
 </tbody>
 );
 }, this);








<tfoot>
    <tr>
        <td>chosen site name {this.state.type} </td>
        <td>chosen distance {this.state.distance} </td>
        <td>chosen toilet {this.state.toilet} </td>
        <td>chosen tv {this.state.tv} </td>
        <td>chosen refrigeter {this.state.refrigeter} </td>
        <td>chosen conditioner {this.state.conditioner} </td>
        <td>chosen wifi {this.state.wifi} </td>
        <td>chosen eat {this.state.eat} </td>
        <td>chosen children {this.state.children} </td>
    </tr>
</tfoot>*/
/*                            <td>
 <div className={typeof result.parking === 'boolean' ? 'show' : 'hide'}>
 <label className={params.parking == result.parking? 'btn btn-default active' : 'btn btn-default' }>
 <input type="radio" name="parking"
 value={result.parking}
 checked={params.parking == result.parking}
 className={result.parking ? 'hide' : 'hide' }
 onChange={this.onParkingChanged} />
 <span><i className={result.parking==true ? "glyphicon glyphicon-ok" : " glyphicon glyphicon-remove"}></i></span>
 </label>
 </div>
 </td>*/