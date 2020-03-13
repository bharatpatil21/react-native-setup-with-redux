import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import { Container, Header, Button, Item, Input, Text } from 'native-base';

import { useDispatch, useSelector } from 'react-redux';
import * as loginActions from 'app/actions/loginActions';
import styles from './styles';

export default function Login() {
  const id = useSelector(state => state.loginReducer.id);
  const dispatch = useDispatch();
  const onLogin = () => dispatch(loginActions.requestLogin('test', '1234'));

  return (
    <View style={styles.container}>
      <Image source={require('../../assets/main-bg.jpg')} style={styles.backgroundImage} />
      <View style={styles.formAlign}>
        <Text style={styles.loginText}>Login</Text>
        <Item style={styles.email}>
          <Input placeholder='Email'
            style={styles.input}
            placeholderTextColor="#FFFFFF"
            style={{ color: '#ffffff' }}
          />
        </Item>
        <Item style={styles.password}>
          <Input placeholder='Password'
            style={styles.input}
            placeholderTextColor="#FFFFFF"
            style={{ color: '#ffffff' }}
          />
        </Item>
        <TouchableOpacity>
          <Button transparent>
            <Text style={styles.forgotPasswordText}>Forgot Password</Text>
          </Button>
        </TouchableOpacity>
        <TouchableOpacity>
          <Button rounded style={styles.loginBtn} onPress={onLogin}>
            <Text style={styles.loginBtnText}>Login</Text>
          </Button>
        </TouchableOpacity>
      </View>
    </View>
  );
}
