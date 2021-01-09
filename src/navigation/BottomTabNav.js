import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Icon} from 'react-native-elements';

import Home from '../pages/Home';
import TopTabNav from './TopTabNav';

const BottomNav = createBottomTabNavigator();

const BottomTabNav = () => {
  return (
    <BottomNav.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({color}) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = 'home';
          } else if (route.name === 'Categories') {
            iconName = 'home';
          }
          return (
            <Icon name={iconName} type="feather" size={20} color={color} />
          );
        },
      })}>
      <BottomNav.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
      <BottomNav.Screen
        name="Categories"
        component={TopTabNav}
        options={{headerShown: false}}
      />
    </BottomNav.Navigator>
  );
};

export default BottomTabNav;

const styles = StyleSheet.create({});
