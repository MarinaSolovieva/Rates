import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import {applyMiddleware, compose, createStore} from "redux";
import thunkMiddleware from "redux-thunk"
import {Provider} from "react-redux";

import './index.css';
import App from './App';
import  rootReducer from "./Store/Reducers/rootReducer"


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunkMiddleware))
);


ReactDOM.render(
    <Provider store={store} >
    <App />
    </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
