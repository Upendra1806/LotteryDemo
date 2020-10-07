import React from 'react'
import { Component } from 'react'
import { View, FlatList, bottomDivider, ListItem, Image, Text, StyleSheet, ImageBackground } from 'react-native'

import { styles } from '../utils/AppStyle'
import lotteryListData from '../utils/LotteryListItem'
import { BACK_ARROW_PNG, BUTTON_SCAN, BUTTON_SHARE, LOTTERY, RECTANGLE_PNG, RIGHT_ARROW, SEARCH_ICON, USER_ICON } from '../assets'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Button } from 'react-native-paper'

class LotteryListItem extends Component {

    render() {
        return (
            <View style={{ backgroundColor: "#ffffff", margin: 5 }}>


                <View style={{ flex: 1, flexDirection: 'row', margin: 5 }}>

                    <View style={{ flex: 1, flexDirection: 'column' }}>
                        <Text style={styles.lotteryItemTitle}>
                            {this.props.item.title}
                        </Text>
                        <View style={{ flexDirection: 'row',justifyContent:"center",marginLeft:5,marginRight:5 }}>
                            <View style={styles.divider} >
                            </View>
                            <View
                                style={{marginLeft:5,marginRight:5,alignSelf:"flex-end"}}>
                                <Image
                                    source={RIGHT_ARROW}>
                                </Image>
                            </View>
                        </View>
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


class LotteryDetailScreen extends Component {
    static navigationOptions = {
        title: "LotteryDetailScreen",
    }

    render() {
        return (
            <View style={{ flex: 1, flexDirection: "column" }}>
                <View style={{
                    flexDirection: "row", height: 55,
                    alignContent:"center",
                    justifyContent: "space-between", margin: 10
                }}>
                    <View style = {{alignSelf:"center"}}>
                    <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                        <Image source={BACK_ARROW_PNG} style={styles.backIcon}></Image>
                    </TouchableOpacity>
                    </View>
                    <Text style={styles.headerText}>Winning Numbers</Text>
                    <Image source={SEARCH_ICON} style={styles.userIcon}></Image>
                    <Image source={USER_ICON} style={styles.userIcon}></Image>
                </View>
                <Image source={LOTTERY} style={{ width: '95%', margin: 10 }}></Image>
                <View style={styles.container}>

                    <View style={styles.listContainer}>
                        <FlatList
                            data={lotteryListData}
                            renderItem={({ item, index }) => {
                                return (
                                    <LotteryListItem
                                        item={item} index={index}>
                                    </LotteryListItem>)
                            }}
                        />
                    </View>
                </View>
                <Image source={BUTTON_SHARE} style={styles.floatingButton}>
                </Image>

            </View>

        );
    }


  



}

export default LotteryDetailScreen;