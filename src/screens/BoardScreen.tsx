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
import useEffectWithInitialCallback from "../hooks/useEffectWithInitialCallback";
export default function BoardScreen(props: {
  navigation: StackNavigationHelpers;
  route: IRoute<{ pk: number; name: string; page: number }>;
}): React.ReactElement {
  const { navigation, route } = props;
  if (!route.params) {
    navigation.navigate("boards");
    return <></>;
  }
  const { pk, name, page: pageString } = route.params!;
  const page = isNaN(pageString) ? 1 : +pageString;

  const {
    isLogin,
    posts,
    isLoading,
    isSuccess,
    postsError,
    reset,
  } = useSelector((state) => ({
    isLogin: state.loginReducers.isLogin,
    posts: state.postsReducers.posts,
    isLoading: state.postsReducers.isLoading,
    isSuccess: state.postsReducers.isSuccess,
    postsError: state.postsReducers.error,
    reset: state.postsReducers.reset,
  }));
  const dispatch = useDispatch();

  const getPosts = () => {
    dispatch(
      postsActions.getPosts({
        pk,
        data: { start: (page - 1) * 10, end: page * 10 },
      })
    );
  };

  React.useEffect(() => {
    navigation.setOptions({
      title: `${name} 게시판`,
    });
    getPosts();
  }, [pk, reset, page]);

  const onWriteClicked = () => {
    navigation.push("postWrite", {
      pk,
      boardName: name,
      boardPk: pk,
      boardPage: page,
    });
  };

  if (!posts) {
    return <></>;
  }

  const prevColor = page <= 1 ? Paper.Colors.grey400 : Paper.Colors.blue400;
  const nextColor =
    posts.length < 10 ? Paper.Colors.grey400 : Paper.Colors.blue400;
  const onPrev = () => {
    if (page <= 1) {
      return;
    }
    navigation.push("board", { name, pk, page: page - 1 });
  };
  const onNext = () => {
    if (posts.length < 10) {
      return;
    }
    navigation.push("board", { name, pk, page: page + 1 });
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
            board={item.fields.board}
            author={item.fields.author}
            content={item.fields.content}
            title={item.fields.title}
            writeAtDT={item.fields.writeAt}
            boardPk={pk}
            boardName={name}
            boardPage={page}
          />
        )}
      />
      {isLogin ? (
        <Paper.Button onPress={onWriteClicked}>Write</Paper.Button>
      ) : null}
      <RN.View
        style={{
          flexDirection: "row",
        }}
      >
        <Paper.Button mode="contained" color={prevColor} onPress={onPrev}>
          Previous
        </Paper.Button>
        <Paper.Button mode="contained" color={nextColor} onPress={onNext}>
          Next
        </Paper.Button>
      </RN.View>
    </Responsive>
  );
}
