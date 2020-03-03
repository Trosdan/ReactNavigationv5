import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';

import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

import Home from './pages/Home';
import Notice from './pages/Notice';

import Profile from './pages/Profile';

import Settings from './pages/Settings';

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

const CustomDrawer = props => (
  <DrawerContentScrollView {...props}>
    <DrawerItemList {...props} />
    <DrawerItem label="Logout" onPress={() => {}} />
  </DrawerContentScrollView>
);

const AppContainer = () => (
  <NavigationContainer>
    <Drawer.Navigator drawerContent={CustomDrawer}>
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

const Router = ({signed}) => {
  return signed ? AppContainer() : SignContainer();
};

export default Router;
