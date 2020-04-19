import { GIFTED_TYPES } from '../actionTypes';

const TYPES = GIFTED_TYPES;

const initialState = {
  gifteds: [],
  loading: false,
  message: ''
}

const giftedReducer = (state = initialState, action) => {
  switch (action.type) {
    case TYPES.GET_ALL_GIFTED:
      return {
        ...state,
        loading: action.loading,
      };
    case TYPES.GET_ALL_GIFTED_SUCCESS:
      return {
        ...state,
        loading: action.loading,
        gifteds: action.gifteds,
      }
    case TYPES.GET_ALL_GIFTED_FAIL:
      return {
        ...state,
        loading: action.loading,
        message: action.message
      }
    default: 
      return state;
  }
};

export default giftedReducer;