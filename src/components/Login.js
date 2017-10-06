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



export default class Login extends Component{


  render(){
    console.log(this.props);
    return(
      <div>
      <h1>Log In Page</h1>
      <button onClick={this.props.logOut}>Sign Out</button>
      <button onClick={this.props.facebookLogin}>Sign In Using Facebook</button>

      </div>
    )
  }
}



const facebookLogin = loginData => {
  return (dispatch, _, getFirebase) => {
    return getFirebase()
    .login({ provider: 'facebook', type: 'popup' })
    .then(response => dispatch(push('/profile')))

      // this is where you can redirect to another route
    .catch((error) => {
      console.log('there was an error', error)
      console.log('error prop:', this.props.authError) // thanks to connect
    })
  }
}

const logOut = () => {
  return (dispatch, _, getFirebase) => {
    const firebase = getFirebase()
    firebase.logout().then(response => console.log(response))
  }
}


const mapStateToProps = (state) => {
  return{
      authError: pathToJS(firebase, 'authError'),
      auth: pathToJS(firebase, 'auth'),
      profile: pathToJS(firebase, 'profile')
    }
}

const mapDispatchToProps = (dispatch, props) => {
  return bindActionCreators({
    facebookLogin,
    logOut
  }, dispatch)
}

export const loginContainer = compose(
  firebaseConnect(),
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(Login)
