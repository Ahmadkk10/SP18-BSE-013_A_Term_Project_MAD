import React from 'react';
import { ImageBackground,FlatList, StyleSheet, View, Image, Platform, SafeAreaView } from 'react-native';
import ListItem from "../components/ListItem";
import Constants from 'expo-constants';
import * as Animatable from 'react-native-animatable';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AuthNavigator from "../navigation/AuthNavigator";
import LoginScreen from "../navigation/LoginScreen";
import AppNavigator from "../navigation/AppNavigator";

const features=[
    {
        title: 'Discounts',
        image: require('../assets/iphone.jpg')
        
    },
    {
        title: 'Deals',
        image: require('../assets/iphone.jpg')
      
    },

]

function Features() {
    return (
      <SafeAreaView style={styles.screen} animation ="zoomIn">  
      <Animatable.View>
        <FlatList
        data={features}
        keyExtractor={feature => feature.id}
        renderItem={({item}) => (
         <ListItem
          title={item.title}
          image={item.image}
         />
          
          )}  
      />
      </Animatable.View>
   </SafeAreaView>
    );
}


const styles = StyleSheet.create({
screen:{
paddingTop: Constants.statusBarHeight
},

})
export default Features;