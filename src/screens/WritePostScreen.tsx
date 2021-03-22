import { StackNavigationHelpers } from "@react-navigation/stack/lib/typescript/src/types";
import * as React from "react";
import Responsive from "../components/ResponsiveComponent";
import * as RN from "react-native";
import * as Paper from "react-native-paper";
import { useDispatch, useSelector } from "react-redux";
import { postsActions } from "../slices/postsSlice";
import { IRoute } from "../../types";

export default function WritePostScreen(props: {
  navigation: StackNavigationHelpers;
  route: IRoute<{ pk: number }>;
}): React.ReactElement {
  const { navigation, route } = props;
  const { pk } = route.params;
  const { posts, isLoading, isSuccess, postsError } = useSelector((state) => ({
    posts: state.postsReducers.posts,
    isLoading: state.postsReducers.isLoading,
    isSuccess: state.postsReducers.isSuccess,
    postsError: state.postsReducers.error,
  }));
  const dispatch = useDispatch();

  const [content, setContent] = React.useState({ pk, title: "", content: "" });
  const onChangeTitle = (e: any) => {
    setContent({ ...content, title: e.target.value });
  };
  const onChangeContent = (e: any) => {
    setContent({ ...content, content: e.target.value });
  };

  React.useEffect(() => {
    dispatch(postsActions.reset());
  }, []);

  React.useEffect(() => {
    if (isLoading || !isSuccess) {
      return;
    }
    if (navigation.canGoBack()) {
      navigation.goBack();
    }
  }, [isLoading]);

  const onWriteClicked = () => {
    dispatch(postsActions.writePost(content));
  };

  return (
    <Responsive>
      <Paper.TextInput
        placeholder="&nbsp;제목을 입력하세요"
        onChange={onChangeTitle}
        value={content.title}
      />
      <RN.View>
        <Paper.TextInput
          placeholder="&nbsp;내용을 입력하세요"
          onChange={onChangeContent}
          value={content.content}
        />
        <Paper.Button mode="contained" onPress={onWriteClicked}>
          Write
        </Paper.Button>
      </RN.View>
    </Responsive>
  );
}
