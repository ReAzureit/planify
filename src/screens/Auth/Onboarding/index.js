import React from 'react';
import {Image, Text, View} from 'react-native';
import {images} from '../../../constants';
import styles from './styles';
import {Button} from '../../../components';

const Onboarding = ({navigation}) => {
  const handleLoginPress = () => navigation.navigate('Signin');
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={images.Onboarding} />
      <View style={styles.content}>
        <Text style={styles.title}>Best task management app</Text>
        <Text style={styles.subTitle}>
          Get organized by sorting out all your tasks and boost your
          productivity.
        </Text>
        <Button onPress={handleLoginPress} type={'purple'}>
          Log in
        </Button>
        <Button type={'blue'}>Get Started</Button>
      </View>
    </View>
  );
};

export default React.memo(Onboarding);
