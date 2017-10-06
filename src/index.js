import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { Route, Switch} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store'
import {ConnectedRouter} from 'react-router-redux'
import {history} from './store'

import Login from './components/Login'
import Profile from './components/Profile'
import BaseLayout from './components/BaseLayout'
import {loginContainer} from './components/Login'

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <BaseLayout>
      <Switch>
        <Route exact path='/' component={loginContainer} />
        <Route exact path='/profile' component={Profile} />
      </Switch>
      </BaseLayout>
    </ConnectedRouter>
  </Provider>
  ,document.getElementById('root'));
registerServiceWorker();
