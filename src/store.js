import { compose, createStore, applyMiddleware } from 'redux'
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase'
import {firebaseConfig, config} from './firebase'
import {rootReducer, initialState} from './reducers/index'
import thunk from 'redux-thunk'
import createHistory from 'history/createBrowserHistory'
import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux'

export const history = createHistory()


const store = createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(
       // Pass getFirebase function as extra argument
      thunk.withExtraArgument(getFirebase),
      routerMiddleware(history)
    ),
    reactReduxFirebase(firebaseConfig, { userProfile: 'users', enableLogging: false }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
