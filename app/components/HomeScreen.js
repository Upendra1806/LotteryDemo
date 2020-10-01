/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import {
  IC_HOME, IC_TROPHY
  , IC_HOME_F, IC_CHECK_F, IC_PROMOTION_F, IC_LOCATOR_F, IC_TROPHY_F, IC_PROMOTION, IC_CHECK, IC_LOCATOR
} from '../assets';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


import Splash from './SplashScreen';
import Dashboard from './DashboardScreen';
import LotteryList from './LotteryList';
import { Image,StatusBar } from 'react-native'
import { ColorAndroid } from 'react-native/Libraries/StyleSheet/PlatformColorValueTypesAndroid';
import DefaultScreen from './DefaultScreen';
const Tab = createMaterialBottomTabNavigator();

class Home extends Component {

  static navigationOptions = {
    title: "Home",
  }
  render() {
    return (
      <Tab.Navigator
        initialRouteName="Dashboard"
        activeColor="#00691e"
        inactiveColor="#ffffff"
        barStyle={{backgroundColor:'#ffffff'}}
      >
        <Tab.Screen
          name="Dashboard"
          component={Dashboard}
          options={{
            tabBarLabel: 'Dashboard',
            tabBarIcon: ({ focused, horizontal, tintColor }) => {
              const image = focused
                ? IC_HOME_F
                : IC_HOME
              return (
                <Image
                  fadeDuration={0}
                  style={{ width: 22, height: 22 }}
                  source={image} />
              )
            }
          }}
        />
        <Tab.Screen
          name="Promotion"
          component={DefaultScreen}
          options={{
            tabBarIcon: ({ focused, horizontal, tintColor }) => {
              const image = focused
                ? IC_PROMOTION_F
                : IC_PROMOTION
              return (
                <Image
                  fadeDuration={0}
                  style={{ width: 22, height: 22 }}
                  source={image} />
              )
            }
          }}
        />
        <Tab.Screen
          name="Check"
          component={DefaultScreen}
          options={{
            tabBarLabel: 'Check',
            tabBarIcon: ({ focused, horizontal, tintColor }) => {
              const image = focused
                ? IC_CHECK_F
                : IC_CHECK
              return (
                <Image
                  fadeDuration={0}
                  style={{ width: 22, height: 22 }}
                  source={image} />
              )
            }
          }}
        />
        <Tab.Screen
          name="Winning"
          component={LotteryList}
          options={{
            tabBarLabel: 'Winning',
            tabBarIcon: ({ focused, horizontal, tintColor }) => {
              const image = focused
                ? IC_TROPHY_F
                : IC_TROPHY
              return (
                <Image
                  fadeDuration={0}
                  style={{ width: 22, height: 22 }}
                  source={image} />
              )
            }
          }}
        />
        <Tab.Screen
          name="Location"
          component={DefaultScreen}
          options={{
            tabBarLabel: 'Location',
            tabBarIcon: ({ focused, horizontal, tintColor }) => {
              const image = focused
                ? IC_LOCATOR_F
                : IC_LOCATOR
              return (
                <Image
                  fadeDuration={0}
                  style={{ width: 22, height: 22 }}
                  source={image} />
              )
            }
          }}
        />


      </Tab.Navigator>
    );
  }
};


export default Home;