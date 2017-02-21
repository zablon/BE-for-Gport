/**
 * Created by semianchuk on 28.05.16.
 */

var helper = require('../helper');
import React, { Component } from 'react'

export default class social extends Component {

    render() {
        return (
            <div>
                <ul className="list-inline social-button">
                {
                    helper.socialButton
                        .map(function(data){
                            return  <li><a target="_blank" href={data.link}><img src={data.url}/></a></li>
                        })
                }
                </ul>
            </div>
            );
    }
}

