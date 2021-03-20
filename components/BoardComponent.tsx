import styles from "../styles/common";
import { Text, View } from "../components/Themed";
import * as Paper from "react-native-paper";
import * as React from "react";
import { StackNavigationHelpers } from "@react-navigation/stack/lib/typescript/src/types";

export default function BoardComponent(props: {
  navigation: StackNavigationHelpers;
  pk: number;
  name: string;
}): React.ReactElement {
  const { navigation, pk, name } = props;
  const goSelectedBoard = () => {
    navigation.push("Board", { pk, name });
  };
  React.useEffect(() => {}, [pk]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{name}</Text>
      <Paper.Button mode="contained" onPress={goSelectedBoard}>
        Join
      </Paper.Button>
    </View>
  );
}
