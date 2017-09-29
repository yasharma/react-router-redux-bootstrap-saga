import './bootstrap'
import React from 'react';
import ReactDOM from 'react-dom';
import createHistory from 'history/createBrowserHistory';
import createSagaMiddleware from 'redux-saga';
import { Provider } from 'react-redux';
import { routerMiddleware } from 'react-router-redux';
import { applyMiddleware, createStore } from 'redux';
//import registerServiceWorker from './registerServiceWorker';

import App from './components/App';
import Saga from './saga';
import reducer from './reducer';


import "bootstrap/dist/css/bootstrap.css";

// create middlewares
const history = createHistory();
const sagaMiddleware = createSagaMiddleware();

const middleware = applyMiddleware(
  routerMiddleware(history),
  sagaMiddleware
);

// create store
const store = createStore(reducer, middleware);

// run saga middleware
sagaMiddleware.run(Saga);

ReactDOM.render(
  <Provider store={store}>
    <App history={history} />
  </Provider>,
  document.getElementById('root')
);
//registerServiceWorker();
