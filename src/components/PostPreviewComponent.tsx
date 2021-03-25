import styles from "../styles/common";
import { Text, View } from "./Themed";
import * as Paper from "react-native-paper";
import * as React from "react";
import { IBoardParams, IPostParams, IPostPreviewParams } from "../../types";

export default function PostPreviewComponent(
  props: IPostPreviewParams & IBoardParams
): React.ReactElement {
  const {
    navigation,
    pk,
    author,
    board,
    content,
    title,
    writeAtDT,
    boardName,
    boardPk,
    boardPage,
  } = props;
  const writeAt = new Date(Date.parse(writeAtDT));
  const authorName = author.fields.nickname;
  const onClick = () => {
    navigation.push("post", {
      pk,
      author,
      board,
      content,
      title,
      writeAt,
      boardName,
      boardPage,
      boardPk,
    });
  };
  return (
    <View style={styles.container}>
      <Paper.Button onPress={onClick}>
        {authorName}: {title}
      </Paper.Button>
    </View>
  );
}
