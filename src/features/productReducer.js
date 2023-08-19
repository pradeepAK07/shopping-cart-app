import { addProduct } from "./productActionType";

const initialState = {
  singlrProduct: [],
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case addProduct:
      return {
        ...state,
        singlrProduct: action.payload,
      };
    default:
      return state;
  }
};

export default productReducer;
