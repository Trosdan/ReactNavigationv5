import React, { useContext } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Splash from './pages/Splash';

import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

import Home from './pages/Home';
import Notice from './pages/Notice';

import Profile from './pages/Profile';

import Settings from './pages/Settings';

import CustomDrawer from './components/CustomDrawer';

import { AuthProvider } from './index';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Notice" component={Notice} />
    </Stack.Navigator>
  );
};

const SettingsStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Settings" component={Settings} />
    </Stack.Navigator>
  );
};

const HomeTab = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeStack} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

const AppContainer = propsContainer => (
  <NavigationContainer>
    <Drawer.Navigator
      drawerContent={props => CustomDrawer({ ...props, ...propsContainer })}>
      <Drawer.Screen name="Home" component={HomeTab} />
      <Drawer.Screen name="Settings" component={SettingsStack} />
    </Drawer.Navigator>
  </NavigationContainer>
);

const SignContainer = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="SignUp" component={SignUp} />
    </Stack.Navigator>
  </NavigationContainer>
);

const LoadingContainer = () => (
  <NavigationContainer>
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Loading" component={Splash} />
    </Stack.Navigator>
  </NavigationContainer>
);

function Router({ signed, loading, ...restProps }) {
  const AuthConsumer = useContext(AuthProvider);

  return loading
    ? LoadingContainer()
    : signed
    ? AppContainer({ ...restProps, AuthConsumer })
    : SignContainer();
}

export default Router;
