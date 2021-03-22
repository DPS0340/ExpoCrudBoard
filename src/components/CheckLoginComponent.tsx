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
  const route = useRoute();
  const logout = () => {
    dispatch(loginActions.logout());
  };
  const goLoginIfNotLogined = () => {
    if (!isLogin && route.name !== "login" && route.name !== "register") {
      navigation.navigate("login");
    }
  };
  useEffectWithInitialCallback(
    () => {
      dispatch(loginActions.checkLogin());
      goLoginIfNotLogined();
    },
    () => {
      goLoginIfNotLogined();
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
