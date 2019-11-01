import { combineReducers } from "redux";
import products from "./products";
import singleProduct from "./singleProduct";
import addProduct from "./addProduct";
import search from "./search";

export default combineReducers({
  products,
  addProduct,
  singleProduct,
  search
});
