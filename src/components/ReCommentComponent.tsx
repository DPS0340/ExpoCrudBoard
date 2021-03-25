import styles from "../styles/common";
import * as RN from "react-native";
import * as React from "react";
import * as Paper from "react-native-paper";
import { useDispatch, useSelector } from "react-redux";
import DeleteReCommentComponent from "./DeleteReCommentComponent";
import ChangeReCommentComponent from "./ChangeReCommentComponent";
import { changeEditActions } from "../slices/changeEditSlice";

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
  const { reset } = useSelector((state) => ({
    reset: state.commentsReducers.reset,
  }));
  const [isChange, setIsChange] = React.useState<boolean>(false);
  React.useEffect(() => {
    if (reset) {
      setIsChange(false);
    }
  }, [reset]);
  const deleteReCommentComponent =
    loginData.username === author?.fields?.username ? (
      <DeleteReCommentComponent pk={pk} />
    ) : null;
  const changeReCommentComponent =
    loginData.username === author?.fields?.username && isChange ? (
      <ChangeReCommentComponent pk={pk} isPost={false} />
    ) : null;
  return (
    <RN.View>
      <RN.View style={{ marginLeft: "5%" }}>
        <Paper.Text>작성자: {author.fields.nickname}</Paper.Text>
        <Paper.Text>작성 시각: {writeAt.toLocaleString()}</Paper.Text>
        <Paper.Text>{content}</Paper.Text>
      </RN.View>
      <Paper.Button onPress={() => setIsChange(!isChange)}>
        Toggle Edit
      </Paper.Button>
      {changeReCommentComponent}
      {deleteReCommentComponent}
    </RN.View>
  );
}
