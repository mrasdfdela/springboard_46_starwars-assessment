/**
 * This initializes the redux store with the root reducer and includes
 * the thunk middleware and redux-persist. These allow the app to 
 * dispatch asynchronous actions (for querying the Star Wars API) and
 * to save the redux library in local storage, allowing the App's store
 * to persist even if users navigate away from it.
 */

import  { composeWithDevTools} from "redux-devtools-extension";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";

import thunk from "redux-thunk";
import root from "./reducers/root";
import { createStore, applyMiddleware } from "redux";

const persistConfig = {
  key: "root",
  storage,
  stateReconciler: autoMergeLevel2
};

const persistedReducer = persistReducer(persistConfig, root);


export const store = createStore(
  persistedReducer,
  composeWithDevTools(
    applyMiddleware(thunk),
  )
);

export const persistedStore = persistStore(store);

