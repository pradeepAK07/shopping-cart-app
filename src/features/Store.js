import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import productReducer from "./productReducer";
import thunk from "redux-thunk";

const reducer = combineReducers({
  product: productReducer,
});

const Store = legacy_createStore(reducer, applyMiddleware(thunk));

export default Store;
