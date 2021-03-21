import * as React from "react";
import * as Paper from "react-native-paper";
import { useDispatch, useSelector } from "react-redux";
import { loginActions } from "../slices/loginSlice";
import { Text, View } from "./Themed";
import { StackNavigationHelpers } from "@react-navigation/stack/lib/typescript/src/types";

export default function CheckLoginComponent(props: {
  navigation: StackNavigationHelpers;
}) {
  const { navigation } = props;
  const { isLogin, loginError } = useSelector((state) => ({
    isLogin: state.loginReducers.isLogin,
    loginError: state.loginReducers.error,
  }));
  const dispatch = useDispatch();
  const logout = () => {
    dispatch(loginActions.logout());
    navigation.navigate("login");
  };

  React.useEffect(() => {
    if (!isLogin) {
      logout();
    }
    dispatch(loginActions.checkLogin());
  }, [isLogin]);

  const onLogoutClick = () => {
    console.log("logout");
    logout();
  };

  const LogoutButton = isLogin ? (
    <Paper.Button mode="contained" onPress={onLogoutClick}>
      Logout
    </Paper.Button>
  ) : null;

  return <View>{LogoutButton}</View>;
}
