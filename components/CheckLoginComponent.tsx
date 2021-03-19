import * as React from "react";
import * as Paper from "react-native-paper";
import { useDispatch, useSelector } from "react-redux";
import { loginActions } from "../slices/loginSlice";
import { Text, View } from "../components/Themed";

export default function CheckLoginComponent({ navigation }) {
  const { isLogin, loginError } = useSelector((state) => ({
    isLogin: state.loginReducers.isLogin,
    loginError: state.loginReducers.error,
  }));
  const dispatch = useDispatch();
  const logout = () => {
    dispatch(loginActions.logout());
    navigation.navigate("Login");
  };

  const onLogoutClick = () => {
    console.log("Logout");
    logout();
  };

  const LogoutButton = isLogin ? (
    <Paper.Button mode="contained" onPress={onLogoutClick}>
      Logout
    </Paper.Button>
  ) : null;

  return <View>{LogoutButton}</View>;
}
