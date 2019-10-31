import { combineReducers } from "redux";
import products from "./products";
import singleProduct from "./singleProduct"
import addProduct from './addProduct'

export default combineReducers({
  products,
  addProduct,
  singleProduct
})
