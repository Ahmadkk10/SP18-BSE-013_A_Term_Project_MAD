import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Login from "../screens/Login";
import Register from "../screens/Register";
import Home from "../screens/Home";
import Message from "../screens/Message";
import Cart from "../screens/Cart";

const Stack = createStackNavigator();

const AuthNavigator = () => (
  
  <Stack.Navigator   mode="modal">
    <Stack.Screen
      name="Home"
      component={Home}
      options={{ headerShown: false }}
    />
    <Stack.Screen name="Login" component={Login} />
    <Stack.Screen name="Register" component={Register} />
    <Stack.Screen name="Message" component={Message} />
    <Stack.Screen name="Cart" component={Cart} />
  </Stack.Navigator>
);

export default AuthNavigator;