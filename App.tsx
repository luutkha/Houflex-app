import {Container, NativeBaseProvider, StatusBar} from 'native-base';
import React, { useEffect } from 'react';
import {Navigation} from './src/navigation/common';
import theme from './src/themes/nativebase';
import SplashScreen from 'react-native-splash-screen';
import { ColorPropType } from 'react-native';
import {COLOR} from './src/constants/ui';


const App: React.FC = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, [])
  return (
    <NativeBaseProvider theme={theme}>
      <StatusBar backgroundColor={COLOR.MAIN_COLOR} />
      
      <Navigation />
      
    </NativeBaseProvider>
  );
};

export default App;
