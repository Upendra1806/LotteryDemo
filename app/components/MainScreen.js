import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Dashboard from './DashboardScreen';
import LotteryList from './LotteryList';
import LotteryDetailScreen from './LotteryDetailScreen';
import Splash from './SplashScreen';


const Stack = createStackNavigator();

function NavStack() {
  return (
    <Stack.Navigator
      initialRouteName="Splash"
      options={{ headerShown: false }}
    >
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Dashboard"
        component={Dashboard}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="LotteryList"
        component={LotteryList}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="LotteryDetailScreen"
        component={LotteryDetailScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <NavStack />
    </NavigationContainer>
  );
}

