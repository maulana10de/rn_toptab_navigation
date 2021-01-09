import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../pages/Home';
import BottomTabNav from './BottomTabNav';
import {useDispatch, useSelector} from 'react-redux';
import {getGenres, getMovies} from '../actions';

const Stack = createStackNavigator();

const MainNav = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGenres());
    dispatch(getMovies());
  }, []);

  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={BottomTabNav} />
    </Stack.Navigator>
  );
};

export default MainNav;

const styles = StyleSheet.create({});
