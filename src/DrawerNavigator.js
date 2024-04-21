import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from 'D:\ReactNative\Demo\screens\HomeScreen.js';
import DetailsScreen from './screens/DetailsScreen';
import CustomDrawerNavigation from './CustomDrawerNavigator';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator drawerContent={(props) => <CustomDrawerNavigation {...props} />}>
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Details" component={DetailsScreen} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;