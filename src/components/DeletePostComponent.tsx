import styles from "../styles/common";
import * as Paper from "react-native-paper";
import * as React from "react";
import * as RN from "react-native";
import { StackNavigationHelpers } from "@react-navigation/stack/lib/typescript/src/types";
import CommentsComponent from "../components/CommentsComponent";
import HTML from "react-native-render-html";
import { useDispatch, useSelector } from "react-redux";
import { postsActions, postsReducers } from "../slices/postsSlice";
import useEffectWithInitialCallback from "../hooks/useEffectWithInitialCallback";

export default function DeletePostComponent(props: {
  navigation: StackNavigationHelpers;
  pk: number;
  boardPk: number;
}): React.ReactElement {
  const { navigation, pk } = props;
  const { responseData, isLoading, isSuccess, error } = useSelector(
    (state) => ({
      responseData: state.postsReducers.responseData,
      isLoading: state.postsReducers.isLoading,
      isSuccess: state.postsReducers.isSuccess,
      error: state.postsReducers.error,
    })
  );
  const dispatch = useDispatch();
  const onClick = () => {
    dispatch(postsActions.deletePost({ pk }));
  };
  useEffectWithInitialCallback(
    () => {
      dispatch(postsActions.resetStatus());
    },
    () => {
      if (isLoading) {
        return;
      }
      if (isSuccess) {
        console.log({ responseData });
        dispatch(postsActions.reset());
        if (navigation.canGoBack()) {
          navigation.goBack();
        }
        return;
      }
      console.log({ error });
    },
    [isLoading, isSuccess]
  );
  return (
    <Paper.Button mode="contained" onPress={onClick}>
      Delete Post
    </Paper.Button>
  );
}
