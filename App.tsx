/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, { useEffect } from 'react';
import { enableScreens } from 'react-native-screens';
import SplashScreen from  "react-native-splash-screen";

import ApplicationNavigator from './src/navigators/Application';

enableScreens();

const App = () => {

  useEffect(() => {
    SplashScreen.hide();
  }, [])

  return (
    <ApplicationNavigator/>
  );
};

export default App;
