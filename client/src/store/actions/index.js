import axios from "axios";

export const FETCH_DOGS = "FETCH_DOGS";
export const FETCH_TEMPERAMENTS = "FETCH_TEMPERAMENTS";
export const GET_DOG_BY_NAME = "GET_DOG_BY_NAME";
export const GET_DOG_BY_ID = "GET_DOG_BY_ID";
export const GET_TEMPERAMENTS = "GET_TEMPERAMENTS";

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

export function fetchTemperaments() {
  return function (dispatch) {
    return axios.get("http://localhost:3001/temperament").then((response) => {
      dispatch({ type: GET_TEMPERAMENTS, payload: response.data });
    });
  };
}

export function getDogByName(dispatch) {
  axios.get(`http://localhost:3001/api/dogs`).then((dog) => {
    dispatch({
      type: GET_DOG_BY_NAME,
      payload: dog,
    });
  });
}

export function getDogById(dispatch) {
  axios.get(`http://localhost:3001/api/dogs`).then((dog) => {
    dispatch({
      type: GET_DOG_BY_ID,
      payload: dog,
    });
  });
}

export function getTemperaments(dispatch) {
  axios.get(`http://localhost:3001/api/temperaments`).then((dog) => {
    dispatch({
      type: GET_TEMPERAMENTS,
      payload: dog,
    });
  });
}
