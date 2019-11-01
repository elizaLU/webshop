const searchValue = (state = "", action = {}) => {
  switch (action.type) {
    case "SEARCH_PRODUCT":
      return action.payload;
    default:
      return state;
  }
};

export default searchValue;
