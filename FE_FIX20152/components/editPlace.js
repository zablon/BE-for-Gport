/**
 * Created by semianchuk on 07.05.16.
 */

var React = require('react');
var config = require('./config');

var editPlace = React.createClass({
    getInitialState: function () {
        return { data:  this.props.data};
    },
    componentDidMount() {
       // this.setData({data: this.props.data})
    },
    setData(){
        this.setState({
            data: data
        })
        console.log(this.state.data)
    },
    showData(){
        console.log(JSON.stringify(this.state.data))
    },
    handleChange(event){
        for(item in data){
            if(item == event.target.dataset.methold){
                data[item] = event.target.value
            }
        }
        this.setState({
            data: data
        })
    },
    render() {
    data = this.props.data;
    function change(data){
        console.log(data)
    }
        return (
            <div>11
                <div>title <input type="text" data-methold="title" value={this.state.data.title} onChange={this.handleChange}/></div>
                <div>type <input type="text"  data-methold="type" value={this.state.data.type} onChange={this.handleChange}/></div>
                <div>phone<input type="text"  data-methold="phone" value={this.state.data.phone} onChange={this.handleChange}/></div>
                <div>address <input type="text"  data-methold="address" value={this.state.data.address} onChange={this.handleChange}/></div>
                <div>description <input type="text"  data-methold="description" value={this.state.data.description} onChange={this.handleChange}/></div>
                <div>folder<input type="text" data-methold="folder" value={this.state.data.folder} onChange={this.handleChange}/></div>
                <div>children <input type="text"  data-methold="children" value={this.state.data.children} onChange={this.handleChange}/></div>
                <div>conditioner <input type="text"  data-methold="conditioner" value={this.state.data.conditioner} onChange={this.handleChange}/></div>
                <div>distance<input type="text"  data-methold="distance" value={this.state.data.distance} onChange={this.handleChange}/></div>
                <div>dush <input type="text"  data-methold="dush" value={this.state.data.dush} onChange={this.handleChange}/></div>
                <div>eat<input type="text"  data-methold="eat" value={this.state.data.eat} onChange={this.handleChange}/></div>
                <div>toilet<input type="text"  data-methold="toilet" value={this.state.data.toilet} onChange={this.handleChange}/></div>
                <div>tv <input type="text"  data-methold="tv" value={this.state.data.tv} onChange={this.handleChange}/></div>
                <div>wifi<input type="text"  data-methold="wifi" value={this.state.data.wifi} onChange={this.handleChange}/></div>
                <div>refrigeter <input type="text"  data-methold="refrigeter" value={this.state.data.refrigeter} onChange={this.handleChange}/></div>
                <div>swiming <input type="text"  data-methold="swiming" value={this.state.data.swiming} onChange={this.handleChange}/></div>
                <div>parking <input type="text"  data-methold="parking" value={this.state.data.parking} onChange={this.handleChange}/></div>
                <button onClick={this.setData}>Update</button>
                <button onClick={this.showData}>SAVE</button>
            </div>

            );
}
});

module.exports = editPlace