import * as React from "react";
import * as RN from "react-native";

import * as Paper from "react-native-paper";
import { useDispatch } from "react-redux";
import { Text, View } from "../components/Themed";
import { boardsActions } from "../slices/boardsSlice";

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

export default function MainScreen({ navigation }): React.ReactElement {
  const dispatch = useDispatch();
  const goBoard = () => {
    console.log(navigation);
    dispatch(boardsActions.getBoards(navigation));
  };
  return (
    <View style={styles.container}>
      <Paper.Button mode="contained" onPress={goBoard}>
        Board
      </Paper.Button>
    </View>
  );
}