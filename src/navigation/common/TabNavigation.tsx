import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NativeStackNavigationOptions } from '@react-navigation/native-stack';
import { COLOR } from 'constants/ui';
import { Home } from 'features/Home';
import { NotificationHome } from 'features/notification';
import { SearchHome } from 'features/search';
import { Icon, IconButton } from 'native-base';
import React from 'react';
import VectorIcon from 'react-native-vector-icons/Ionicons';
import { Menu } from '../../features/personal-menu/';
interface Props {
  navigation: any;
}
const Tab = createMaterialBottomTabNavigator();
export const TabNavigation = (props: Props) => {
  // const options: NativeStackNavigationOptions = {
  //   headerShown: false,
  // };

  return (
    <Tab.Navigator
      labeled={false}
      initialRouteName="Home"
      barStyle={{backgroundColor: 'white'}}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({focused, color}) => (
            <IconButton
              icon={
                <Icon
                  size="sm"
                  as={
                    <VectorIcon
                      name={focused === false ? 'home-outline' : 'home-sharp'}
                    />
                  }
                  color={focused === true ? COLOR.MAIN_COLOR : 'black'}
                />
              }
            />
          ),
        }}
      />
       <Tab.Screen
        name="search-home"
        component={SearchHome}
        options={{
          tabBarIcon: ({focused, color}) => (
            <IconButton
              icon={
                <Icon
                  size="sm"
                  as={
                    <VectorIcon
                      name={focused === false ? 'search' : 'search'}
                    />
                  }
                  color={focused === true ? COLOR.MAIN_COLOR : 'black'}
                />
              }
            />
          ),
        }}
      />
       <Tab.Screen
        name="notification-home"
        component={NotificationHome}
        options={{
          tabBarIcon: ({focused, color}) => (
            <IconButton
              icon={
                <Icon
                  size="sm"
                  as={
                    <VectorIcon
                      name={focused === false ? 'notifications-outline' : 'notifications-sharp'}
                    />
                  }
                  color={focused === true ? COLOR.MAIN_COLOR : 'black'}
                />
              }
            />
          ),
        }}
      />

      <Tab.Screen
        name="personal-menu"
        component={Menu}
        options={{
          // tabBarLabel: 'Home',
          tabBarIcon: ({focused, color}) => (
            <IconButton
              icon={
                <Icon
                  size="sm"
                  as={
                    <VectorIcon
                      name={
                        focused === false
                          ? 'ios-person-circle-outline'
                          : 'ios-person-circle-sharp'
                      }
                    />
                  }
                  color={focused === true ? COLOR.MAIN_COLOR : 'black'}
                />
              }
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
