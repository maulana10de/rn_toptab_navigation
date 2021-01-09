import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import Register from './UserRegister';
import Login from './UserLogin';

const Home = () => {
  const handleShow = (value) => {
    alert(value);
  };

  return (
    <View>
      {/* <Register /> */}
      <Login />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
