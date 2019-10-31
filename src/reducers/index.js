import { combineReducers } from "redux";
import products from "./products";
import addProduct from './addProduct'

export default combineReducers({
  products,
  addProduct
})