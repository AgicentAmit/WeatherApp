// weatherActions.js

export const FETCH_WEATHER_REQUEST = 'FETCH_WEATHER_REQUEST';
export const FETCH_WEATHER_SUCCESS = 'FETCH_WEATHER_SUCCESS';
export const FETCH_WEATHER_FAILURE = 'FETCH_WEATHER_FAILURE';

export const fetchWeatherRequest = () => ({
  type: FETCH_WEATHER_REQUEST,
});

export const fetchWeatherSuccess = data => ({
  type: FETCH_WEATHER_SUCCESS,
  payload: data,
});

export const fetchWeatherFailure = error => ({
  type: FETCH_WEATHER_FAILURE,
  payload: error,
});

export const fetchWeatherData = (cityName, apiKey) => {
  return async dispatch => {
    dispatch(fetchWeatherRequest());
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`,
      );
      const data = await response.json();

      if (data.cod === 200) {
        dispatch(fetchWeatherSuccess(data));
      } else {
        dispatch(fetchWeatherFailure('Data Not Found'));
      }
    } catch (error) {
      dispatch(fetchWeatherFailure('Error fetching data'));
    }
  };
};
