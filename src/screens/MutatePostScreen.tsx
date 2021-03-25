import { StackNavigationHelpers } from "@react-navigation/stack/lib/typescript/src/types";
import * as React from "react";
import Responsive from "../components/ResponsiveComponent";
import * as RN from "react-native";
import * as Paper from "react-native-paper";
import { useDispatch, useSelector } from "react-redux";
import { postsActions } from "../slices/postsSlice";
import { IBoardParams, IRoute } from "../../types";
import useEffectWithInitialCallback from "../hooks/useEffectWithInitialCallback";

export default function MutatePostScreen(props: {
  navigation: StackNavigationHelpers;
  route: IRoute<
    {
      pk?: number;
      title?: string;
      content?: string;
    } & IBoardParams
  >;
  dispatchAction: Function;
}): React.ReactElement {
  const { navigation, route, dispatchAction } = props;
  const { pk, boardPk, boardName, boardPage } = route.params;
  const { posts, isLoading, isSuccess, postsError } = useSelector((state) => ({
    posts: state.postsReducers.posts,
    isLoading: state.postsReducers.isLoading,
    isSuccess: state.postsReducers.isSuccess,
    postsError: state.postsReducers.error,
  }));
  const dispatch = useDispatch();

  const [content, setContent] = React.useState({
    pk,
    title: route.params?.title ?? "",
    content: route.params?.content ?? "",
  });
  const onChangeTitle = (text: string) => {
    setContent({ ...content, title: text });
  };
  const onChangeContent = (text: string) => {
    setContent({ ...content, content: text });
  };

  useEffectWithInitialCallback(
    () => {
      dispatch(postsActions.resetStatus());
    },
    () => {
      if (!isSuccess || isLoading) {
        return;
      }
      dispatch(postsActions.reset());
      navigation.push("board", {
        name: boardName,
        pk: boardPk,
        page: boardPage,
      });
    },
    [isSuccess, isLoading]
  );

  const onWriteClicked = () => {
    dispatch(dispatchAction(content));
  };

  return (
    <Responsive>
      <Paper.TextInput
        placeholder="&nbsp;제목을 입력하세요"
        onChangeText={onChangeTitle}
        value={content.title}
        onSubmitEditing={(e) => onWriteClicked()}
      />
      <RN.View>
        <Paper.TextInput
          placeholder="&nbsp;내용을 입력하세요"
          onChangeText={onChangeContent}
          value={content.content}
          onSubmitEditing={(e) => onWriteClicked()}
        />
        <Paper.Button mode="contained" onPress={onWriteClicked}>
          Write
        </Paper.Button>
      </RN.View>
    </Responsive>
  );
}
