import React, {Component} from 'react'
import {NavLink} from 'react-router-dom'
import {logOut} from '../actions/index'
import {
  firebaseConnect,
  isLoaded,
  isEmpty,
  pathToJS,
  dataToJS
} from 'react-redux-firebase'
import {compose, bindActionCreators} from 'redux'
import { connect } from 'react-redux'

export default class NavBar extends Component{
  render(){
    const {profile} = this.props
    console.log(this.props.todos);
    let navBar
      if (isEmpty(profile)){
        return  <div>
            <NavLink to ='/'>Login</NavLink>
          </div>
      }else if (isLoaded(profile)){
         return <div>
            <NavLink to='/profile'>Home</NavLink>
            <NavLink to='/post'>Create Post</NavLink>
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
    profile: pathToJS(state.firebase, 'profile'),
    todos: dataToJS(state.firebase, 'todos')
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
