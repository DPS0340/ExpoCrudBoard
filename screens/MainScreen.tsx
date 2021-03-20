import { StackNavigationHelpers } from "@react-navigation/stack/lib/typescript/src/types";
import * as React from "react";
import * as RN from "react-native";

import * as Paper from "react-native-paper";
import { useDispatch } from "react-redux";
import { Text, View } from "../components/Themed";
import styles from "../styles/common";

export default function MainScreen(props: {
  navigation: StackNavigationHelpers;
}): React.ReactElement {
  // Navbar TODO?
  const { navigation } = props;
  const goBoard = () => {
    console.log(navigation);
    navigation.push("Boards");
  };
  return (
    <View style={styles.container}>
      <Paper.Button mode="contained" onPress={goBoard}>
        Board
      </Paper.Button>
    </View>
  );
}
