import * as React from "react";
import * as RN from "react-native";

import * as Paper from "react-native-paper";
import { Text, View } from "../components/Themed";

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

export default function RegisterScreen({ navigation }): React.ReactElement {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState("");
  React.useEffect(() => {
    console.log("error:", error);
  }, [error]);
  React.useEffect(() => {
    console.log("navigation:", navigation);
  }, [navigation]);
  const onRegisterClick = (): void => {
    if (email === "" || password === "") {
      setError("email or password not provided.");
    } else {
      // TODO: Login Logic
      setError("");
    }
  };
  const errorComponent = error !== "" ? <Text>Error: {error}</Text> : null;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Please Register.</Text>
      <View>
        <div>
          <Text>Email</Text>
          <Paper.TextInput
            placeholder="Email"
            value={email}
            onChangeText={(text: string) => setEmail(text)}
          />
        </div>
        <div>
          <Text>Password</Text>
          <Paper.TextInput
            secureTextEntry
            placeholder="Password"
            value={password}
            onChangeText={(text: string) => setPassword(text)}
          />
        </div>
        {errorComponent}
        <Paper.Button
          mode="contained"
          onPress={(e: any): void => {
            console.log("Login");
            onRegisterClick();
          }}
        >
          Register
        </Paper.Button>
        <Text>
          <Text>Login? </Text>
          <Paper.Button
            mode="contained"
            onPress={(e: any): void => {
              console.log(navigation);
              navigation.navigate("Login");
            }}
          >
            Login
          </Paper.Button>
        </Text>
      </View>
    </View>
  );
}
