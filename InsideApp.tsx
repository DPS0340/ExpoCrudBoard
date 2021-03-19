import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import {
  NavigationContainer,
  DefaultTheme,
  NavigationContainerRef,
} from "@react-navigation/native";
import LoginScreen from "./screens/LoginScreen";
import MainScreen from "./screens/MainScreen";
import RegisterScreen from "./screens/RegisterScreen";
import CheckLoginComponent from "./components/CheckLoginComponent";
import BoardScreen from "./screens/BoardScreen";
import { createStackNavigator } from "@react-navigation/stack";
import { useReduxDevToolsExtension } from "@react-navigation/devtools";

export default function InsideApp() {
  const Stack = createStackNavigator();
  const navigationRef = React.useRef<NavigationContainerRef>(null);

  useReduxDevToolsExtension(navigationRef);
  return (
    <>
      <StatusBar />
      <NavigationContainer ref={navigationRef}>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={({ navigation, route }) => ({
              headerLeft: (props) => null,
              headerRight: (props) => (
                <CheckLoginComponent navigation={navigation} />
              ),
            })}
          />
          <Stack.Screen
            name="Register"
            component={RegisterScreen}
            options={({ navigation, route }) => ({
              headerLeft: (props) => null,
              headerRight: (props) => (
                <CheckLoginComponent navigation={navigation} />
              ),
            })}
          />
          <Stack.Screen
            name="Main"
            component={MainScreen}
            options={({ navigation, route }) => ({
              headerLeft: (props) => null,
              headerRight: (props) => (
                <CheckLoginComponent navigation={navigation} />
              ),
              title: "Main Page",
            })}
          />
          <Stack.Screen
            name="Board"
            component={BoardScreen}
            options={({ navigation, route }) => ({
              headerRight: (props) => (
                <CheckLoginComponent navigation={navigation} />
              ),
              title: "Boards List",
            })}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
