
export const ADD_PRODUCT = "ADD_PRODUCT"
export const CLEAR_CART = "CLEAR_CART"

export function addProduct(product) {
  console.log('addProduct test:', product)
  return {
    type: "ADD_PRODUCT",
    payload: product
  }
}

export function clearCart() {
  console.log('CLEAR_CART test:')
  return {
    type: "CLEAR_CART",
    payload: null
  }
}