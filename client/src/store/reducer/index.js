import { FETCH_DOGS } from "../actions";

const initialState = {
  dog: [],
  filteredDogs: [],
};

export default function reducer(state = initialState, payload) {
  switch (payload.type) {
    case FETCH_DOGS:
      return {
        ...state,
        dog: payload,
      };
    default: return state;
  }
}
