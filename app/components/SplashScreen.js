import React, { Component } from "react";
import { View, Image } from "react-native";
import {PAYODA_JPG} from '../assets'


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
            <View>
                <Image  source={PAYODA_JPG} />
            </View>
        );
    }
}

export default Splash;