import * as React from "react";
import * as RN from "react-native";

import * as Paper from "react-native-paper";
import { useDispatch, useSelector } from "react-redux";
import { loginActions } from "../slices/loginSlice";
import { IResponse } from "../types";
import styles from "../styles/common";
import { StackNavigationHelpers } from "@react-navigation/stack/lib/typescript/src/types";
import Responsive from "../components/ResponsiveComponent";

export default function LoginScreen(props: {
  navigation: StackNavigationHelpers;
}): React.ReactElement {
  const { navigation } = props;
  const [email, setEmail] = React.useState("");
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState("");
  const { isLogin, loginError } = useSelector((state) => ({
    isLogin: state.loginReducers.isLogin,
    loginError: state.loginReducers.error,
  }));

  React.useEffect(() => {
    console.log({ isLogin });
    console.log({ loginError });
    if (isLogin) {
      if (navigation.canGoBack()) {
        navigation.goBack();
      } else {
        navigation.push("main");
      }
    }
    if (loginError) {
      const responseString = loginError.request.response;
      const response: IResponse = JSON.parse(responseString);
      console.log(response);
      const errorCode = response.status;
      if (errorCode === 400) {
        setError("로그인 실패!");
        return;
      }
      setError(`${errorCode} 오류 발생`);
    }
  }, [isLogin, loginError]);
  const dispatch = useDispatch();
  const noArgumentError: string = "이메일 혹은 비밀번호가 입력되지 않았습니다.";
  const onLoginClick = (): void => {
    console.log(email, password);
    if (!email || !password) {
      setError(noArgumentError);
      return;
    }
    if (error === noArgumentError) {
      setError("");
    }
    dispatch(
      loginActions.login({
        email,
        username,
        password,
      })
    );
    setEmail("");
    setUsername("");
    setPassword("");
  };
  const errorComponent = error ? <Paper.Text>{error}</Paper.Text> : null;
  return (
    <Responsive style={styles.container}>
      <Paper.Text style={styles.title}>Please Login.</Paper.Text>
      <RN.View>
        <RN.View>
          <Paper.Text>Email</Paper.Text>
          <Paper.TextInput
            placeholder="Email"
            textContentType="emailAddress"
            autoCompleteType="email"
            value={email}
            onChangeText={(text: string) => setEmail(text)}
            onSubmitEditing={onLoginClick}
          />
        </RN.View>
        <RN.View>
          <Paper.Text>Username</Paper.Text>
          <Paper.TextInput
            placeholder="Username"
            textContentType="username"
            autoCompleteType="username"
            value={username}
            onChangeText={(text: string) => setUsername(text)}
            onSubmitEditing={onLoginClick}
          />
        </RN.View>
        <RN.View>
          <Paper.Text>Password</Paper.Text>
          <Paper.TextInput
            secureTextEntry
            placeholder="Password"
            textContentType="password"
            autoCompleteType="password"
            value={password}
            onChangeText={(text: string) => setPassword(text)}
            onSubmitEditing={onLoginClick}
          />
        </RN.View>
        {errorComponent}
        <Paper.Button
          mode="contained"
          onPress={(): void => {
            onLoginClick();
          }}
        >
          Login
        </Paper.Button>
        <RN.View>
          <Paper.Text>Register? </Paper.Text>
          <Paper.Button
            mode="contained"
            onPress={(): void => {
              console.log(navigation);
              navigation.push("register");
            }}
          >
            Register
          </Paper.Button>
        </RN.View>
      </RN.View>
    </Responsive>
  );
}
