import React, { useState } from 'react';
import { StyleSheet,View, Text, Image,  ImageBackground  } from 'react-native';
import AppTextInput from "../components/AppTextInput";
import AppButton from "../components/AppButton";
import Screen from "../components/Screen";
import Constants from 'expo-constants';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import Card from "../components/Card";
import { ScrollView } from 'react-native-gesture-handler';
import * as Animatable from 'react-native-animatable';
import Home from "./Home";
import Message from "./Message";
import TabNavigator from '../navigation/TabNavigator';
import AuthNavigator from '../navigation/AuthNavigator';


function Register({navigation}) {
    const [name, setName] = useState();
    const [number, setNumber] = useState();
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
                  icon="verified-user"
                  keyboardType="name"
                  onChangeText={text => setName(text)}
                  placeholder="Name"
                  textContentType="name"
                />


                <AppTextInput 
                  autoCapitalize='none'
                  autoCorrect={false}
                  icon="phone"
                  keyboardType="number"
                  onChangeText={text => setNumber(text)}
                  placeholder="Ph Number"
                  textContentType="number"
                />

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
             <AppButton title="Register" onPress={()=> console.log(name,number,email,password)}    onPress={() => navigation.navigate("Login")}/>
             <Text style={styles.tex}>or</Text>
             <AppButton style={styles.colo} title="Login" color="secondary"    onPress={() => navigation.navigate("Login")}/>

             
            </ImageBackground>
   
    </Animatable.View>

             
    </ScrollView>
        );
    }
    

    const styles = StyleSheet.create({
        container: {
            padding:10,
            paddingTop: Constants.statusBarHeight,
            height: 687,
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
    
        colo: {
            backgroundColor: "yellow"
    
        },
    })


export default Register;