/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { PAYODA_JPG, PLAY, REBACCA_ICON, TROPHY, TAP, DAILY_PICK, WIN_UPTO } from '../assets';
import dashboardItems from '../utils/DashboardItem'


import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  FlatList,
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
      <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'flex-start', alignContent: 'flex-start' }}>
        <View style={{ flexDirection: 'row', margin: 5 }}>
          <View style={{ flex: 1, flexDirection: 'column' }}>
            <Text style={{fontSize:15,margin:5}}>
              Hi Rebacca
          </Text>
            <Text style={{fontSize:20,fontWeight:'bold',margin:5}}>
              Welcome back,
            </Text>
          </View>
          <Image
            source={REBACCA_ICON}>
          </Image>
        </View>

        <View style={{ backgroundColor: '#34b8c5', height: 200, margin: 5, borderRadius: 10, flexDirection: 'column' }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
            <Image source={DAILY_PICK} style={{ marginTop: 30, marginLeft: 20 }}></Image>
            <Image source={WIN_UPTO} style={{ marginTop: 30, marginLeft: 20 }}></Image>
          </View>
          <View style={{ top: '25%', flexDirection: 'row', justifyContent: 'space-evenly' }}>

            <View style={{
              backgroundColor: '#ffffff', left: '0%',
              height: 80, width: 70, borderRadius: 4
            }}>

              <Image source={TROPHY} style={{ alignSelf: "center", marginTop: 15 }}></Image>
              <Text style={{ textAlign: "center" }}>Winning Numbers</Text>

            </View>


            <View style={{
              backgroundColor: '#ffffff', left: '0%',
              height: 80, width: 70, borderRadius: 4
            }}>

              <Image source={TAP} style={{ alignSelf: "center", marginTop: 15 }}></Image>
              <Text style={{ textAlign: "center" }}>Learn More</Text>

            </View>

            <View style={{
              backgroundColor: '#ffffff', left: '0%',
              height: 80, width: 70, borderRadius: 4
            }}>
              <Image source={PLAY} style={{ alignSelf: "center", marginTop: 15 }}></Image>
              <Text style={{ textAlign: "center" }}>Play Favourites</Text>
            </View>
          </View>
        </View>
        <View style={{
          flexDirection: "row", justifyContent: 'space-between', marginTop: 50, marginStart: 10
          , marginEnd: 10
        }}>
          <Text style = {{fontSize:20,fontWeight:'bold',alignSelf:'center'}}>Scratch Cards</Text>
          <Text style = {{fontSize:15,color:'green',alignSelf:'center'}}>View All</Text>
        </View>
        <View style={{ flex: 1,marginTop:10 }}>
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
        <View style={{ flex: 1, width: '100%', flexDirection: 'column', margin: 5 }} >
          <Image
            source={this.props.item.imagePath}
            style={styles.dashboardItemImage}>
          </Image>
          <Text style={{ textAlign: "center",color: '#939393' }}>
            Just
          </Text>
          <Text style={{ textAlign: "center",fontSize: 20,fontWeight:"bold" }}>
            {this.props.item.price}
          </Text>

        </View>

      </View >)
  }
}


export default Dashboard;