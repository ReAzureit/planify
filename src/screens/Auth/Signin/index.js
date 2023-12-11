import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import {Button, Input, Title} from '../../../components';
import styles from './styles';

const Signin = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Title>Welcome back!</Title>
      <Input placeholder="Email" keyboardType="email-address" />
      <Input placeholder="Password" secureTextEntry />
      <Button>Login</Button>
      <Text style={styles.footerText}>
        Not Registered?
        <Text
          onPress={() => navigation.navigate('Signup')}
          style={styles.footerLink}>
          {' '}
          Sign up!
        </Text>
      </Text>
    </SafeAreaView>
  );
};

export default React.memo(Signin);
