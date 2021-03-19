import * as React from "react";
import * as RN from "react-native";

import * as Paper from "react-native-paper";
import { Text, View } from "../components/Themed";
import { useDispatch, useSelector } from "react-redux";
import { loginActions } from "../slices/loginSlice";
import { IResponse } from "../types";

const styles = RN.StyleSheet.create({
  container: {
    width: "100%",
    height: "auto",
    minHeight: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    color: "black",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});

export default function LoginScreen({ navigation }): React.ReactElement {
  const [email, setEmail] = React.useState("");
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
      navigation.navigate("Main");
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
        password,
      })
    );
  };
  const errorComponent = error ? <Text>{error}</Text> : null;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Please Login.</Text>
      <View>
        <View>
          <Text>Email</Text>
          <Paper.TextInput
            placeholder="Email"
            value={email}
            onChangeText={(text: string) => setEmail(text)}
          />
        </View>
        <View>
          <Text>Password</Text>
          <Paper.TextInput
            secureTextEntry
            placeholder="Password"
            value={password}
            onChangeText={(text: string) => setPassword(text)}
          />
        </View>
        {errorComponent}
        <Paper.Button
          mode="contained"
          onPress={(): void => {
            console.log("Login");
            onLoginClick();
          }}
        >
          Login
        </Paper.Button>
        <View>
          <Text>Register? </Text>
          <Paper.Button
            mode="contained"
            onPress={(): void => {
              console.log(navigation);
              navigation.navigate("Register");
            }}
          >
            Register
          </Paper.Button>
        </View>
      </View>
    </View>
  );
}
