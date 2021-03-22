import * as React from "react";
import * as RN from "react-native";

import * as Paper from "react-native-paper";
import { Text, View } from "../components/Themed";
import { useDispatch, useSelector } from "react-redux";
import styles from "../styles/common";
import PostPreviewComponent from "../components/PostPreviewComponent";
import { postsActions } from "../slices/postsSlice";
import Responsive from "../components/ResponsiveComponent";
import { StackNavigationHelpers } from "@react-navigation/stack/lib/typescript/src/types";
import { IRoute } from "../../types";
export default function BoardScreen(props: {
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
  navigation.setOptions({
    title: `${name} 게시판`,
  });
  React.useEffect(() => {
    console.log({ pk, name });
    dispatch(
      postsActions.getPosts({
        pk,
        data: {},
      })
    );
  }, [pk, name]);

  React.useEffect(() => {
    console.log({ posts, postsError });
  }, [posts, postsError]);

  const onWriteClicked = () => {
    navigation.push("postWrite", { pk });
  };

  return (
    <Responsive style={styles.container}>
      <RN.FlatList
        data={posts}
        keyExtractor={(item) => item.pk.toString()}
        renderItem={({ item, index, separators }) => (
          <PostPreviewComponent
            navigation={navigation}
            pk={item.pk}
            author={item.fields.author}
            board={item.fields.board}
            content={item.fields.content}
            title={item.fields.title}
            writeAtDT={item.fields.writeAt}
          />
        )}
      />
      <Paper.Button mode="contained" onPress={onWriteClicked}>
        Write
      </Paper.Button>
    </Responsive>
  );
}
