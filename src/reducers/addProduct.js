const addedProduct = (state = [], action = {}) => {
  console.log("reducer ", action.payload, action.type)
  switch (action.type) {
    case "ADD_PRODUCT":
      return [...state, { ...action.payload }]
case "CLEAR_CART":
  return []

    default:
      return state
  }
}



export default addedProduct