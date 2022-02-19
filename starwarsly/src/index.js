/**
 * This is the entry point for the application. 
 * The App component is given access to the redux store by wrapping it in
 * a Provider component & passing in the store as a prop
 * PersistGate delays the rendering of the UI until a persisted state has
 * been retreived. The associated persistedStore is retreived from the
 * store file and passed in via the persistor prop.
 */

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import { store, persistedStore} from "./store"


ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistedStore}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
