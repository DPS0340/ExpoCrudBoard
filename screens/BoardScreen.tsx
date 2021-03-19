import * as React from "react";
import * as RN from "react-native";

import * as Paper from "react-native-paper";
import { Text, View } from "../components/Themed";
import { useDispatch, useSelector } from "react-redux";
import styles from "../styles/common";
import { boardsActions } from "../slices/boardsSlice";
export default function BoardScreen({ route, navigation }): React.ReactElement {
  const dispatch = useDispatch();
  const { pk, name } = route.params;
  navigation.setOptions({
    title: `${name} 게시판`,
  });
  React.useEffect(() => {
    console.log({ pk, name });
  }, [pk, name]);

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>{`${name} 게시판`}</Text>
      </View>
      <Text>TODO</Text>
    </View>
  );
}
