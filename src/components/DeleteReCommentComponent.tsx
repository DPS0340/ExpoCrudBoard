import styles from "../styles/common";
import * as Paper from "react-native-paper";
import * as React from "react";
import * as RN from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { commentsActions } from "../slices/commentsSlice";

export default function DeleteReCommentComponent(props: {
  pk: number;
}): React.ReactElement {
  const { pk } = props;
  const dispatch = useDispatch();
  const onClick = () => {
    dispatch(commentsActions.deleteReComment({ pk }));
  };
  return <Paper.Button onPress={onClick}>Delete ReComment</Paper.Button>;
}
