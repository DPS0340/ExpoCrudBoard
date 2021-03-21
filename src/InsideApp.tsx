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
import LinkingPrefixes from "./LinkingPrefixes";
import * as RN from "react-native";
import Responsive from "./components/ResponsiveComponent";
import { View } from "./components/Themed";
import WritePostScreen from "./screens/WritePostScreen";

const Stack = createStackNavigator();
const NAVIGATION_PERSISTENCE_KEY = "NAVIGATION_STATE";
export default function InsideApp() {
  const [initialState, setInitialState] = React.useState<
    InitialState | undefined
  >();
  const navigationRef = React.useRef<NavigationContainerRef>(null);
  useReduxDevToolsExtension(navigationRef);
  return (
    <NavigationContainer
      ref={navigationRef}
      initialState={initialState}
      onStateChange={(state) =>
        AsyncStorage?.setItem(NAVIGATION_PERSISTENCE_KEY, JSON.stringify(state))
      }
      linking={LinkingPrefixes}
    >
      <StatusBar />
      <Stack.Navigator initialRouteName="main">
        <Stack.Screen
          name="login"
          component={LoginScreen}
          options={({ navigation, route }) => ({
            headerLeft: (props) => null,
            headerRight: (props) => (
              <CheckLoginComponent navigation={navigation} />
            ),
          })}
        />
        <Stack.Screen
          name="register"
          component={RegisterScreen}
          options={({ navigation, route }) => ({
            headerLeft: (props) => null,
            headerRight: (props) => (
              <CheckLoginComponent navigation={navigation} />
            ),
          })}
        />
        <Stack.Screen
          name="main"
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
          name="boards"
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
          name="board"
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
          name="post"
          component={PostScreen}
          options={({ navigation, route }) => ({
            headerLeft: (props) => null,
            headerRight: (props) => (
              <CheckLoginComponent navigation={navigation} />
            ),
            title: "Post",
          })}
        />
        <Stack.Screen
          name="postWrite"
          component={WritePostScreen}
          options={({ navigation, route }) => ({
            headerLeft: (props) => null,
            headerRight: (props) => (
              <CheckLoginComponent navigation={navigation} />
            ),
            title: "Post Write",
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
