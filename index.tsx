import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import {AppRegistry, LogBox} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

// Redux config
import {Provider as ReduxProvider} from 'react-redux';
import {store} from './src/redux/store';
LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
LogBox.ignoreLogs(['Warning: ReactNative.createElement']);

const AppProvider: React.FC = () => {
  useEffect(() => {}, []);
  return (
    <ReduxProvider store={store}>
      <App />
    </ReduxProvider>
  );
};

AppRegistry.registerComponent(appName, () => AppProvider);
