import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

// This file uses the redux-persist package from npmjs.
// https://www.npmjs.com/package/redux-persist

import authReducers from "state";
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

const persistConfig = { key: "root", storage };

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
