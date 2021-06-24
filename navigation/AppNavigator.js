import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Login from "../screens/Login";
import Register from "../screens/Register";
import Account from "../screens/Account";
import Message from "../screens/Message";
import Cart from "../screens/Cart";
import HomeScreen from "./HomeScreen";
import {MaterialCommunityIcons} from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

const AppNavigator = () => (
  
  <Tab.Navigator
  mode="modal"
   tabBarOptions={{
    activeBackgroundColor:"tomato",
    activeTintColor:"white",
    inactiveBackgroundColor:"lightgrey",
    inactiveTintColor:"black",
    style:{height:50},
  }}
   >
    <Tab.Screen
      name="Home"
      component={HomeScreen}
      options={{
        headerShown: false,
        tabBarIcon: () => <MaterialCommunityIcons name='home' size={25} />  }}
    />
    <Tab.Screen name="Login" component={Login} options={{
        tabBarIcon: () => <MaterialCommunityIcons name='login' size={25} />
      }}/>
    <Tab.Screen name="Register" component={Register} options={{
        tabBarIcon: () => <MaterialCommunityIcons name='registered-trademark' size={25} />
      }}/>
    <Tab.Screen name="Message" component={Message} options={{
        tabBarIcon: () => <MaterialCommunityIcons name='message' size={25} />
      }}/>
    <Tab.Screen name="Cart" component={Cart}       options={{
            tabBarIcon: () => <MaterialCommunityIcons name='cart' size={25} />
          }}/>

      <Tab.Screen name="Account" component={Account}       options={{
            tabBarIcon: () => <MaterialCommunityIcons name='account' size={25} />
          }}/>    
  </Tab.Navigator>
);

export default AppNavigator;