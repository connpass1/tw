
import rootReducer from '../reducers'
import createSagaMiddleware from 'redux-saga'
import saga from '../sagas'
import { configureStore } from "@reduxjs/toolkit";
import { createLogger } from "redux-logger";

const sagaMiddleware = createSagaMiddleware()

const loggerMiddleware = createLogger({
  collapsed: false,
});

let middleware

if (process.env.NODE_ENV === 'development') {
  middleware = (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(sagaMiddleware, loggerMiddleware)
} else {
  middleware = (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(sagaMiddleware)
}

function store() {
  const appStore = configureStore({
    reducer: rootReducer, middleware: middleware
  })
  sagaMiddleware.run(saga)
  return appStore
}


export default store 