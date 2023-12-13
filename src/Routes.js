import {createStackNavigator} from '@react-navigation/stack';
import React, {useEffect, useState} from 'react';
import auth from '@react-native-firebase/auth';
import {Home, Onboarding, Signin, Signup, Task} from './screens';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Image} from 'react-native';
import {icons} from './constants';

const Routes = () => {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();
  const Stack = createStackNavigator();
  const Drawer = createDrawerNavigator();
  const Tab = createBottomTabNavigator();

  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) {
      setInitializing(false);
    }
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) {
    return null;
  }

  const Tabs = () => {
    return (
      <Tab.Navigator
        screenOptions={{headerShown: false, tabBarShowLabel: false}}>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: ({focused}) => (
              <Image
                style={{width: 24, height: 24}}
                source={focused ? icons.icHomeActive : icons.icHomeInactive}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Task"
          component={Task}
          options={{
            tabBarIcon: ({focused}) => (
              <Image
                style={{width: 24, height: 24}}
                source={
                  focused ? icons.icCalendarActive : icons.icCalendarInactive
                }
              />
            ),
          }}
        />
      </Tab.Navigator>
    );
  };

  if (user) {
    return (
      <Drawer.Navigator>
        <Drawer.Screen name="Tabs" component={Tabs} />
      </Drawer.Navigator>
    );
  }

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Onboarding" component={Onboarding} />
      <Stack.Screen name="Signin" component={Signin} />
      <Stack.Screen name="Signup" component={Signup} />
    </Stack.Navigator>
  );
};

export default React.memo(Routes);
