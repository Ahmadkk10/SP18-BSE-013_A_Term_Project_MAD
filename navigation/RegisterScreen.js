import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Register from "../screens/Register";

import { createStackNavigator } from "@react-navigation/stack";
const RegisterStack = createStackNavigator();

const RegisterScreen = () => (

   <RegisterStack.Navigator >
        <RegisterStack.Screen name="Register" component={Register} />
    </RegisterStack.Navigator>

  );



export default RegisterScreen;