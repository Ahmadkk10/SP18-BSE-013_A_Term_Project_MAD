import React from 'react';
import { ImageBackground, StyleSheet, View, Text, Image , Button, ScrollView} from 'react-native';
import Constants from 'expo-constants';
import Card from '../components/Card';
import colors from "../components/colors";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import * as Animatable from 'react-native-animatable';


function Cart({navigation}) {
    return (
      <ScrollView>   
    <ImageBackground 
        style={styles.background}
        source={require('../assets/cover.jpg')}>
                 
    <Animatable.View style={styles.img1} animation ="bounceInDown">
        
            <Text style={styles.scens}>My Cart</Text>
        <Animatable.View style={styles.containers} animation ="zoomIn">
            <Text style={styles.scens2}>There are no items in this cart</Text>
            <Button style={styles.btn} title="Continue Shopping"  onPress={() => navigation.navigate("Login")}/>
         </Animatable.View>
    </Animatable.View>

<Animatable.View style={styles.img11} animation ="bounceIn">
   <Text style={styles.scens3}>Just For You</Text>
     <Animatable.View style={styles.container} animation ="bounceInUp">   
         <Card
           image={require("../assets/iphone.jpg")}
           des="IPHONE 12 Pro MAX With High Fps with 120Hz 6GB Ram 1 Year Official Warranty PTA Approved"
           price="$80"
           onPress={() => navigation.navigate("Login")}
          />   
              <Card
           image={require("../assets/airpod.jpg")}
           des="New i12 TWS Wireless Headphones Airpods Tws Wireless Bluetooth 5.0 Earphone Sport Headset"
           price="$90"
           onPress={() => navigation.navigate("Login")}
          />   
       </Animatable.View> 


       <Animatable.View style={styles.container} animation ="bounceInUp">   
         <Card
           image={require("../assets/airpod.jpg")}
           des="New i12 TWS Wireless Headphones Airpods Tws Wireless Bluetooth 5.0 Earphone Sport Headset"
           price="$100"
           onPress={() => navigation.navigate("Login")}
          />   
              <Card
           image={require("../assets/iphone.jpg")}
           des="IPHONE 12 Pro MAX With High Fps with 120Hz 6GB Ram 1 Year Official Warranty PTA Approved"
           price="$800"
           onPress={() => navigation.navigate("Login")}
          />   
       </Animatable.View> 
    </Animatable.View>

 
        </ImageBackground>
</ScrollView>
    );
}


const styles = StyleSheet.create({
    background: {
        flex: 1,
        width:"100%",
        height:"auto",
        paddingTop: Constants.statusBarHeight
    },    
    
    container:{
    flexDirection:'row',
    padding:5,
    margin: 5,
    marginLeft: 45,
    },

    containers: {
      justifyContent:'center',
      alignItems:'center',
    },
    
    img: {
      width: "100%",
      height: 200,
    },
    
    img1: {
        width:"100%",
        height:170,
        backgroundColor:"purple",
    },

    img11: {
        marginTop:8,
        width:"100%",
        height:"auto",
        backgroundColor:"red",
        alignItems:"center",
        justifyContent:"center"
    },

    scens: {
        fontSize: 18,
        fontWeight: "bold",
        marginLeft:12,
        marginTop: 12,
        color: "white",
    },

    scens2: {
        padding:20,
        fontSize: 18,
        color: "white",
    },

    scens3: {
        padding:15,
        fontSize: 20,
        color: "white",
        fontWeight:"bold",
    },


    btn: {
            backgroundColor: colors.primary,
            borderRadius: 25,
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            padding: 20,
            fontWeight:"bold",
          
        },
})

export default Cart;