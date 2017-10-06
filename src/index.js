import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter} from 'react-router-dom';
import {Route, Switch} from './components/BaseLayout'
import { Provider } from 'react-redux';
import store from './store'

import Login from './components/Login'
import Profile from './components/Profile'
import BaseLayout from './components/BaseLayout'
import {loginContainer} from './components/Login'

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <BaseLayout>
      <Switch>
        <Route exact path='/' component={loginContainer} />
        <Route exact path='/profile' component={Profile} />
      </Switch>
      </BaseLayout>
    </BrowserRouter>
  </Provider>
  ,document.getElementById('root'));
registerServiceWorker();
