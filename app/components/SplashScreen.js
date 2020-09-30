import React, { Component } from "react";
import { View, Image } from "react-native";
import {PAYODA_JPG, SPLASH_IMAGE} from '../assets'


var Timer = null
const API_PARAMETER = 'apiParameter';


 class Splash extends Component {

    componentDidMount() {
        Timer = setTimeout(() => {
            this.props.navigation.navigate('Dashboard');
        }, 4000)
    }

    componentWillUnmount() {
        clearTimeout(Timer)
    }

    render() {
        return (
            <View style={{flex:1,justifyContent:"center",alignContent:"center",backgroundColor:'#ffffff'}}>
                <Image  source={SPLASH_IMAGE} style = {{alignSelf:"center"}} />
            </View>
        );
    }
}

export default Splash;