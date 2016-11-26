/**
 * Created by semianchuk on 23.04.16.
 */

var React = require('react');
var config = require('./../config');

var FotoFolder = React.createClass({
    componentDidMount() {

    },
    handleClick(){
        this.props.onClick(this.props.data);
    },
    render() {
        var html = '',
            fotos = '',
            roomId = this.props.data.id,
            type = this.props.data.typeHouse;
            if(this.props.data!=''){
                fotos = this.props.data.Images
                .map(function(data){
                    return <div className="col-md-3 col-sm-4 col-xs-6 thumb foto-gallery">
                                    <a className="fancyimage" data-fancybox-group="group" href={config.domain + 'images/'+type+'/'+ roomId + '/' + data.name}>
                                        <img classNameName='img-responsive' src={config.domain + 'images/'+type+'/'+ roomId + '/' + data.name}/>
                                    </a>
                            </div>
                })
            }
            return (
                <div>
                    {fotos}
                </div>
                );
    }
    });

module.exports = FotoFolder;