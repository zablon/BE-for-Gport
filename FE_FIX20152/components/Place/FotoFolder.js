/**
 * Created by semianchuk on 23.04.16.
 */

import React, { Component } from 'react'
import config from './../config'

export default class FotoFolder extends Component {

    constructor(props) {
        super(props)

    }
    handleClick(){
        this.props.onClick(this.props.data).bind(this);
    }

    render() {
        const id = this.props.id;
        const data = this.props.data.Images;
        const typeHouse = this.props.type;
        return (
            <div>
                {
                    !data ?
                        "Загрузка..."
                        :
                        data.map((val, index) =>
                            <div className="col-md-3 col-sm-4 col-xs-6 thumb foto-gallery">
                                <a className="fancyimage" data-fancybox-group="group" href={config.domain + 'images/'+typeHouse+'/'+ id + '/' + val.name}>
                                    <img className='img-responsive' src={config.domain + 'images/'+typeHouse+'/'+ id + '/' + val.name}/>
                                </a>
                            </div>
                        )
                }
            </div>
            );
    }
};
