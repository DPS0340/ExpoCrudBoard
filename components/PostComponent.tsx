import styles from "../styles/common";
import { Text, View } from "../components/Themed";
import * as Paper from "react-native-paper";
import * as React from "react";

export default function PostComponent({
  navigation,
  pk,
  author,
  board,
  content,
  title,
  writeAtDT,
}): React.ReactElement {
  const writeAt = new Date(Date.parse(writeAtDT));
  const authorName = author.fields.username;
  React.useEffect(() => {
    console.log({ pk, author, board, content, title, writeAtDT });
  }, [pk, author, board, content, title, writeAtDT]);
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
