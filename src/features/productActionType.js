import axios from "axios";

export const fetchProductSuccess = "FETCH_PRODUCT_SUCCESS";
export const fetchProductFailure = "FETCH_PRODUCT_FAILURE";
export const fetchProductPending = "FETCH_PRODUCT_PENDING";

const fetchDataSuccess = (productData) => {
  return {
    type: fetchProductSuccess,
    payload: productData,
  };
};

const fetchDataFailure = (error) => {
  return {
    type: fetchProductFailure,
    payload: error,
  };
};

const fetchDataPending = () => {
  return {
    type: fetchDataPending,
  };
};

export const fetchProductData = (id) => {
  return async (dispatch) => {
    dispatch(fetchDataPending());
    try {
      const response = await axios.get(`https://dummyjson.com/products/${id}`);
      const res = response.data;
      dispatch(fetchDataSuccess(res));
    } catch (error) {
      dispatch(fetchDataFailure(error));
    }
  };
};
