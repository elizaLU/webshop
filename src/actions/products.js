export const SET_PRODUCTS = "SET_PRODUCTS"

export function setProducts(products) {
  return {
    type: "SET_PRODUCTS",
    payload: [...products]
    //The payload of this action is an array of products
  }
}

//thunk action creator
export function getProducts() {
    return function (dispatch, getState) {
    //console.log("getState().products from getproducts action ", getState().products)
    const state_products = getState().products
    if (state_products.length === 0) {

      fetch("http://localhost:4000/products")
        .then(res => res.json())
        // .then(data => {
        //   console.log("data from products thunk: ", data)
        //   return data
        // })
        .then(data => {
          dispatch(setProducts(data))
        });
    }
  }
}
