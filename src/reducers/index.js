import { combineReducers } from "redux";
import products from "./products";
import singleProduct from "./singleProduct";

export default combineReducers({
  products,
  singleProduct
});
