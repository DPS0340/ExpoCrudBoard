import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import {
  InitialState,
  NavigationContainer,
  DefaultTheme,
  NavigationContainerRef,
} from "@react-navigation/native";
import LoginScreen from "./screens/LoginScreen";
import MainScreen from "./screens/MainScreen";
import RegisterScreen from "./screens/RegisterScreen";
import CheckLoginComponent from "./components/CheckLoginComponent";
import BoardsScreen from "./screens/BoardsScreen";
import AsyncStorage from "@react-native-community/async-storage";
import { createStackNavigator } from "@react-navigation/stack";
import { useReduxDevToolsExtension } from "@react-navigation/devtools";
import PostScreen from "./screens/PostScreen";
import BoardScreen from "./screens/BoardScreen";
import linkingPrefixes from "./linkingPrefixes";

export default function InsideApp() {
  const Stack = createStackNavigator();
  const navigationRef = React.useRef<NavigationContainerRef>(null);
  const NAVIGATION_PERSISTENCE_KEY = "NAVIGATION_STATE";
  const [initialState, setInitialState] = React.useState<
    InitialState | undefined
  >();
  useReduxDevToolsExtension(navigationRef);
  return (
    <NavigationContainer
      ref={navigationRef}
      initialState={initialState}
      onStateChange={(state) =>
        AsyncStorage?.setItem(NAVIGATION_PERSISTENCE_KEY, JSON.stringify(state))
      }
      linking={linkingPrefixes}
    >
      <StatusBar />

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
          name="Boards"
          component={BoardsScreen}
          options={({ navigation, route }) => ({
            headerLeft: (props) => null,
            headerRight: (props) => (
              <CheckLoginComponent navigation={navigation} />
            ),
            title: "Boards List",
          })}
        />
        <Stack.Screen
          name="Board"
          component={BoardScreen}
          options={({ navigation, route }) => ({
            headerLeft: (props) => null,
            headerRight: (props) => (
              <CheckLoginComponent navigation={navigation} />
            ),
            title: "Board",
          })}
        />
        <Stack.Screen
          name="Post"
          component={PostScreen}
          options={({ navigation, route }) => ({
            headerLeft: (props) => null,
            headerRight: (props) => (
              <CheckLoginComponent navigation={navigation} />
            ),
            title: "Post",
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
