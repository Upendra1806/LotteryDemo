import { View, Text,Image } from 'react-native'
import React, { Component } from 'react'
import { DEFAULT_ICON } from '../assets';

class DefaultScreen extends Component {

    static navigationOptions = {
        title: 'DefaultScreen',
      }

    render() {
        return (
            <View style={{
                flex: 1, flexDirection: "column",
                justifyContent: "center", alignContent: "center"
            }}>
                <Image
                source = {DEFAULT_ICON}
                style = {{alignSelf:"center"}}
                
                ></Image>
                <Text style = {{ fontSize:20,fontWeight:"bold",alignSelf:"center",textAlign:"center"}}>
                We are builing new us,
                </Text>
                <Text style = {{ fontSize:16,alignSelf:"center",textAlign:"center",color:"#909090"}}>
                Please stay tuned for more…
                </Text>

            </View>
        )
    }
}

export default DefaultScreen;


