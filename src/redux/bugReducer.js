import { initialState } from "./data";
import { ADD_BUG, SELECT_BUG, SELECT_COMPANY } from "./constants";

export default function bugReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_BUG:
      return {
        ...state,
        bugs: [action.payload, ...state.bugs],
      };
    case SELECT_BUG:
      return {
        ...state,
        bug: action.payload,
      };
    case SELECT_COMPANY:
      console.log("reducer fired");
      return {
        ...state,
        company: state.companies.find(
          (company) => company.id === action.payload
        ),
      };
    default:
      return state;
  }
}
