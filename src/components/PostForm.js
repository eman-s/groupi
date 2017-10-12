import React, {Component} from 'react'
import {handleSubmit} from '../actions/index'
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

class PostForm extends Component {

  submit (e) {
    e.preventDefault()
    this.props.handleSubmit(this.text.value)
    this.text.value = ''
  }

  render(){
    console.log(this.props);
    return(
      <form onSubmit={this.submit.bind(this)}>
        <input type='text' placeholder='what are you doing?'ref={element => this.text = element} />
        <button type='submit'>Groupi</button>
      </form>
    )
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return{
    profile: pathToJS(state.firebase, 'profile'),
    posts: dataToJS(state.firebase, 'posts')
    }
}

const mapDispatchToProps = (dispatch, props) => {
  return bindActionCreators({
    handleSubmit
  }, dispatch)
}

export const FormContainer = compose(
  firebaseConnect(['posts']),
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(PostForm)
