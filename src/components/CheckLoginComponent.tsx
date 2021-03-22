import * as React from "react";
import * as Paper from "react-native-paper";
import { useDispatch, useSelector } from "react-redux";
import { loginActions } from "../slices/loginSlice";
import { Text, View } from "./Themed";
import { StackNavigationHelpers } from "@react-navigation/stack/lib/typescript/src/types";
import { useState } from "react";

export default function CheckLoginComponent(props: {
  navigation: StackNavigationHelpers;
}) {
  const { navigation } = props;
  const { isLogin, loginError } = useSelector((state) => ({
    isLogin: state.loginReducers.isLogin,
    loginError: state.loginReducers.error,
  }));
  const [send, setSend] = useState(false);
  const dispatch = useDispatch();
  const logout = () => {
    dispatch(loginActions.logout());
    navigation.navigate("login");
  };

  React.useEffect(() => {
    if (!send) {
      dispatch(loginActions.checkLogin());
      setSend(true);
    }
    console.log({ isLogin });
    if (send && !isLogin) {
      logout();
    }
  }, [isLogin]);

  const onLogoutClick = () => {
    console.log("logout");
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
