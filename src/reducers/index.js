import { combineReducers } from 'redux'
import { firebaseStateReducer } from 'react-redux-firebase'
import { routerReducer } from 'react-router-redux'

export const initialState = {
  data:null
}
// Add firebase to reducers
export const rootReducer = combineReducers({
  firebase: firebaseStateReducer,
  router : routerReducer
})
