import styles from "../styles/common";
import { Text, View } from "./Themed";
import * as RN from "react-native";
import * as React from "react";
import { useSelector } from "react-redux";
import ReCommentComponent from "./ReCommentComponent";
import * as Paper from "react-native-paper";
import DeleteCommentComponent from "./DeleteCommentComponent";
import DeleteCommentComponent from "./DeleteCommentComponent";

export default function CommentComponent(props: {
  pk: number;
  item: unknown;
  loginData: { username: string };
}): React.ReactElement {
  const { pk, item, loginData } = props;
  const { fields, answer_reply_length, recomment_data } = item;
  const { author, content, writeAt: writeAtDT } = fields;
  const writeAt = new Date(writeAtDT);
  React.useEffect(() => {
    console.log({ pk, fields, item });
    console.log({
      answer_reply_length,
      recomment_data,
      author,
      content,
      writeAt,
    });
  }, [pk, fields, item]);
  const deleteCommentComponent =
    loginData.username === author?.fields?.username ? (
      <DeleteCommentComponent pk={pk} />
    ) : null;
  return (
    <RN.View>
      <Paper.Text>작성자: {author.fields.nickname}</Paper.Text>
      <Paper.Text>작성 시각: {writeAt.toLocaleString()}</Paper.Text>
      <Paper.Text>{content}</Paper.Text>
      <RN.FlatList
        data={recomment_data}
        keyExtractor={(item) => item.pk.toString()}
        renderItem={({ item, index, separators }) => (
          <ReCommentComponent item={item} pk={item.pk} loginData={loginData} />
        )}
      />
      {deleteCommentComponent}
    </RN.View>
  );
}
