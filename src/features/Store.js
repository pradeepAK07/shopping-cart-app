import { combineReducers, legacy_createStore } from "redux";
import productReducer from "./productReducer";

const reducer = combineReducers({
  product: productReducer,
});

const Store = legacy_createStore(reducer);

export default Store;
