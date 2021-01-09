import React, {useEffect} from 'react';
import {StyleSheet} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Category from '../pages/Category';
import {useDispatch, useSelector} from 'react-redux';
import {getGenres, getMovies} from '../actions';
import movieReducer from '../reducers/movieReducer';
const TopNav = createMaterialTopTabNavigator();

const TopTabNav = () => {
  const {genres, movies} = useSelector(({movieReducer}) => {
    return {
      genres: movieReducer.genres,
      movies: movieReducer.movies,
    };
  });

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMovies);
  }, []);

  console.log('genre', genres);
  console.log('movie', movies);

  return (
    <TopNav.Navigator tabBarOptions={{scrollEnabled: true}}>
      {genres.map((item) => {
        return (
          <TopNav.Screen
            name={item.name}
            component={Category}
            key={item.id}
            initialParams={{item}}
          />
        );
      })}
    </TopNav.Navigator>
  );
};

export default TopTabNav;

const styles = StyleSheet.create({});
