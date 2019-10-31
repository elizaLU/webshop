export const SEARCH_PRODUCTS = "SEARCH_PRODUCTS";

export function setProducts(products) {
  return {
    type: "SEARCH_PRODUCTS",
    payload: [...products]
  };
}

export function getProducts() {
  return function(dispatch, getState) {
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

export const ADD_PRODUCT = "ADD_PRODUCT";

export function addProduct(product) {
  return {
    type: "ADD_PRODUCT",
    payload: product
  };
}
