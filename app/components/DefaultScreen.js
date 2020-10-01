import { View, Text } from 'react-native'
import React, { Component } from 'react'

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
                <Text style = {{ fontSize:20,alignSelf:"center",textAlign:"center"}}>
                    In this POC, only Home and Winning screen are available.
                </Text>

            </View>
        )
    }
}

export default DefaultScreen;


