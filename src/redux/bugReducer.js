import { initialState } from "./data";
import {
  ADD_BUG,
  SELECT_BUG,
  FILTER_BUGS,
  ADD_COMPANY,
  SELECT_COMPANY,
  SEARCH_NAVER,
  SELECT_NAVER,
} from "./constants";

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
    case FILTER_BUGS:
      return {
        ...state,
        filterBugs: state.bugs.filter((bug) => bug.compId === action.payload),
      };
    case SELECT_COMPANY:
      return {
        ...state,
        company: state.companies.find(
          (company) => company.id == action.payload
        ),
      };
    case ADD_COMPANY:
      return {
        ...state,
        companies: state.companies.some((comp) => comp.id == action.payload.id)
          ? [...state.companies]
          : [...state.companies, action.payload],
      };
    case SEARCH_NAVER:
      return {
        ...state,
        searchResults: action.payload,
      };
    case SELECT_NAVER:
      return {
        ...state,
        searchResult: action.payload,
      };
    default:
      return state;
  }
}
