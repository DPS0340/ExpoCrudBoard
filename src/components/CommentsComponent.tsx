import styles from "../styles/common";
import * as Paper from "react-native-paper";
import * as RN from "react-native";
import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import CommentComponent from "./CommentComponent";
import { commentsActions } from "../slices/commentsSlice";
import WriteCommentComponent from "./WriteCommentComponent";
import { loginActions } from "../slices/loginSlice";
import useEffectWithInitialCallback from "../hooks/useEffectWithInitialCallback";

export default function CommentsComponent(props: {
  pk: number;
}): React.ReactElement {
  const { pk } = props;
  const dispatch = useDispatch();
  const {
    isLogin,
    loginData,
    comments,
    reset,
    isLoading,
    isSuccess,
    boardError,
  } = useSelector((state) => ({
    isLogin: state.loginReducers.isLogin,
    loginData: state.loginReducers.data,
    comments: state.commentsReducers.comments,
    reset: state.commentsReducers.reset,
    isLoading: state.commentsReducers.isLoading,
    isSuccess: state.commentsReducers.isSuccess,
    boardError: state.commentsReducers.error,
  }));
  React.useEffect(() => {
    dispatch(commentsActions.getComments({ pk }));
  }, [pk, reset]);
  React.useEffect(() => {
    console.log({ comments, isLoading, isSuccess, boardError });
  }, [comments, isLoading, isSuccess, boardError]);

  return (
    <RN.View style={styles.container}>
      <RN.FlatList
        data={comments}
        keyExtractor={(item) => item.pk.toString()}
        renderItem={({ item, index, separators }) => (
          <CommentComponent item={item} pk={item.pk} loginData={loginData} />
        )}
      />
      {isLogin ? (
        <WriteCommentComponent
          pk={pk}
          dispatchAction={commentsActions.writeComment}
          componentName={"Comment"}
        />
      ) : null}
    </RN.View>
  );
}
