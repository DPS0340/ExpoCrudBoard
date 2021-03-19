import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import useCachedResources from "./hooks/useCachedResources";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import LoginScreen from "./screens/LoginScreen";
import MainScreen from "./screens/MainScreen";
import RegisterScreen from "./screens/RegisterScreen";
import {
  Provider as PaperProvider,
  DefaultTheme as PaperLightTheme,
  DarkTheme as PaperDarkTheme,
} from "react-native-paper";
import { Provider as ReactReduxProvider, useDispatch } from "react-redux";
import rootReducer from "./slices/rootSlice";
import { applyMiddleware, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import rootWatcher from "./sagas/rootSaga";
import { loginActions } from "./slices/loginSlice";
import CheckLoginComponent from "./components/CheckLoginComponent";

export default function App() {
  const isLoadingComplete = useCachedResources();
  const Stack = createStackNavigator();
  const [theme, setTheme] = React.useState(DefaultTheme);
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
  sagaMiddleware.run(rootWatcher);

  useEffect(() => {
    console.log("isLoadingComplete:", isLoadingComplete);
  }, [isLoadingComplete]);

  const paperTheme = React.useMemo(() => {
    const t = theme.dark ? PaperDarkTheme : PaperLightTheme;

    return {
      ...t,
      colors: {
        ...t.colors,
        ...theme.colors,
        surface: theme.colors.card,
        accent: theme.dark ? "rgb(255, 55, 95)" : "rgb(255, 45, 85)",
      },
    };
  }, [theme.colors, theme.dark]);

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <ReactReduxProvider store={store}>
          <PaperProvider theme={paperTheme}>
            <StatusBar />
            <NavigationContainer>
              <CheckLoginComponent />
              <Stack.Navigator initialRouteName="Login">
                <Stack.Screen
                  name="Login"
                  component={LoginScreen}
                  options={({ navigation, route }) => ({
                    headerLeft: (props) => null,
                  })}
                />
                <Stack.Screen
                  name="Register"
                  component={RegisterScreen}
                  options={({ navigation, route }) => ({
                    headerLeft: (props) => null,
                  })}
                />
                <Stack.Screen
                  name="Main"
                  component={MainScreen}
                  options={({ navigation, route }) => ({
                    headerLeft: (props) => null,
                    title: "Main Page",
                  })}
                />
                <Stack.Screen
                  name="Board"
                  component={BoardScreen}
                  options={({ navigation, route }) => ({
                    headerLeft: (props) => null,
                    title: "Main Page",
                  })}
                />
              </Stack.Navigator>
            </NavigationContainer>
          </PaperProvider>
        </ReactReduxProvider>
      </SafeAreaProvider>
    );
  }
}
