import React from 'react';
import { StyleSheet, Text, View , Dimensions} from 'react-native';
import Home from './screens/Home';
import Features from './screens/Features';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import Card from './components/Card';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import Screen from "./components/Screen";
import Login from "./screens/Login";
import Register from './screens/Register';
import Cart from "./screens/Cart";
import Message from './screens/Message';
import ExpoStatusBar from 'expo-status-bar/build/ExpoStatusBar';
import { TouchableHighlight } from 'react-native-gesture-handler';
import AuthNavigator from "./navigation/AuthNavigator";
import AppNavigator from "./navigation/AppNavigator";


export default function App() {
  return (
   
   <View style={styles.container}>
   <NavigationContainer>
     <AppNavigator />
   </NavigationContainer>
    </View>
    
  );
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex:1,
    height:"auto",
  },

});