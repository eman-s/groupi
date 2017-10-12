import { combineReducers } from 'redux'
import { firebaseStateReducer } from 'react-redux-firebase'
import { routerReducer } from 'react-router-redux'
import {POST} from '../actions/index'
import update from 'immutability-helper';

export const initialState = {
  firebase: null,
  router : null,
  posts: {}
}

const posts = function(state = {}, action){
  switch(action.type){
    case POST:
      return update (state, ({$set:action.payload}))
      default: return state
  }
}
// Add firebase to reducers
export const rootReducer = combineReducers({
  firebase: firebaseStateReducer,
  router : routerReducer,
  posts : posts
})
