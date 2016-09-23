/**
 * Created by semianchuk on 24.04.16.
 */

var React = require('react');
var FotoFolder = require('./FotoFolder');
var config = require('./config');

var PriceTable = React.createClass({
    getInitialState() {
        return {num: 2,
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
                }};
    },
    componentDidMount() {
        $("a.fancyimage").fancybox();
        this.setState({
            num:2,
            type: this.props.num,
            fotoFolder: '',
            title: this.props.data.title,
            properties:{
                "conditioner": this.props.data.conditioner,
                "dush": this.props.data.dush,
                "toilet": this.props.data.toilet,
                "tv": this.props.data.tv,
                "wifi": this.props.data.wifi,
                "refrigeter": this.props.data.refrigeter,
                "swiming": this.props.data.swiming
            },
            price: this.props.data.price
                .map(function(data){
                    return  (<tr>
                                <td>{data.mounth}</td>
                                <td>{data.price}грн</td>
                            </tr>
                            )
                })
        })
        this.getImgFromFolder(this.props.data);
        this.state.num++
    },
    getImgFromFolder(images){
        images.typeHouse = 'room'
        this.setState({
            fotoFolder: images
        })
/*        var self=this,
            url = config.domain + 'foto/'+folder+'/'+subfolder;
        $.ajax({
            url: url,
            dataType: 'json',
            cache: false,
            success: function(result) {
                this.setState({
                    fotoFolder: result
                })
            }.bind(this),
            error: function(xhr, status, err) {
                console.error(this.props.url, status, err.toString());
            }.bind(this)
        });*/
    },
    handleClick(event){
        this.props.onChangeData(event);
    },
    render() {
        return (
            <div className="col-md-12 main-block">
                <div className="col-md-12"><span>{this.state.title}</span></div>
                <div className="col-md-12 price-table-block">
                    <div className="col-md-2"></div>
                    <div className="col-md-4" >
                        <table className="table price-table table-bordered table-striped" onClick={this.handleClick} data-id={this.state.type}>
                            <thead>
                                <tr>
                                    <th>Месяц</th>
                                    <th>Цена</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.price}
                            </tbody>
                        </table>
                    </div>
                    <div className="col-md-4">
                        <table className="table price-table table-bordered table-striped" onClick={this.handleClick} data-id={this.state.type}>
                            <tbody>
                                <tr>
                                    <td><i className="glyphicon glyphicon-globe"></i> Кондиционер</td>
                                    <td><i className={this.state.properties.conditioner==true ? "glyphicon glyphicon-ok" : "glyphicon glyphicon-remove"}></i></td>
                                </tr>
                                <tr>
                                    <td><i className="glyphicon glyphicon-equalizer"></i> Душ в номере</td>
                                    <td><i className={this.state.properties.dush==true ? "glyphicon glyphicon-ok" : "glyphicon glyphicon-remove"}></i></td>
                                </tr>
                                <tr>
                                    <td><i className="glyphicon glyphicon-shopping-cart"></i> Удобства в номере</td>
                                    <td><i className={this.state.properties.toilet==true ? "glyphicon glyphicon-ok" : "glyphicon glyphicon-remove"}></i></td>
                                </tr>
                                <tr>
                                    <td><i className="glyphicon glyphicon-folder-close"></i> Телевизор</td>
                                    <td><i className={this.state.properties.tv==true ? "glyphicon glyphicon-ok" : "glyphicon glyphicon-remove"}></i></td>
                                </tr>
                                <tr>
                                    <td><i className="glyphicon glyphicon-cd"></i> WIFI</td>
                                    <td><i className={this.state.properties.wifi==true ? "glyphicon glyphicon-ok" : "glyphicon glyphicon-remove"}></i></td>
                                </tr>
                                <tr>
                                    <td><i className="glyphicon glyphicon-folder-close"></i> Холодильник</td>
                                    <td><i className={this.state.properties.refrigeter==true ? "glyphicon glyphicon-ok" : "glyphicon glyphicon-remove"}></i></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="col-md-2"></div>
                    <div className="col-md-12">
                        <FotoFolder data={this.state.fotoFolder}></FotoFolder>
                    </div>
                </div>
            </div>

);
    }
});

module.exports = PriceTable;