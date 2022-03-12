import * as types from '../action/types';

export const initialState = {
  numberList: [],
  isLoading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.GET_NUMBER_LIST_SUCCESS:
      return {
        ...state,
        numberList: action.payload,
        isLoading: false,
      };

    case types.GET_NUMBER_LIST_REQUEST:
      return {
        ...state,
        isLoading: true,
      };

    case types.GET_NUMBER_LIST_FAILURE:
      return {
        ...state,
        isLoading: false,
        numberList: [],
        error: action.payload,
      };

    default: {
      return state;
    }
  }
};
