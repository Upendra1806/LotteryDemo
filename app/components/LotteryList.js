import React from 'react'
import { Component } from 'react'
import { View, FlatList, bottomDivider, ListItem, Image, Text, StyleSheet, ImageBackground } from 'react-native'

import { styles } from '../utils/AppStyle'
import lotteryListData from '../utils/LotteryListItem'
import { BACK_ARROW_PNG, RECTANGLE_PNG, RIGHT_ARROW, USER_ICON,BUTTON_SCAN } from '../assets'
import { TouchableOpacity } from 'react-native-gesture-handler'

class LotteryListItem extends Component {

    render() {
        return (
            <View style ={{backgroundColor: "#ffffff",margin: 5}}>
                <View
                    style={styles.right_arrow}
                >
                    <Image
                        source={RIGHT_ARROW}>
                    </Image>
                </View>

                <View style={{  flexDirection: 'row' }}>
                    <Image
                        source={this.props.item.imagePath}
                        style={styles.lotteryItemImage}>
                    </Image>

                    <View style={{ flex: 1, flexDirection: 'column' }}>
                        <Text style={styles.lotteryItemTitle}>
                            {this.props.item.title}
                        </Text>
                        <View style={styles.divider}></View>
                        <View style={{ flex: 1, flexDirection: 'row' }} >
                            <Text style={styles.lotteryItemSubtitle}>
                                {this.props.item.subTitle}
                            </Text>
                            <ImageBackground source={RECTANGLE_PNG}
                                style={styles.rectangle_box}>
                                <Text
                                    style={styles.lottery_number}>
                                    {this.props.item.number_one}</Text>
                            </ImageBackground>
                            <ImageBackground source={RECTANGLE_PNG}
                                style={styles.rectangle_box}>
                                <Text
                                    style={styles.lottery_number}>
                                    {this.props.item.number_two}</Text>
                            </ImageBackground>
                            <ImageBackground source={RECTANGLE_PNG}
                                style={styles.rectangle_box}>
                                <Text
                                    style={styles.lottery_number}>
                                    {this.props.item.number_three}</Text>
                            </ImageBackground>
                            <ImageBackground source={RECTANGLE_PNG}
                                style={styles.rectangle_box}>
                                <Text
                                    style={styles.lottery_number}>
                                    {this.props.item.number_four}</Text>
                            </ImageBackground>
                        </View>
                    </View>
                </View>
            </View>)
    }
}


class LotteryListItem2 extends Component {

    render() {
        return (
            <View style ={{margin: 5,flexDirection: "column"}}>
                          <Image
                        source={this.props.item.imageUrl}  style = {{flex:1,width:'100%',margin:5}}>
                    </Image>
            </View>)
    }
}



class LotteryList extends Component {
    static navigationOptions = {
        title: "LotteryList",
    }

    render() {
        return (
            <View style={{ flex: 1, flexDirection: "column" }}>
                <View style={{ flexDirection: "row", height: 60, justifyContent: "space-between",marginTop :10 }}>
                    <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                        <Image source={BACK_ARROW_PNG} style={styles.backIcon}
                        ></Image>
                    </TouchableOpacity>
                    <Text style={styles.headerText}>Winning Numbers</Text>
                    <Image source={USER_ICON} style={styles.userIcon}></Image>
                </View>
                <View style={styles.container}>
                    <View style={styles.listContainer}>
                        <FlatList
                            data={lotteryListData}
                            renderItem={({ item, index }) => {
                                return (
                                    <TouchableOpacity onPress={() => this.props.navigation.navigate('LotteryDetailScreen')}>
                                        <LotteryListItem2
                                            item={item} index={index}>
                                        </LotteryListItem2>
                                    </TouchableOpacity>
                                )

                            }}
                        />
                    </View>
                </View>
                <Image source = {BUTTON_SCAN} style = {{alignSelf:'flex-end',margin:10,position:"absolute",top: '80%'}}>
                 </Image>
            </View>

        );
    }

}

export default LotteryList;