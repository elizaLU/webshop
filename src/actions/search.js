export const SEARCH_PRODUCT = "SEARCH_PRODUCT";

export function searchValue(searchInput) {
  return {
    type: "SEARCH_PRODUCT",
    payload: searchInput
  };
}
