import React, { useEffect } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import useCachedResources from "./src/hooks/useCachedResources";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import {
  Provider as PaperProvider,
  DefaultTheme as PaperLightTheme,
  DarkTheme as PaperDarkTheme,
} from "react-native-paper";
import { Provider as ReactReduxProvider } from "react-redux";
import rootReducer from "./src/slices/rootSlice";
import { applyMiddleware, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import rootWatcher from "./src/sagas/rootSaga";
import InsideApp from "./src/InsideApp";

export default function App() {
  const isLoadingComplete = useCachedResources();
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
            <InsideApp />
          </PaperProvider>
        </ReactReduxProvider>
      </SafeAreaProvider>
    );
  }
}
