import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from './src/screens/HomeScreen';
import {Provider} from 'react-redux';
import store from './src/helper/store';

const App = () => {
  return (
    <Provider store={store}>
      {/* <NavigationContainer> */}
      <HomeScreen />
      {/* </NavigationContainer> */}
    </Provider>
  );
};

export default App;
