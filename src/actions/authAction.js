import Axios from 'axios';
import {APIURLS} from '../utils/apiUrls';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const userRegister = (registerData) => {
  return async (dispatch) => {
    try {
      // console.log(registerData);
      let results = await Axios.post(`${APIURLS}/users`, registerData);
      dispatch({
        type: 'USER_REGISTER_SUCCESS',
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const userLogin = (username, password) => {
  return async (dispatch) => {
    try {
      let results = await Axios.get(
        `${APIURLS}/users?username=${username}&password=${password}`,
      );
      dispatch({
        type: 'USER_LOGIN_SUCCESS',
        payload: results.data,
      });
      await AsyncStorage.setItem('idUser', results.data[0].id);
    } catch (error) {
      console.log(error);
    }
  };
};
