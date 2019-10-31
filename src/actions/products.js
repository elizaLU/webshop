export const SET_PRODUCTS = "SET_PRODUCTS";

export function setProducts(products) {
  return {
    type: "SET_PRODUCTS",
    payload: [...products]
  };
}

export function getProducts() {
  return function (dispatch, getState) {
    const state_products = getState().products;
    if (state_products.length === 0) {
      fetch("http://localhost:4000/products")
        .then(res => res.json())
        .then(data => {
          dispatch(setProducts(data));
        });
    }
  };
}


//addToCartButton
export const ADD_PRODUCT = "ADD_PRODUCT"

export function addProduct(addedProduct) {
  return {
    type: "ADD_PRODUCT",
    payload: { ...addedProduct }
  }
}
export function getProduct(id) {
  return function (dispatch, getState) {
    const addedProduct = getState().addedProduct;
    console.log("here's a state_products: ", addedProduct)
    //if (state_products.length === 0) {
    fetch(`http://localhost:4000/products/${id}`) //how to get the id from params
      .then(res => res.json())
      .then((id) => {
        dispatch(addProduct(id));
      });
  }
};
//addToCartButton




