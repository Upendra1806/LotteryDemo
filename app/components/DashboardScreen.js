/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { PAYODA_JPG, PLAY, REBACCA_ICON, TROPHY, TAP, DAILY_PICK, WIN_UPTO, DASHBOARD_PNG } from '../assets';
import dashboardItems from '../utils/DashboardItem'


import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  FlatList, ImageBackground
} from 'react-native';

import { Component } from 'react';
import { styles } from '../utils/AppStyle'
import { TouchableOpacity } from 'react-native-gesture-handler';

class Dashboard extends Component {

  static navigationOptions = {
    title: "Dashboard",
  }

  render() {
    return (
      <View style={{ flex: 1, flexDirection: 'column', alignContent: 'center' }}>

        <View style={{ flexDirection: 'row', margin: 5 }}>
          <View style={{ flex: 1, flexDirection: 'column' }}>
            <Text style={{ fontSize: 15, marginStart: 10, marginTop: 5 }}>
              Hi Rebacca
          </Text>
            <Text style={{ fontSize: 20, fontWeight: 'bold', marginStart: 10, marginTop: 5 }}>
              Welcome back,
            </Text>
          </View>
          <Image
            source={REBACCA_ICON}>
          </Image>
        </View>

        <Image source={DASHBOARD_PNG} style={{ marginStart:15,marginEnd: 15, alignSelf: "center" , borderTopLeftRadius:5,
             borderTopRightRadius:5}}></Image>

        <View style={{
          flexDirection: "row", justifyContent: 'space-between', marginTop: 5, marginStart: 15
          , marginEnd: 15
        }}>
          <Text style={{ fontSize: 20, fontWeight: 'bold', alignSelf: 'center' }}>Scratch Cards</Text>
          <Text style={{ fontSize: 15, color: 'green', alignSelf: 'center' }}>View All</Text>
        </View>
        <View style={{ flex:1,marginTop: 10, justifyContent: "center", alignItems: "center" }}>
          <FlatList
            data={dashboardItems}
            renderItem={({ item, index }) => {
              return (
                <TouchableOpacity onPress={() => this.props.navigation.navigate('LotteryList')}>
                  <DashboardListItem
                    item={item} index={index}>
                  </DashboardListItem>
                </TouchableOpacity>
              )
            }}
            numColumns={2}
          />
        </View>
      </View>

    );
  }
}

class DashboardListItem extends Component {
  static navigationOptions = {
    title: 'Dashboard',
  }
  render() {
    return (
      <View>
        <View style={{ flex: 1, width:"99%" }} >
          <Image
            source={this.props.item.imagePath}
            style={styles.dashboardItemImage}>
          </Image>
        </View>
      </View >)
  }
}


export default Dashboard;