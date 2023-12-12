import React, {useState} from 'react';
import {
  Alert,
  Linking,
  SafeAreaView,
  ScrollView,
  Text,
  View,
} from 'react-native';
import auth from '@react-native-firebase/auth';
import {Button, Checkbox, Input, Title} from '../../../components';
import styles from './styles';
import {
  PRIVACY_POLICY_LINK,
  TERMS_CONDITION_LINK,
} from '../../../constants/links';

const Signup = ({navigation}) => {
  const [agreed, setAgreed] = useState(false);
  const [values, setValues] = useState({});
  const handleCheckboxPress = () => setAgreed(value => !value);
  const handleOnLinkPress = url => Linking.openURL(url);
  const handleOnSigninPress = () => navigation.navigate('Signin');
  const valuesValidation = () => {
    const validations = {
      first_name: {field: 'First Name', value: values.first_name},
      last_name: {field: 'Last Name', value: values.last_name},
      email: {field: 'Email', value: values.email},
      password: {field: 'Password', value: values.password},
    };

    for (const key in validations) {
      if (!validations[key].value) {
        Alert.alert(`${validations[key].field} cannot be empty`);
        return false;
      }
    }

    if (values.password !== values.confirm_password) {
      Alert.alert('Password do not match');
      return;
    }
    if (!agreed) {
      Alert.alert('You should agree to the terms');
      return;
    }

    return true;
  };
  const handleSubmitForm = () => {
    if (valuesValidation()) {
      auth()
        .createUserWithEmailAndPassword(values.email, values.password)
        .then(() => {
          auth().currentUser.updateProfile({
            displayName: `${values.first_name} ${values.last_name}`,
          });
          setValues({});
          Alert.alert('User account created & signed in!');
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
  const logout = () =>
    auth()
      .signOut()
      .then(() => console.log('User signed out!'));

  return (
    <SafeAreaView style={styles.container}>
      <Title>Join the hub!</Title>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Input
          onChangeText={val => onChange(val, 'first_name')}
          placeholder="First Name"
        />
        <Input
          onChangeText={val => onChange(val, 'last_name')}
          placeholder="Last Name"
        />
        <Input
          onChangeText={val => onChange(val, 'email')}
          placeholder="Email"
          keyboardType="email-address"
        />
        <Input
          onChangeText={val => onChange(val, 'password')}
          placeholder="Password"
          secureTextEntry
        />
        <Input
          onChangeText={val => onChange(val, 'confirm_password')}
          placeholder="Confirm Password"
          secureTextEntry
        />
        <View style={styles.agreeContainer}>
          <Checkbox checked={agreed} onPress={handleCheckboxPress} />
          <Text style={styles.agreeText}>
            I agree to{' '}
            <Text
              style={styles.link}
              onPress={() => handleOnLinkPress(TERMS_CONDITION_LINK)}>
              {' '}
              Terms and Conditions
            </Text>{' '}
            and{' '}
            <Text
              style={styles.link}
              onPress={() => handleOnLinkPress(PRIVACY_POLICY_LINK)}>
              {' '}
              Privacy Policy
            </Text>
          </Text>
        </View>
        <Button onPress={handleSubmitForm} type={'blue'}>
          Create New Account
        </Button>
        <Text style={styles.footerText}>
          Already Registered?
          <Text onPress={handleOnSigninPress} style={styles.footerLink}>
            {' '}
            Sign in!
          </Text>
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default React.memo(Signup);
