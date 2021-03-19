import styles from "../styles/common";
import { Text, View } from "../components/Themed";
import * as Paper from "react-native-paper";
import * as React from "react";

export default function PostPreviewComponent({
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
  const onClick = () => {
    navigation.push("Post", {
      pk,
      author,
      board,
      content,
      title,
      writeAt,
    });
  };
  return (
    <View style={styles.container}>
      <Paper.Button mode="contained" onPress={onClick}>
        {authorName}: {title}
      </Paper.Button>
    </View>
  );
}
