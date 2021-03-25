import { StackNavigationHelpers } from "@react-navigation/stack/lib/typescript/src/types";
import * as React from "react";
import Responsive from "../components/ResponsiveComponent";
import * as RN from "react-native";
import * as Paper from "react-native-paper";
import { useDispatch, useSelector } from "react-redux";
import { postsActions } from "../slices/postsSlice";
import { IBoardParams, IRoute } from "../../types";
import useEffectWithInitialCallback from "../hooks/useEffectWithInitialCallback";
import { commentsActions } from "../slices/commentsSlice";
import { changeEditActions } from "../slices/changeEditSlice";

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
  setIsChange?: Function;
  isPost?: boolean;
  pk?: number;
}): React.ReactElement {
  const {
    navigation,
    route,
    dispatchAction,
    isPost: isPostInitialValue,
  } = props;
  const isPost = isPostInitialValue ?? true;
  let pk: number;
  if (route?.params) {
    pk = route?.params.pk!;
  } else {
    pk = props.pk!;
  }
  const { posts, isLoading, isSuccess, postsError } = useSelector((state) => ({
    posts: state.postsReducers.posts,
    isLoading: state.postsReducers.isLoading,
    isSuccess: state.postsReducers.isSuccess,
    postsError: state.postsReducers.error,
  }));
  const dispatch = useDispatch();

  const [content, setContent] = React.useState({
    pk,
    title: route?.params?.title ?? "",
    content: route?.params?.content ?? "",
  });
  const onChangeTitle = (text: string) => {
    setContent({ ...content, title: text });
  };
  const onChangeContent = (text: string) => {
    setContent({ ...content, content: text });
  };

  useEffectWithInitialCallback(
    () => {
      if (isPost) {
        dispatch(postsActions.resetStatus());
        return;
      }
      dispatch(commentsActions.resetStatus());
    },
    () => {
      if (!isSuccess || isLoading) {
        return;
      }
      if (isPost) {
        const { boardPk, boardName, boardPage } = route?.params;
        dispatch(postsActions.reset());
        navigation.push("board", {
          name: boardName,
          pk: boardPk,
          page: boardPage,
        });
        return;
      }
      dispatch(commentsActions.reset());
      dispatch(changeEditActions.off());
    },
    [isSuccess, isLoading]
  );

  const onWriteClicked = () => {
    const body = isPost ? content : { pk: pk, content: content.content };
    dispatch(dispatchAction(body));
  };

  const Root = isPost ? Responsive : RN.View;

  return (
    <Root>
      {isPost ? (
        <Paper.TextInput
          placeholder="&nbsp;제목을 입력하세요"
          onChangeText={onChangeTitle}
          value={content.title}
          onSubmitEditing={(e) => onWriteClicked()}
        />
      ) : null}
      <RN.View>
        <Paper.TextInput
          placeholder="&nbsp;내용을 입력하세요"
          onChangeText={onChangeContent}
          value={content.content}
          onSubmitEditing={(e) => onWriteClicked()}
        />
        <Paper.Button mode="contained" onPress={onWriteClicked}>
          {isPost ? "Write" : "Change"}
        </Paper.Button>
      </RN.View>
    </Root>
  );
}
