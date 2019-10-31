export const SET_PRODUCT = "SET_PRODUCT";

export function setProduct(product) {
  return {
    type: "SET_PRODUCT",
    payload: { ...product }
  };
}

export function getProduct(id) {
  return function (dispatch, getState) {
      fetch(`http://localhost:4000/products/${id}`)
        .then(res => res.json())
        //.then(console.log(getState()))
        .then(data => {
          dispatch(setProduct(data));
        });
  };
}
