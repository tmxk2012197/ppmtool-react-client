import * as actionTypes from "../actions/types";

const initialState = {
  projects: [],
  project: {},
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_PROJECTS:
      return {
        ...state,
        projects: action.payload,
      };
    case actionTypes.GET_PROJECT:
      return {
        ...state,
        project: action.payload,
      };
    case actionTypes.DELETE_PROJECT:
      return {
        ...state,
        projects: state.projects.filter(
          (p) => p.projectIdentifier !== action.payload
        ),
      };
    default:
      return state;
  }
};

export default reducer;
