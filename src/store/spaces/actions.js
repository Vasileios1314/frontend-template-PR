import axios from "axios";
import { API_URL } from "../../config/constants";

const setSpaces = (spaces) => ({
  type: "SET_SPACES",
  payload: spaces,
});

export const fetchSpaces = () => {
  return async (dispatch, getState) => {
    const setLoader = () => ({
      type: "START_LOADING",
    });
    dispatch(setLoader());

    const spaces = await axios.get(`${API_URL}/spaces`);
    console.log("action, fetchSpaces, space", spaces.data);
    dispatch(setSpaces(spaces.data));
  };
};

const setSpaceDetails = (space) => ({
  type: "SET_SPACE_DETAILS",
  payload: { space },
});

export const fetchSpaceDetails = (id) => {
  return async function (dispatch, getState) {
    const setLoader = () => ({
      type: "START_LOADING",
    });
    dispatch(setLoader());

    const response = await axios.get(`${API_URL}/spaces/${id}`);
    console.log("action", response.data);

    dispatch(setSpaceDetails(response.data));
  };
};
