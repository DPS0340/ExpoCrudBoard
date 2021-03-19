import * as React from "react";
import * as RN from "react-native";

import * as Paper from "react-native-paper";
import { useDispatch } from "react-redux";
import { Text, View } from "../components/Themed";
import { boardsActions } from "../slices/boardsSlice";
import styles from "../styles/common";

export default function MainScreen({ navigation }): React.ReactElement {
  // Navbar TODO?
  const dispatch = useDispatch();
  const goBoard = () => {
    console.log(navigation);
    navigation.push("Board");
  };
  return (
    <View style={styles.container}>
      <Paper.Button mode="contained" onPress={goBoard}>
        Board
      </Paper.Button>
    </View>
  );
}
