import React from 'react'
import { Component } from 'react'
import { View, FlatList, bottomDivider, ListItem, Image, Text, StyleSheet, ImageBackground } from 'react-native'

import { styles } from '../utils/AppStyle'
import lotteryListData from '../utils/LotteryListItem'
import children from '../utils/item'
import { BACK_ARROW_PNG, RECTANGLE_PNG, RIGHT_ARROW, USER_ICON, BUTTON_SCAN, DECADE_OF_DOLLARS, BANK_A_MILLION, POWER_BALL, CASH_FOR_LIFE, SUN_ICON, MOON_ICON, PICK_FOUR, CASH_FIVE, MEGA_MILLION, PICK_THREE } from '../assets'
import { TouchableOpacity } from 'react-native-gesture-handler'

class LotteryListItem extends Component {


    getImage = (param) => {

        let image = DECADE_OF_DOLLARS;

        switch (param) {

            case 'pick3':
                image = PICK_THREE
                break;

            case 'pick4':
                image = PICK_FOUR
                break;

            case 'cash5':
                image = CASH_FIVE
                break;

            case 'megaMillions':
                image = MEGA_MILLION
                break;

            case 'powerBall':
                image = POWER_BALL
                break;

            case 'cash4Life':
                image = CASH_FOR_LIFE
                break;

            case 'moneyBall':
                image = MEGA_MILLION
                break;

            case 'decadesofDollars':
                image = DECADE_OF_DOLLARS
                break;

            case 'bankAMillion':
                image = BANK_A_MILLION
                break;

            default:
                image = DECADE_OF_DOLLARS

        }
        return image

    }

    getMonth = (param) => {
        let arr = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
        return arr[param];
    }

    getSubTitleData = (param) => {
        let arr = param.split(" ")
        let date = arr[1].split("/");
        let month = this.getMonth(date[0] - 1)
        return arr[0] + " " + month + " " + date[1]
    }

    getTimeIcon = (param) => {
        if (param == 'Day') {
            return SUN_ICON
        } else {
            return MOON_ICON
        }
    }



    render() {
        console.log("Length " + this.props.item.children.length)
        if (this.props.item.children.length == 0) {
            return (
                <View style={{ margin: 5, flexDirection: 'row' }}>
                    <Image
                        source={this.getImage(this.props.item.name)}
                        style={styles.lotteryItemImage}>
                    </Image>
                    <View style={{ flex: 1, flexDirection: 'column', backgroundColor: "#ffffff", }}>
                        <Text style={styles.lotteryItemTitle}>
                            {this.props.item.name}
                        </Text>
                        <View style={{ flexDirection: 'row', justifyContent: "center", marginLeft: 5, marginRight: 5 }}>
                            <View style={styles.divider} >
                            </View>
                            <View
                                style={{ marginRight: 5, alignSelf: "flex-end" }}>
                                <Image
                                    source={RIGHT_ARROW}>
                                </Image>
                            </View>
                        </View>
                        <View style={{ flex: 1, flexDirection: 'row' }} >
                            <Text style={styles.lotteryItemSubtitle}>
                                {this.getSubTitleData(this.props.item.attributes.drawdate)}
                            </Text>
                            <ImageBackground source={RECTANGLE_PNG}
                                style={styles.rectangle_box}>
                                <Text
                                    style={styles.lottery_number}>
                                    {this.props.item.attributes.N1}</Text>
                            </ImageBackground>
                            <ImageBackground source={RECTANGLE_PNG}
                                style={styles.rectangle_box}>
                                <Text
                                    style={styles.lottery_number}>
                                    {this.props.item.attributes.N2}</Text>
                            </ImageBackground>
                            <ImageBackground source={RECTANGLE_PNG}
                                style={styles.rectangle_box}>
                                <Text
                                    style={styles.lottery_number}>
                                    {this.props.item.attributes.N3}</Text>
                            </ImageBackground>

                            <ImageBackground source={RECTANGLE_PNG}
                                style={styles.rectangle_box}>
                                <Text
                                    style={styles.lottery_number}>
                                    {this.props.item.attributes.N4}</Text>
                            </ImageBackground>
                        </View>
                    </View>

                </View>)
        } else {
            return (
                <View style={{ margin: 5, flexDirection: 'row' }}>
                    <Image
                        source={this.getImage(this.props.item.name)}
                        style={styles.lotteryItemImage}>
                    </Image>
                    <View style={{ flex: 1, flexDirection: 'column', backgroundColor: "#ffffff", }}>
                        <View style={{ flexDirection: 'row', marginLeft: 5, marginRight: 5, alignContent: "center", marginTop: 10 }} >
                            <Image style={{ marginTop: 10 }} source={this.getTimeIcon(this.props.item.children[0].attributes.drawtime)}></Image>
                            <Text style={styles.lotteryItemSubtitle}>
                                {this.getSubTitleData(this.props.item.children[0].attributes.drawdate)}
                            </Text>
                            <ImageBackground source={RECTANGLE_PNG}
                                style={styles.rectangle_box}>
                                <Text
                                    style={styles.lottery_number}>
                                    {this.props.item.children[0].attributes.N1}</Text>
                            </ImageBackground>
                            <ImageBackground source={RECTANGLE_PNG}
                                style={styles.rectangle_box}>
                                <Text
                                    style={styles.lottery_number}>
                                    {this.props.item.children[0].attributes.N2}</Text>
                            </ImageBackground>
                            <ImageBackground source={RECTANGLE_PNG}
                                style={styles.rectangle_box}>
                                <Text
                                    style={styles.lottery_number}>
                                    {this.props.item.children[0].attributes.N3}</Text>
                            </ImageBackground>
                            {this.props.item.children[0].attributes.N4 != null ?

                                <ImageBackground source={RECTANGLE_PNG}
                                    style={styles.rectangle_box}>
                                    <Text
                                        style={styles.lottery_number}>
                                        {this.props.item.children[0].attributes.N4}</Text>
                                </ImageBackground> : null
                            }
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: "center", marginLeft: 5, marginRight: 5 }}>
                            <View style={styles.divider} >
                            </View>
                            <View
                                style={{ marginRight: 5, alignSelf: "flex-end" }}>
                                <Image
                                    source={RIGHT_ARROW}>
                                </Image>
                            </View>
                        </View>
                        <View style={{ flex: 1, flexDirection: 'row', marginStart: 5 }} >
                            <Image style={{ marginTop: 10 }} source={this.getTimeIcon(this.props.item.children[1].attributes.drawtime)}></Image>

                            <Text style={styles.lotteryItemSubtitle}>
                                {this.getSubTitleData(this.props.item.children[1].attributes.drawdate)}
                            </Text>
                            <ImageBackground source={RECTANGLE_PNG}
                                style={styles.rectangle_box}>
                                <Text
                                    style={styles.lottery_number}>
                                    {this.props.item.children[0].attributes.N1}</Text>
                            </ImageBackground>
                            <ImageBackground source={RECTANGLE_PNG}
                                style={styles.rectangle_box}>
                                <Text
                                    style={styles.lottery_number}>
                                    {this.props.item.children[0].attributes.N2}</Text>
                            </ImageBackground>
                            <ImageBackground source={RECTANGLE_PNG}
                                style={styles.rectangle_box}>
                                <Text
                                    style={styles.lottery_number}>
                                    {this.props.item.children[0].attributes.N3}</Text>
                            </ImageBackground>
                            {this.props.item.children[0].attributes.N4 != null ?

                                <ImageBackground source={RECTANGLE_PNG}
                                    style={styles.rectangle_box}>
                                    <Text
                                        style={styles.lottery_number}>
                                        {this.props.item.children[0].attributes.N4}</Text>
                                </ImageBackground> : null
                            }
                        </View>
                    </View>

                </View>)
        }
    }
}


class LotteryListItem2 extends Component {

    render() {
        return (
            <View style={{ margin: 5, flexDirection: "column" }}>
                <Image
                    source={this.props.item.imageUrl} style={{ flex: 1, width: "100%", margin: 5 }}>
                </Image>
            </View>)
    }
}

const url = "https://www.valottery.com/resulttable.xml"
var XMLParser = require('react-xml-parser');
var xmlData = ""


class LotteryList extends Component {
    static navigationOptions = {
        title: "LotteryList",
    }

    state = {
        children: null,
        childrenList: null,
    }

    render() {
        if (this.state.children != null && this.state.children.children != null) {

            return (
                <View style={{ flex: 1, flexDirection: "column" }}>
                    <View style={{ flexDirection: "row", height: 60, justifyContent: "space-between", marginTop: 10 }}>
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
                                data={this.state.children.children}
                                renderItem={({ item, index }) => {
                                    return (
                                        <TouchableOpacity onPress={() =>
                                            this.props.navigation.navigate('LotteryDetailScreen')}>
                                            <LotteryListItem
                                                item={item} index={index}>
                                            </LotteryListItem>
                                        </TouchableOpacity>
                                    )
                                }
                                }
                            />
                        </View>
                    </View>
                    <Image source={BUTTON_SCAN} style={{ alignSelf: 'flex-end', margin: 10, position: "absolute", top: '80%' }}>
                    </Image>
                </View>);
        } else {

            return (
                <View style={{ flex: 1, flexDirection: "column" }}>
                    <View style={{ flexDirection: "row", height: 60, justifyContent: "space-between", marginTop: 10 }}>
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
                                        <TouchableOpacity onPress={() =>
                                            this.props.navigation.navigate('LotteryDetailScreen')}>
                                            <LotteryListItem2
                                                item={item} index={index}>
                                            </LotteryListItem2>
                                        </TouchableOpacity>
                                    )
                                }
                                }
                            />
                        </View>
                    </View>
                    <Image source={BUTTON_SCAN} style={{ alignSelf: 'flex-end', margin: 10, position: "absolute", top: '80%' }}>
                    </Image>
                </View>);
        }
    }

    componentDidMount() {

        this.getResponseData();
    }

    async getResponseData() {
        xmlData = await this.getResponse(url)
        console.log("Sample XML " + xmlData)
        var xml = new XMLParser().parseFromString(xmlData);
        console.log(xml);
        var jsonString = JSON.stringify(xml)
        console.log("JSON String " + jsonString)
        var data = JSON.parse(jsonString);
        this.state.children = data
        this.setState({
            childrenList: this.state.children.children
        })

        this.state.childrenList.forEach(element => {
            console.log("Children Name " + element.name)
        });


    }

    async getResponse(url) {
        return fetch(url)
            .then(response => response.text())

    }

}

export default LotteryList;