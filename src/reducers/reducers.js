// reducers.js

import {combineReducers} from 'redux';
import {
  FETCH_WEATHER_FAILURE,
  FETCH_WEATHER_REQUEST,
  FETCH_WEATHER_SUCCESS,
} from '../actions/weatherActions';

const initialState = {
  weatherData: null,
  loading: false,
  error: null,
};

const weatherReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_WEATHER_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_WEATHER_SUCCESS:
      return {
        ...state,
        loading: false,
        weatherData: action.payload,
      };
    case FETCH_WEATHER_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default combineReducers({
  weather: weatherReducer,
});
