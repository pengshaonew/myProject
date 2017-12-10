import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import reducers from './reducers';
import Root from './Root';

const isProduction =
    process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'production_dev' || process.env.NODE_ENV === 'production_his_wx';

let store;
if (isProduction) {
    store = createStore(reducers, {}, applyMiddleware(thunk));
} else {
    /**
     * Only use the DevTools component
     * when in development.
     */
    store = createStore(reducers, {}, compose(applyMiddleware(thunk)));
}

ReactDOM.render(
    <Root store={store}/>,
    document.getElementById('root')
);
