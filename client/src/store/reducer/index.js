import { FETCH_DOGS } from "../actions";
import { FETCH_TEMPERAMENTS } from "../actions";

const initialState = {
  dogs: [],
  temperaments: [],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_DOGS:
      return {
        ...state,
        dogs: action.payload,
      };
    case FETCH_TEMPERAMENTS:
      return {
        ...state,
        temperaments: action.payload,
      };
    default:
      return state;
  }
}
