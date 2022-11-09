import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "./reducers/counterReducer.js";

const rootReducer = combineReducers({
  counter: counterSlice.reducer,
});

export const createReduxStore = (initialState = {}) => {
  return configureStore({
    reducer: rootReducer,
    preloadedState: initialState,
  });
};
