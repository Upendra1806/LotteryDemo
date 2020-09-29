/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { HOME_SVG, PAYODA_JPG, SAMPLE_SVG, LOCATION_SVG } from '../assets';
import SvgUri from 'react-native-svg-uri'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {
  StatusBar,
} from 'react-native';

import Splash from './SplashScreen';
import Dashboard from './DashboardScreen';
import LotteryList from './LotteryList';
const Tab = createMaterialBottomTabNavigator();

const Home: () => React$Node = () => {
  return (
          <Tab.Navigator
            initialRouteName="Dashboard"
            activeColor="#e91e63"
            style={{ backgroundColor: 'tomato' }}
          >
            <Tab.Screen
              name="Dashboard"
              component={Dashboard}
              options={{
                tabBarLabel: 'Home',
                tabBarIcon: ({ color }) => (
                  <MaterialCommunityIcons name="home" color={color} size={26} />
                ),
              }}
            />
             <Tab.Screen
              name="Promotion"
              component={Dashboard}
              options={{
                tabBarLabel: 'Promotion',
                tabBarIcon: ({ color }) => (
                  <MaterialCommunityIcons name="home" color={color} size={26} />
                ),
              }}
            />
             <Tab.Screen
              name="Check"
              component={LotteryList}
              options={{
                tabBarLabel: 'Check',
                tabBarIcon: ({ color }) => (
                  <MaterialCommunityIcons name="List" color={color} size={26} />
                ),
              }}
            />
            <Tab.Screen
              name="Winning"
              component={Splash}
              options={{
                tabBarLabel: 'Winning',
                tabBarIcon: ({ color }) => (
                  <MaterialCommunityIcons name="bell" color={color} size={26} />
                ),
              }}
            />
            <Tab.Screen
              name="Location"
              component={Splash}
              options={{
                tabBarLabel: 'Location',
                tabBarIcon: ({ color }) => (
                  <MaterialCommunityIcons name="account" color={color} size={26} />
                ),
              }}
            />
          </Tab.Navigator>
  );
};


export default Home;