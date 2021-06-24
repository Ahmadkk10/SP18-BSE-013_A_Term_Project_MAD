import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Home from "../screens/Home";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "../screens/Login";
import Register from "../screens/Register";


const HomeStack = createStackNavigator();


const HomeScreen = () => (

   <HomeStack.Navigator >
        <HomeStack.Screen name="Home" component={Home} 
        options={{
          headerShown: false }}/>
          <HomeStack.Screen name="Login" component={Login} />
          <HomeStack.Screen name="Register" component={Register} />
    </HomeStack.Navigator>

  );
  
export default HomeScreen;