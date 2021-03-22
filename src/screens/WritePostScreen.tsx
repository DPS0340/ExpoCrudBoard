import { StackNavigationHelpers } from "@react-navigation/stack/lib/typescript/src/types";
import * as React from "react";
import Responsive from "../components/ResponsiveComponent";
import * as RN from "react-native";
import * as Paper from "react-native-paper";
import { useDispatch, useSelector } from "react-redux";
import { postsActions } from "../slices/postsSlice";
import { IRoute } from "../../types";
import useEffectWithInitialCallback from "../hooks/useEffectWithInitialCallback";

export default function WritePostScreen(props: {
  navigation: StackNavigationHelpers;
  route: IRoute<{ pk: number; name: string }>;
}): React.ReactElement {
  const { navigation, route } = props;
  const { pk, name } = route.params;
  const { posts, isLoading, isSuccess, postsError } = useSelector((state) => ({
    posts: state.postsReducers.posts,
    isLoading: state.postsReducers.isLoading,
    isSuccess: state.postsReducers.isSuccess,
    postsError: state.postsReducers.error,
  }));
  const dispatch = useDispatch();

  const [content, setContent] = React.useState({ pk, title: "", content: "" });
  const [onEnter, setOnEnter] = React.useState(true);
  const onChangeTitle = (e: any) => {
    setContent({ ...content, title: e.target.value });
  };
  const onChangeContent = (e: any) => {
    setContent({ ...content, content: e.target.value });
  };

  useEffectWithInitialCallback(
    () => {
      dispatch(postsActions.resetStatus());
    },
    () => {
      if (!isSuccess || isLoading) {
        return;
      }
      navigation.push("board", { name, pk });
    },
    [isSuccess, isLoading]
  );

  const onWriteClicked = () => {
    dispatch(postsActions.writePost(content));
  };

  return (
    <Responsive>
      <Paper.TextInput
        placeholder="&nbsp;제목을 입력하세요"
        onChange={onChangeTitle}
        value={content.title}
        onSubmitEditing={(e) => onWriteClicked()}
      />
      <RN.View>
        <Paper.TextInput
          placeholder="&nbsp;내용을 입력하세요"
          onChange={onChangeContent}
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
