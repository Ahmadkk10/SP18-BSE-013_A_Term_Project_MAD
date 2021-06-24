import React, { useState } from 'react';
import { StyleSheet, Text,View, Image, ImageBackground, ScrollView } from 'react-native';
import AppTextInput from "../components/AppTextInput";
import AppButton from "../components/AppButton";
import Constants from 'expo-constants';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import Card from "../components/Card";
import * as Animatable from 'react-native-animatable';
import Home from "../screens/Home";
import Message from "../screens/Message";
import HomeScreen from '../navigation/HomeScreen';




function Login({navigation}) {
const [email, setEmail] = useState();
const [password, setPassword] = useState();
    return (
    <ScrollView>  
     <Animatable.View animation ="bounceInDown"> 
        <ImageBackground
        source={require("../assets/cover.jpg")}
       style={styles.container}>
            <Image 
            style={styles.logo}
            source={require('../assets/logo.jpg')} />
          <AppTextInput 
              autoCapitalize='none'
              autoCorrect={false}
              icon="email"
              keyboardType="email-address"
              onChangeText={text => setEmail(text)}
              placeholder="Email"
              textContentType="emailAddress"
            />

           <AppTextInput 
              autoCapitalize='none'
              autoCorrect={false}
              icon="lock"
              onChangeText={text => setPassword(text)}
              placeholder="Password"
              secureTextEntry
              textContentType="password"
            />
         <AppButton title="Login" onPress={()=> console.log(email,password)}    onPress={() => navigation.navigate("Home")}/>
         <Text style={styles.tex2}>Forget Password?</Text>
         <Text style={styles.tex}>or</Text>
         <AppButton style={styles.colo} title="Register" color="secondary"    onPress={() => navigation.navigate("Register")}/>
         
        </ImageBackground>

 </Animatable.View>
 </ScrollView>
    );
}


const styles = StyleSheet.create({
    container: {
        padding:10,
        paddingTop: Constants.statusBarHeight,
        height:687,
        width: "auto",
    },
    
    logo: {
        width:80,
        height:80,
        alignSelf: 'center',
        marginTop:50,
        marginBottom: 20,
    },

    tex: {
        alignSelf: "center",
        fontSize: 30,
        fontWeight: "bold",
        color: "black",

    },


    tex2: {
        marginTop:5,
        marginLeft:8,
        fontSize: 20,
        fontWeight: "bold",
        color: "black",

    },

    colo: {
        backgroundColor: "yellow"

    },
})


export default Login;