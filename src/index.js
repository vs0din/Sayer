import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, compose } from 'redux'
import { Provider } from 'react-redux'
import { loadState, saveState } from './localStorage'
import reducer from './reducers'
import throttle from 'lodash/throttle'

const composeEnhancers =
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
          // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
        }) : compose;

const persistedState = loadState()
const store = createStore(
    reducer,
    persistedState,
    composeEnhancers()
);

store.subscribe(throttle(() => {
  saveState(store.getState());
}, 1000 ));


const app = (
    <Provider store={store}>
      <App />
    </Provider>
);

ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
