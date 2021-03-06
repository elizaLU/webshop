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





