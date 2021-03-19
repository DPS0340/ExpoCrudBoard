import styles from "../styles/common";
import { Text, View } from "../components/Themed";
import * as Paper from "react-native-paper";
import * as React from "react";

export default function PostScreen({ navigation, route }): React.ReactElement {
  const { pk, author, board, content, title, writeAt } = route.params;
  const authorName = author.fields.username;
  React.useEffect(() => {
    console.log({ pk, author, board, content, title, writeAt });
  }, [pk, author, board, content, title, writeAt]);
  navigation.setOptions({
    title,
  });
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text>작성 시각: {writeAt.toLocaleString()}</Text>
      <Text>작성자: {authorName}</Text>
      <Text>{content}</Text>
    </View>
  );
}
