import { FETCH_DOGS, GET_DOG_BY_NAME } from "../actions";

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
    case GET_DOG_BY_NAME:
      return {
        ...state,
        temperaments: action.payload,
      };
    default:
      return state;
  }
}
