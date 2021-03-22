import * as React from "react";
import * as Paper from "react-native-paper";
import { useDispatch, useSelector } from "react-redux";
import { loginActions } from "../slices/loginSlice";
import { Text, View } from "./Themed";
import { StackNavigationHelpers } from "@react-navigation/stack/lib/typescript/src/types";
import { useState } from "react";
import useEffectWithInitialCallback from "../hooks/useEffectWithInitialCallback";
import { useRoute } from "@react-navigation/native";

export default function CheckLoginComponent(props: {
  navigation: StackNavigationHelpers;
}) {
  const { navigation } = props;
  const { isLogin, loginError, data } = useSelector((state) => ({
    isLogin: state.loginReducers.isLogin,
    loginError: state.loginReducers.error,
    data: state.loginReducers.data,
  }));
  const dispatch = useDispatch();
  const [isSend, setIsSend] = React.useState(false);
  const route = useRoute();
  const logout = () => {
    dispatch(loginActions.logout());
  };
  useEffectWithInitialCallback(
    () => {
      dispatch(loginActions.checkLogin());
    },
    () => {
      if (!isLogin && !isSend && route.name !== "login") {
        navigation.navigate("login");
        setIsSend(true);
      }
    },
    [isLogin]
  );

  const onLogoutClick = () => {
    logout();
  };

  const LogoutButton = !isLogin ? null : (
    <Paper.Button mode="contained" onPress={onLogoutClick}>
      Logout
    </Paper.Button>
  );

  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {LogoutButton}
    </View>
  );
}
