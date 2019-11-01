
export const ADD_PRODUCT = "ADD_PRODUCT"

export function addProduct(product) {
  console.log('addProduct test:', product)
  return {
    type: "ADD_PRODUCT",
    payload: product
  }
}