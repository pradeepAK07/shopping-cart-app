export const addProduct = "ADD_PRODUCT";

export const addProductAction = (productData) => {
  return {
    type: addProduct,
    payload: productData,
  };
};
