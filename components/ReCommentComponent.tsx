import styles from "../styles/common";
import { Text, View } from "../components/Themed";
import * as RN from "react-native";
import * as React from "react";
import { useSelector } from "react-redux";

export default function ReCommentComponent(props: {
  pk: number;
  item: unknown;
}): React.ReactElement {
  const { pk, item } = props;
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
  return (
    <View style={styles.container}>
      <Text>작성자: {author.nickname}</Text>
      <Text>작성 시각: {writeAt.toLocaleString()}</Text>
      <Text>{content}</Text>
    </View>
  );
}
