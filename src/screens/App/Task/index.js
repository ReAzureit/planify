import React from 'react';
import {SafeAreaView, Text} from 'react-native';

const Task = ({navigation}) => {
  return (
    <SafeAreaView>
      <Text>Task</Text>
    </SafeAreaView>
  );
};

export default React.memo(Task);
