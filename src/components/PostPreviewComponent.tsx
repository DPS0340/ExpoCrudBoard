import styles from "../styles/common";
import { Text, View } from "./Themed";
import * as Paper from "react-native-paper";
import * as React from "react";
import { IPostPreviewParams } from "../../types";

export default function PostPreviewComponent(
  props: IPostPreviewParams
): React.ReactElement {
  const { navigation, pk, author, board, content, title, writeAtDT } = props;
  const writeAt = new Date(Date.parse(writeAtDT));
  const authorName = author.fields.nickname;
  React.useEffect(() => {
    console.log({ pk, author, board, content, title, writeAtDT });
  }, [pk, author, board, content, title, writeAtDT]);
  const onClick = () => {
    navigation.push("post", {
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
