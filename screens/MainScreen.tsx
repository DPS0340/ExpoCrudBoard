import { StackNavigationHelpers } from "@react-navigation/stack/lib/typescript/src/types";
import * as React from "react";
import * as RN from "react-native";

import * as Paper from "react-native-paper";
import { useDispatch } from "react-redux";
import Responsive from "../components/ResponsiveComponent";
import styles from "../styles/common";

export default function MainScreen(props: {
  navigation: StackNavigationHelpers;
}): React.ReactElement {
  // Navbar TODO?
  const { navigation } = props;
  const goBoard = () => {
    console.log(navigation);
    navigation.push("boards");
  };
  return (
    <Responsive style={styles.container}>
      <Paper.Button mode="contained" onPress={goBoard}>
        Board
      </Paper.Button>
    </Responsive>
  );
}
