import {
  Alert,
  Button,
  Platform,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import DefaultInput from '../components/DefaultInput';
import {hp, wp} from '../helper/resDimension';
import Snackbar from 'react-native-snackbar';
import WeatherComponent from '../components/weatherComponent';

const HomeScreen = () => {
  const [cityName, setCityName] = useState('');

  // const [weatherData, setWeatherData] = useState(null);
  // const apiKey = '';

  // const Search = async () => {
  //   if (cityName == '') {
  //     Alert.alert('Enter City name');
  //   } else {
  //     await fetch(
  //       `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`,
  //     )
  //       .then(response => response.json())
  //       .then(data => {
  //         if (data.cod == 200) {
  //           setWeatherData(data);
  //         } else {
  //           Alert.alert('Data Not Found');
  //         }
  //         console.log('====================================');
  //         console.log(data);
  //         console.log('====================================');
  //       })
  //       .catch(error => {
  //         console.error('Error fetching data:', error);
  //       });
  //   }
  // };

  return (
    <View style={styles.container}>
      <StatusBar
        // backgroundColor={}
        barStyle="dark-content"
      />
      <View style={styles.subContainer}>
        <DefaultInput
          _title="Search"
          _value={cityName}
          _handleValue={setCityName}
          leftIcon={true}
          leftIconName="search"
          containerStyle={{
            backgroundColor: 'white',
            borderWidth: 1,
            borderColor: '#BABABA',
          }}
        />
      </View>
      <WeatherComponent city={cityName} />
      {/* <View style={{padding: wp(2)}}>
        <Button title="Search" onPress={Search} />
        {weatherData && Object.keys(weatherData).length !== 0 ? (
          <View>
            <Text>City: {weatherData.name}</Text>
            <Text>Temperature: {weatherData.main.temp}°C</Text>
            <Text>humidity: {weatherData.main.humidity}</Text>
            <Text>Description: {weatherData.weather[0].description}</Text>
          </View>
        ) : (
          <Text>Loading...</Text>
        )}
      </View> */}
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS == 'ios' ? hp(5) : hp(2),
  },
  subContainer: {
    paddingHorizontal: wp(2),
    alignItems: 'center',
  },
});
