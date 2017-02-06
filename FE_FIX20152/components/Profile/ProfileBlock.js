/**
 * Created by semianchuk on 27.09.16.
 */
import React, { Component } from 'react'
import { connect } from 'react-redux'
import store from "../../store"

class ProfileBlock extends Component {
    render(){
        var profile = this.props.user;
        profile.photos = profile.photos ? profile.photos :  '/images/icon/unknown-user-pic.jpg';
        return (
            <div className="profile-block">
                <div className="profile-block-img">
                    <img className="profile-block-image" src={profile.photos}/>
                </div>
                <span className="profile-block-name">{profile.name}</span>
            </div>
        )
    }
}
function mapStateToProps (state) {
    const { user } = state.reducer;
    return {
        store: store,
        user: user,
    }
}
module.exports = connect(mapStateToProps)(ProfileBlock);