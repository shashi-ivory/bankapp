// import { applyMiddleware, createStore } from "redux";
import rootReducer from "./reducers/index";
import thunk from "redux-thunk";

// export const store = createStore(rootReducer, {}, applyMiddleware(thunk));

// import rootReducer from "./Reducer";
import { createStore, applyMiddleware, compose } from "redux";
// import thunkMiddleware from 'redux-thunk';
// import { createLogger } from 'redux-logger';
// import { persistStore } from 'redux-persist';

// const loggerMiddleware = createLogger();
export const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(
      thunk
      // loggerMiddleware,
    ),
    window.__REDUX_DEVTOOLS_EXTENSION__
      ? window.__REDUX_DEVTOOLS_EXTENSION__()
      : (f) => f
  )
);

// export const persistor = persistStore(store);
export default store;
