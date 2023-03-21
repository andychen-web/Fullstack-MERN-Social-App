import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

// This file uses the redux-persist package from npmjs.
// https://www.npmjs.com/package/redux-persist

import authReducer from "state";
// create Redux store with predefined config
import { configureStore } from "@reduxjs/toolkit";
// use Provider to provide Redux store for all components
import { Provider } from "react-redux";
// rehydrate Redux store across sessions with common Persist functions
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
// integrate redux-persist with localStorage using storage engine & PersistGate component
import storage from "redux-persist/lib/storage";
import { PersistGate } from "redux-persist/integration/react";

// add persistence to Redux store
const persistConfig = { key: "root", storage };
const persistedReducer = persistReducer(persistConfig, authReducer);
// create a new Redux store using the persisted root reducer, based on tutorial from positronx.io
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      {/* persistStore(store) creates a Redux Persistor that saves 
      and rehydrates app state; passed to PersistGate for rendering.
      loading= {null} ensures the app doesn't display a loading screen while the persisted state is being retrieved*/}
      <PersistGate loading={null} persistor={persistStore(store)}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
