import axios from "axios";

export const FETCH_DOGS = "FETCH_DOGS";

export function fetchDogs(dispatch) {
  axios.get("http://localhost:3001/api/dogs").then((response) => {
    dispatch({
      type: FETCH_DOGS,
      payload: response,
    });
  });
}

export function searchDogs() {}
