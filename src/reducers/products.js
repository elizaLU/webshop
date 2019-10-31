const products = (state = [], action = {}) => {
  switch (action.type) {
    case "SET_PRODUCTS":
      return [...action.payload];
    case "GET_PRODUCT":
      return { ...action.payload };
    default:
      return state;
  }
};

export default products;
