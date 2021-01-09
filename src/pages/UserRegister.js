import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Button, Input} from 'react-native-elements';
import {useDispatch} from 'react-redux';
import {userRegister} from '../actions';

const Register = () => {
  const [formDataRegis, setFormDataRegis] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const dispatch = useDispatch();
  let {username, email, password, confirmPassword} = formDataRegis;

  const data = {
    username,
    email,
    password,
    role: 'user',
  };
  return (
    <View style={{justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{fontSize: 25, marginVertical: 15, paddingLeft: 10}}>
        Create Account
      </Text>
      <Input
        placeholder="Username"
        containerStyle={{width: '80%'}}
        onChangeText={(value) =>
          setFormDataRegis({...formDataRegis, username: value})
        }
      />
      <Input
        placeholder="Email"
        containerStyle={{width: '80%'}}
        onChangeText={(value) =>
          setFormDataRegis({...formDataRegis, email: value})
        }
      />
      <Input
        placeholder="Password"
        containerStyle={{width: '80%'}}
        secureTextEntry
        onChangeText={(value) =>
          setFormDataRegis({...formDataRegis, password: value})
        }
      />
      <Input
        placeholder="Confirm Password"
        containerStyle={{width: '80%'}}
        secureTextEntry
        onChangeText={(value) =>
          setFormDataRegis({...formDataRegis, confirmPassword: value})
        }
      />
      <Button title="Register" onPress={() => dispatch(userRegister(data))} />
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({});
