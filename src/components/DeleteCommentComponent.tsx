import styles from "../styles/common";
import * as Paper from "react-native-paper";
import * as React from "react";
import * as RN from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { commentsActions } from "../slices/commentsSlice";

export default function DeleteCommentComponent(props: {
  pk: number;
}): React.ReactElement {
  const { pk } = props;
  const dispatch = useDispatch();
  const onClick = () => {
    dispatch(commentsActions.deleteComment({ pk }));
  };
  return (
    <Paper.Button mode="contained" onPress={onClick}>
      Delete Comment
    </Paper.Button>
  );
}
