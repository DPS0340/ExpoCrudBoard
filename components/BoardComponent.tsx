import styles from "../styles/common";
import { Text, View } from "../components/Themed";
import * as Paper from "react-native-paper";

export default function BoardComponent({
  navigation,
  pk,
  name,
}): React.ReactElement {
  const goSelectedBoard = () => {
    navigation.navigate("")
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Not Implemented</Text>
      <Paper.Button mode="contained"></Paper.Button>
    </View>
  );
}
