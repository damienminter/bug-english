import { createStore } from "redux";
import bugReducer from "./bugReducer";

export const store = createStore(
  bugReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
