import * as actions from "./productActionType";

const initialState = {
  singleProduct: [],
  isLoading: false,
  isError: [],
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.fetchProductPending:
      return {
        ...state,
        isLoading: true,
      };
    case actions.fetchProductSuccess:
      return {
        ...state,
        singleProduct: action.payload,
        isLoading: false,
      };
    case actions.fetchProductFailure:
      return {
        ...state,
        singleProduct: [],
        isLoading: false,
        isError: action.payload,
      };
    default:
      return state;
  }
};

export default productReducer;
