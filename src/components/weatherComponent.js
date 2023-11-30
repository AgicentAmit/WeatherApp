import React, {useState} from 'react';
import {Text, View, Button, Alert} from 'react-native';
import {connect} from 'react-redux';
import {fetchWeatherData} from '../actions/weatherActions';

const WeatherComponent = ({city, fetchWeatherData, weatherData}) => {
  // const [cityName, setCityName] = useState('');
  const apiKey = 'f76faff46c09ca5c2faae10d06010403'; // Replace with your API key

  const handleFetchWeather = () => {
    if (city === '') {
      Alert.alert('Enter City name');
    } else {
      fetchWeatherData(city, apiKey);
    }
  };

  return (
    <View>
      <Text>Weather Information</Text>
      <Button title="Search" onPress={handleFetchWeather} />
      {weatherData ? (
        <View>
          <Text>City: {weatherData.name}</Text>
          <Text>Temperature: {weatherData.main.temp}°C</Text>
          <Text>Humidity: {weatherData.main.humidity}</Text>
          <Text>Description: {weatherData.weather[0].description}</Text>
        </View>
      ) : (
        <Text>No data available</Text>
      )}
    </View>
  );
};

const mapStateToProps = state => ({
  weatherData: state.weather.weatherData,
});

const mapDispatchToProps = dispatch => ({
  fetchWeatherData: (city, apiKey) => dispatch(fetchWeatherData(city, apiKey)),
});

export default connect(mapStateToProps, mapDispatchToProps)(WeatherComponent);
