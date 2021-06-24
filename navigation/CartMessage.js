import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";
import Cart from "../screens/Cart";


const CartStack = createStackNavigator();
const CartMessage = () => (
    <CartStack.Navigator>
        <CartStack.Screen name="Cart" component={Cart} />
    </CartStack.Navigator>
  );
  
export default CartMessage;