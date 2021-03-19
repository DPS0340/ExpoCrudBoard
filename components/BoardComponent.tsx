import styles from "../styles/common";
import { Text, View } from "../components/Themed";
import * as Paper from "react-native-paper";
import * as React from "react";

export default function BoardComponent({
  navigation,
  pk,
  name,
}): React.ReactElement {
  const goSelectedBoard = () => {
    navigation.push("Board", { pk, name });
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{name}</Text>
      <Paper.Button mode="contained" onPress={goSelectedBoard}>
        Join
      </Paper.Button>
    </View>
  );
}
