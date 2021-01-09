import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useSelector} from 'react-redux';

const Category = ({route}) => {
  const {name, id} = route.params.item;

  const {movies} = useSelector(({movieReducer}) => {
    return {
      movies: movieReducer.movies,
    };
  });

  const movieGenre = () => {
    return movies.map((elem, index) => {
      return elem.genre_ids.map((val, i) => {
        if (id === val) {
          return <Text style={{marginVertical: 10}}>{elem.title}</Text>;
        }
      });
    });
  };

  return (
    <View style={{marginHorizontal: 20, marginVertical: 20}}>
      {movieGenre()}
    </View>
  );
};

export default Category;

const styles = StyleSheet.create({});
