import React, {Component} from 'react'
import firebase from '../firebase'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'
import {UserAuthWrapper} from 'redux-auth-wrapper'
import {
  firebaseConnect,
  isLoaded,
  isEmpty,
  pathToJS
} from 'react-redux-firebase'
import PropTypes from 'prop-types'
import {compose, bindActionCreators} from 'redux'
import { push } from 'react-router-redux'

export default class Profile extends Component {
  render(){
    console.log(this.props);
    const {profile} = this.props;
    let user
     if (isEmpty(profile)){
      return <p>Please Log In</p>
     }else if (isLoaded(profile)){
      return <img src={profile.avatarUrl}/>
     }else{
      return <p>Loading...</p>
     }

    return(
      <div>
        {user}
      </div>
    )
  }
}

  const mapStateToProps = (state) => {
    console.log(state);
    return{
      authError: pathToJS(state.firebase, 'authError'),
      auth: pathToJS(state.firebase, 'auth'),
      profile: pathToJS(state.firebase, 'profile')
      }
  }

  export const ProfileContainer = compose(
    firebaseConnect(),
    connect(
      mapStateToProps
    )
  )(Profile)
