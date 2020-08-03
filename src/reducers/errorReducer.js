import * as actionTypes from "../actions/types";

const initialState = {};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_ERRORS:
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
