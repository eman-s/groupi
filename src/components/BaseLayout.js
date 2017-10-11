import React, {Component} from 'react'
import {NavLink} from 'react-router-dom'
import {logOut} from '../actions/index'
import {
  firebaseConnect,
  isLoaded,
  isEmpty,
  pathToJS
} from 'react-redux-firebase'
import {compose, bindActionCreators} from 'redux'
import { connect } from 'react-redux'
import {NavBarContainer} from './NavBar'


export default class BaseLayout extends Component{
  render(){
    return(
      <div>
        <NavBarContainer/>
        <div>
          {this.props.children}
        </div>
      </div>

    )
  }
}
