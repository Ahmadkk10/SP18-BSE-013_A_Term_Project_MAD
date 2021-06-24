import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Login from "../screens/Login";
import Register from "../screens/Register";
import Home from "../screens/Home";
import Message from "../screens/Message";
import Cart from "../screens/Cart";
import {MaterialCommunityIcons} from '@expo/vector-icons';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';

const HomeStack = createStackNavigator();
const RegisterStack = createStackNavigator();
const LoginStack = createStackNavigator();
const MessageStack = createStackNavigator();
const CartStack = createStackNavigator();
const Tab = createBottomTabNavigator();


const HomeStackScreen = () => (
  <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={Home} />
  </HomeStack.Navigator>
);

const RegisterStackScreen = () => (
  <RegisterStack.Navigator>
      <RegisterStack.Screen name="Register" component={Register} />
  </RegisterStack.Navigator>
);

const LoginStackScreen = () => (
  <LoginStack.Navigator>
      <LoginStack.Screen name="Login" component={Login} />
  </LoginStack.Navigator>
);


const MessageStackScreen = () => (
  <MessageStack.Navigator>
      <MessageStack.Screen name="Message" component={Message} />
  </MessageStack.Navigator>
);


const CartStackScreen = () => (
  <CartStack.Navigator>
      <CartStack.Screen name="Cart" component={Cart} />
  </CartStack.Navigator>
);


export default function TabNavigator() {
  return (

    <NavigationContainer>
    <Tab.Navigator>
           <Tab.Screen name="Home" component={HomeStackScreen} />
           <Tab.Screen name="Message" component={MessageStackScreen} />
           <Tab.Screen name="Cart" component={CartStackScreen} />
       </Tab.Navigator>
      
      </NavigationContainer>

  );
}






