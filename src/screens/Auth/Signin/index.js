import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import {Button, Input, Title} from '../../../components';
import styles from './styles';

const Signin = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Title>Welcome back!</Title>
      <Input placeholder="Email" />
      <Input placeholder="Password" />
      <Button>Login</Button>
      <Text style={styles.footerText}>
        Not Registered?<Text style={styles.footerLink}> Sign up!</Text>
      </Text>
    </SafeAreaView>
  );
};

export default Signin;
