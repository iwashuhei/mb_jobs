import React from 'react';
import ReactDOM from 'react-dom';
// import { createStore, combineReducers, applyMiddleware } from 'redux'
// import logger from 'redux-logger'
import { Provider} from 'react-redux';
import { ConnectedRouter} from 'react-router-redux';
import createBrowserHIstory from 'history/createBrowserHistory';
// import * as reducers from './reducers'
import './index.css';
import App from './App';
import createStore from './createStore';

// historyのインスタンスを生成
const history = createBrowserHIstory();

//Store の作成
const store = createStore(history);

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <App />
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root')
);