import React, {useRef, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Button, Input} from 'react-native-elements';
import {useDispatch, useSelector} from 'react-redux';
import {userLogin} from '../actions';

const Login = ({navigation}) => {
  const [loginForm, setLoginForm] = useState({
    username: '',
    password: '',
  });

  const dispatch = useDispatch();

  const {id} = useSelector(({authReducer}) => {
    return {
      id: authReducer.id,
    };
  });

  const handleLogin = () => {
    const {username, password} = loginForm;
    dispatch(userLogin(username, password));
  };

  useEffect(() => {
    if (id) {
      navigation.dispatch(StackActions.replace('BottomTabNav'));
    }
  });

  return (
    <View style={{justifyContent: 'center'}}>
      <Input
        placeholder="Username"
        onChangeText={(value) => setLoginForm({...loginForm, username: value})}
      />
      <Input
        secureTextEntry
        placeholder="Password"
        onChangeText={(value) => setLoginForm({...loginForm, password: value})}
      />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({});
