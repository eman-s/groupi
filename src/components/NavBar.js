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

export default class NavBar extends Component{
  render(){
    const {profile} = this.props
    let navBar
      if (isEmpty(profile)){
        return  <div>
            <NavLink to ='/'>Login</NavLink>
          </div>
      }else if (isLoaded(profile)){
         return <div>
            <NavLink to='/profile'>Home</NavLink>
            <NavLink to='/feed'>Feed</NavLink>
            <button onClick={this.props.logOut}>Log Out</button>
          </div>
      }

    return(
      <div>
      {navBar}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return{
    profile: pathToJS(state.firebase, 'profile')
    }
}

const mapDispatchToProps = (dispatch, props) => {
  return bindActionCreators({
    logOut
  }, dispatch)
}


export const NavBarContainer = compose(
  firebaseConnect(),
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(NavBar)
