import { createStore, applyMiddleware } from "redux";
import reducers from "./reducers/index";
import thunk from "redux-thunk";

const store = createStore(reducers, {}, applyMiddleware(thunk)); // first thing is reducers and second thing is default object

export default store;
