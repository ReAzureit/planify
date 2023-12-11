import React, {useState} from 'react';
import {Linking, SafeAreaView, Text, View} from 'react-native';
import {Button, Checkbox, Input, Title} from '../../../components';
import styles from './styles';
import {
  PRIVACY_POLICY_LINK,
  TERMS_CONDITION_LINK,
} from '../../../constants/links';

const Signup = ({navigation}) => {
  const [agreed, setAgreed] = useState(false);
  const handleCheckboxPress = () => setAgreed(value => !value);
  const handleOnLinkPress = url => Linking.openURL(url);
  return (
    <SafeAreaView style={styles.container}>
      <Title>Join the hub!</Title>
      <Input placeholder="First Name" />
      <Input placeholder="Last Name" />
      <Input placeholder="Email" keyboardType="email-address" />
      <Input placeholder="Password" secureTextEntry />
      <Input placeholder="Confirm Password" secureTextEntry />
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
      <Button type={'blue'}>Create New Account</Button>
      <Text style={styles.footerText}>
        Already Registered?
        <Text
          onPress={() => navigation.navigate('Signin')}
          style={styles.footerLink}>
          {' '}
          Sign in!
        </Text>
      </Text>
    </SafeAreaView>
  );
};

export default React.memo(Signup);
