import React, {useState} from 'react';
import {Alert, SafeAreaView, Text} from 'react-native';
import auth from '@react-native-firebase/auth';
import {Button, Input, Title} from '../../../components';
import styles from './styles';

const Signin = ({navigation}) => {
  const [values, setValues] = useState({});

  const valuesValidation = () => {
    const validations = {
      email: {field: 'Email', value: values.email},
      password: {field: 'Password', value: values.password},
    };

    for (const key in validations) {
      if (!validations[key].value) {
        Alert.alert(`${validations[key].field} cannot be empty`);
        return false;
      }
    }
    return true;
  };

  const handleSubmitForm = () => {
    if (valuesValidation()) {
      auth()
        .signInWithEmailAndPassword(values.email, values.password)
        .then(() => {
          setValues({});
          Alert.alert('User account signed in!');
        })
        .catch(error => {
          if (error.code === 'auth/email-already-in-use') {
            Alert.alert('That email address is already in use!');
          }

          if (error.code === 'auth/invalid-email') {
            Alert.alert('That email address is invalid!');
          }
          console.log(error);
        });
    }
  };

  const onChange = (value, key) => {
    setValues(vals => ({
      ...vals,
      [key]: value,
    }));
  };

  return (
    <SafeAreaView style={styles.container}>
      <Title>Welcome back!</Title>
      <Input
        placeholder="Email"
        keyboardType="email-address"
        onChangeText={val => onChange(val, 'email')}
      />
      <Input
        placeholder="Password"
        secureTextEntry
        onChangeText={val => onChange(val, 'password')}
      />
      <Button onPress={handleSubmitForm}>Login</Button>
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
