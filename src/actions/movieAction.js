import Axios from 'axios';
import {APIURLS} from '../utils/apiUrls';

export const getMovies = () => {
  return async (dispatch) => {
    try {
      let results = await Axios.get(`${APIURLS}/movies`);
      dispatch({
        type: 'LOAD_MOVIES_SUCCESS',
        payload: results.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const getGenres = () => {
  return async (dispatch) => {
    try {
      let results = await Axios.get(`${APIURLS}/genres`);
      dispatch({
        type: 'LOAD_GENRES_SUCCESS',
        payload: results.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
