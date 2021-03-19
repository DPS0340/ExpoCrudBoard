import * as React from "react";
import * as RN from "react-native";

import * as Paper from "react-native-paper";
import { useDispatch, useSelector } from "react-redux";
import { Text, View } from "../components/Themed";
import { registerActions } from "../slices/registerSlice";
import { IResponse } from "../types";
import styles from "../styles/common";

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
      navigation.navigate("Main");
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
  const errorComponent = error !== "" ? <Text>{error}</Text> : null;

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
    <View style={styles.container}>
      <Text style={styles.title}>Please Register.</Text>
      <View>
        <View>
          <Text>Email</Text>
          <Paper.TextInput
            placeholder="Email"
            value={email}
            onChangeText={(text: string) => setEmail(text)}
            onSubmitEditing={onRegisterClick}
          />
        </View>
        <View>
          <Text>Username</Text>
          <Paper.TextInput
            placeholder="Username"
            value={username}
            onChangeText={(text: string) => setUsername(text)}
            onSubmitEditing={onRegisterClick}
          />
        </View>
        <View>
          <Text>Nickname</Text>
          <Paper.TextInput
            placeholder="Nickname"
            value={nickname}
            onChangeText={(text: string) => setNickname(text)}
            onSubmitEditing={onRegisterClick}
          />
        </View>
        <View>
          <Text>Password</Text>
          <Paper.TextInput
            secureTextEntry
            placeholder="Password"
            value={password}
            onChangeText={(text: string) => setPassword(text)}
            onSubmitEditing={onRegisterClick}
          />
        </View>
        {errorComponent}
        <Paper.Button mode="contained" onPress={onRegisterClick}>
          Register
        </Paper.Button>
        <View>
          <Text>Login? </Text>
          <Paper.Button
            mode="contained"
            onPress={(): void => {
              navigation.push("Login");
            }}
          >
            Login
          </Paper.Button>
        </View>
      </View>
    </View>
  );
}
