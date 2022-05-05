import axios from "axios";

export const FETCH_DOGS = "FETCH_DOGS";
export const FETCH_TEMPERAMENTS = "FETCH_TEMPERAMENTS";
export const GET_DOG_BY_NAME = "GET_DOG_BY_NAME";
export const GET_DOG_BY_ID = "GET_DOG_BY_ID";
export const GET_TEMPERAMENTS = "GET_TEMPERAMENTS";
export const SORT = "SORT";

export function fetchDogs() {
  return function (dispatch) {
    axios
      .get("http://localhost:3001/api/dogs")
      .then((allDogs) => {
        dispatch({
          type: FETCH_DOGS,
          payload: allDogs.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
}

export function getDogByName(search) {
  return function (dispatch) {
    axios
      .get(`http://localhost:3001/api/dogs?name=${search}`)
      .then((allDogs) => {
        dispatch({
          type: GET_DOG_BY_NAME,
          payload: allDogs.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
}

export function sort(order) {
  return {
    type: SORT,
    payload: order,
  };
}
