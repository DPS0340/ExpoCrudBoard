import * as React from "react";
import * as RN from "react-native";

import * as Paper from "react-native-paper";
import { useDispatch, useSelector } from "react-redux";
import { registerActions } from "../slices/registerSlice";
import { IResponse } from "../types";
import styles from "../styles/common";
import Responsive from "../components/ResponsiveComponent";

export default function RegisterScreen({ navigation }): React.ReactElement {
  const [email, setEmail] = React.useState("");
  const [username, setUsername] = React.useState("");
  const [nickname, setNickname] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState("");
  const { isRegister, registerError } = useSelector((state) => ({
    isRegister: state.registerReducers.isRegister,
    registerError: state.registerReducers.error,
  }));

  React.useEffect(() => {
    console.log({ isRegister });
    console.log({ registerError });
    if (isRegister) {
      navigation.push("login");
    }
    if (registerError) {
      const responseString = registerError?.request?.response;
      const response: IResponse = JSON.parse(responseString);
      console.log(response);
      const errorCode = response.status;
      if (errorCode === 400) {
        setError("로그인 실패!");
        return;
      }
      setError(`${errorCode} 오류 발생`);
    }
  }, [isRegister, registerError]);
  const dispatch = useDispatch();
  const noArgumentError: string =
    "이메일 혹은 닉네임, 비밀번호가 입력되지 않았습니다.";
  const errorComponent = error !== "" ? <Paper.Text>{error}</Paper.Text> : null;

  const onRegisterClick = (): void => {
    console.log(email, password);
    if (!email || !password) {
      setError(noArgumentError);
      return;
    }
    if (error === noArgumentError) {
      setError("");
    }
    console.log({
      email,
      username,
      nickname,
      password,
    });
    dispatch(
      registerActions.register({
        email,
        username,
        nickname,
        password,
      })
    );
    setEmail("");
    setUsername("");
    setNickname("");
    setPassword("");
  };

  return (
    <Responsive style={styles.container}>
      <Paper.Text style={styles.title}>Please Register.</Paper.Text>
      <RN.View>
        <Paper.TextInput
          label="Email"
          placeholder="Email"
          textContentType="emailAddress"
          autoCompleteType="email"
          autoCapitalize="none"
          value={email}
          onChangeText={(text: string) => setEmail(text)}
          returnKeyType="next"
        />
        <Paper.TextInput
          label="Username"
          placeholder="Username"
          textContentType="username"
          autoCompleteType="username"
          keyboardType="email-address"
          autoCapitalize="none"
          value={username}
          onChangeText={(text: string) => setUsername(text)}
          returnKeyType="next"
        />
        <Paper.TextInput
          label="Nickname"
          placeholder="Nickname"
          textContentType="nickname"
          autoCompleteType="username"
          autoCapitalize="none"
          value={nickname}
          onChangeText={(text: string) => setNickname(text)}
          returnKeyType="done"
          onSubmitEditing={onRegisterClick}
        />
        <Paper.TextInput
          secureTextEntry
          label="Password"
          placeholder="Password"
          textContentType="password"
          autoCompleteType="password"
          autoCapitalize="none"
          value={password}
          onChangeText={(text: string) => setPassword(text)}
          onSubmitEditing={onRegisterClick}
        />
        {errorComponent}
        <Paper.Button mode="contained" onPress={onRegisterClick}>
          Register
        </Paper.Button>
        <RN.View>
          <Paper.Text>Login? </Paper.Text>
          <Paper.Button
            mode="contained"
            onPress={(): void => {
              navigation.push("login");
            }}
          >
            Login
          </Paper.Button>
        </RN.View>
      </RN.View>
    </Responsive>
  );
}
