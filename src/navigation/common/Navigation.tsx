import { NavigationContainer } from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions
} from '@react-navigation/native-stack';
import React from 'react';
import { enableScreens } from 'react-native-screens';
import { TabNavigation } from '.';
import AppBar from './AppBar';


enableScreens();
interface Props {}

const Stack = createNativeStackNavigator();
export type ScreenOptions = React.ComponentProps<typeof Stack.Screen>;
const screens: ScreenOptions[] = [
  
  // {
  //   name: 'product2',
  //   component: Product2,
  //   options: {headerShown: true, header: AppBar},
  // },
  
]

export const Navigation = (props: Props) => {
  
  const options: NativeStackNavigationOptions = {
    headerShown: true,
    // header: AppBar,
    
    
  };

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Index"
        screenOptions={{
          header: props => <AppBar {...props} />,
          gestureEnabled:true,
          // gestureDireaction: 
        }}>
        <Stack.Screen
          name="Index"
          component={TabNavigation}
        />
        
       
        {screens.map(props => (
          <Stack.Screen key={props.name} {...props} />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
