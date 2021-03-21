import styles from "../styles/common";
import { Text, View } from "../components/Themed";
import * as Paper from "react-native-paper";
import * as React from "react";
import * as RN from "react-native";
import { StackNavigationHelpers } from "@react-navigation/stack/lib/typescript/src/types";
import CommentsComponent from "./CommentsComponent";

export default function BoardComponent(props: {
  navigation: StackNavigationHelpers;
  pk: number;
  name: string;
}): React.ReactElement {
  const { navigation, pk, name } = props;
  const goSelectedBoard = () => {
    navigation.push("board", { pk, name });
  };
  React.useEffect(() => {}, [pk]);

  return (
    <RN.View style={styles.container}>
      <Paper.Text style={styles.title}>{name}</Paper.Text>
      <Paper.Button mode="contained" onPress={goSelectedBoard}>
        Join
      </Paper.Button>
    </RN.View>
  );
}
