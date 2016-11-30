/**
 * Created by semianchuk on 23.04.16.
 */

import React, { Component } from 'react'
import config from './../config'
import { connect } from 'react-redux'
import store from "../../store"

class FotoFolder extends Component {
    constructor(props) {
        super(props)
        this.state={
            images: ''
        };
        var self=this;
        setTimeout(function(){
            self.getImages();
        })
    }
    handleClick(){
        this.props.onClick(this.props.data).bind(this);
    }
    componentWillReceiveProps(){
        var self=this;
        setTimeout(function(){
            self.getImages();
        })
    }
    getImages(){
        if(this.props.data!='' &&  this.props.data){
            var roomId = this.props.data.id,
                type = this.props.data.typeHouse,
                images = this.props.data.Images
                .map(function(data){
                    return <div className="col-md-3 col-sm-4 col-xs-6 thumb foto-gallery">
                        <a className="fancyimage" data-fancybox-group="group" href={config.domain + 'images/'+type+'/'+ roomId + '/' + data.name}>
                            <img classNameName='img-responsive' src={config.domain + 'images/'+type+'/'+ roomId + '/' + data.name}/>
                        </a>
                    </div>
                })
            this.setState({ images: images});

        }
    }
    render() {
        return (
            <div>
                {this.state.images}
            </div>
            );
    }
};
function mapStateToProps (state) {
    const { filter } = state.reducer;
    return {
        store: store,
        filter: filter
    }
}

module.exports = connect(mapStateToProps)(FotoFolder);