import styles from "../styles/common";
import * as RN from "react-native";
import * as React from "react";
import * as Paper from "react-native-paper";
import { useSelector } from "react-redux";
import DeleteReCommentComponent from "./DeleteReCommentComponent";

export default function ReCommentComponent(props: {
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
  const deleteReCommentComponent =
    loginData.username === author?.fields?.username ? (
      <DeleteReCommentComponent pk={pk} />
    ) : null;
  return (
    <RN.View>
      <Paper.Text>작성자: {author.fields.nickname}</Paper.Text>
      <Paper.Text>작성 시각: {writeAt.toLocaleString()}</Paper.Text>
      <Paper.Text>{content}</Paper.Text>
      {deleteReCommentComponent}
    </RN.View>
  );
}
