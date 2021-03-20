import styles from "../styles/common";
import { Text, View } from "../components/Themed";
import * as RN from "react-native";
import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import CommentComponent from "./CommentComponent";
import { commentsActions } from "../slices/commentsSlice";

export default function CommentsComponent(props: {
  pk: number;
}): React.ReactElement {
  const { pk } = props;
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(commentsActions.getComments({ pk }));
  }, [pk]);
  const { comments, isLoading, isSuccess, boardError } = useSelector(
    (state) => ({
      comments: state.commentsReducers.comments,
      isLoading: state.commentsReducers.isLoading,
      isSuccess: state.commentsReducers.isSuccess,
      boardError: state.commentsReducers.error,
    })
  );
  React.useEffect(() => {
    console.log({ comments, isLoading, isSuccess, boardError });
  }, [comments, isLoading, isSuccess, boardError]);

  return (
    <View style={styles.container}>
      <RN.FlatList
        data={comments}
        keyExtractor={(item) => item.pk.toString()}
        renderItem={({ item, index, separators }) => (
          <CommentComponent item={item} pk={item.pk} />
        )}
      />
    </View>
  );
}
