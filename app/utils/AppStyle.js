import { StyleSheet} from 'react-native'

export const styles = StyleSheet.create({
  splashContainer: {
      flex: 1,
      margin: 10,
      backgroundColor: "#e5e5e5",
  },
  splashHeaderText: {
      fontSize: 25,
      textAlign: "center",
      margin: 10,
      fontWeight: "bold",
      marginBottom: 100,
  },
  headerText: {
      fontSize: 20,
      textAlign: "center",
      margin: 10,
      fontWeight: "bold"
  },
  backIcon: {
    alignContent: "center",
    margin: 10,
},
userIcon: {
  margin: 10,
},
  container: {
      flex: 1,
      margin: 10,
      backgroundColor: "#e5e5e5"
  },
  listContainer: {
      flex: 1,
      backgroundColor: "#e5e5e5",
      marginBottom:5,
  },
  listItemContainer: {
    flex: 1,
    backgroundColor: "#ffffff",
    marginBottom:50,
},
  rowContainer: {
      flex: 1,
      flexDirection: 'row',
      backgroundColor: "#e5e5e5",
      justifyContent: 'space-between',

  },
  headerText: {
      fontSize: 20,
      textAlign: "center",
      margin: 10,
      fontWeight: "bold"
  },
  inputText: {
      height: 45,
      width: "95%",
      borderColor: "gray",
      borderWidth: 2
  },
  customButton: {
      width: "93",
      margin: 15,
      borderRadius: 5
  },
  buttonStyle: {
      width: "93%",
      margin: 15,
      marginBottom: 15,
      borderRadius: 5
  },
  slpashImageContainer: {
      margin: 15,
      marginBottom: 100,
      height: 150,
      width: "95%",
      alignContent: "center"
  },
  responseText: {
      width: "95%",
      margin: 10,
      fontSize: 15,
      height: 150

  },
  lotteryItemImage:{
    width : 150,
    height : 150,
    marginStart : 5,
    marginEnd:5
  },
  
  dashboardItemImage:{
    width : 160,
    height : 190,
    alignContent:"center",
    justifyContent:"center",
    margin:5
  },
  lotteryItemTitle:{
     color: 'black',
     fontSize : 15,
     padding: 10,

  },
  rectangle_box:{
    height: 30,
    width: 30,
    position: 'relative',
  },
  lottery_number:{
    fontWeight: 'bold',
    fontSize:15,
    color: 'black',
    position: 'absolute', 
    bottom: 7, 
    left: 10
  },
  lotteryItemSubtitle:{
    color: 'black',
    fontSize : 10,
    padding: 10,
  },

  bottomView:{
      width: '100%',
      flex :1,
      height: 50,
      position: 'absolute',
      bottom: 0
  },
  right_arrow:{
    flex : 1,
    top :'17%',
    marginRight: 10,
    flexDirection : "row",
    justifyContent: "flex-end"
},
list_border: {
  flex: 1,
  backgroundColor: "beige",
  borderWidth: .5,
  flexDirection: 'column',
},
divider:{
  width:'90%',
  borderBottomColor: 'grey',
  borderBottomWidth: .5,
  marginLeft: 1,
  marginRight: 5,
  marginBottom: 10
},

});