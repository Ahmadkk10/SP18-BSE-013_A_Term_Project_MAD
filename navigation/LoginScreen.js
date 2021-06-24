import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Login from "../screens/Login";
import { createStackNavigator } from "@react-navigation/stack";

const LoginStack = createStackNavigator();

const LoginScreen = () => (

   <LoginStack.Navigator >
        <LoginStack.Screen name="Login" component={Login} />
    </LoginStack.Navigator>

  );

export default LoginScreen;