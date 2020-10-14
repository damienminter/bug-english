import { initialState } from "./data";
import { ADD_BUG, SELECT_BUG } from "./constants";

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
    default:
      return state;
  }
}
