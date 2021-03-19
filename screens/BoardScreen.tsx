import * as React from "react";
import * as RN from "react-native";

import * as Paper from "react-native-paper";
import { Text, View } from "../components/Themed";
import { useDispatch, useSelector } from "react-redux";
import styles from "../styles/common";
import PostComponent from "../components/PostComponent";
import { boardsActions } from "../slices/boardsSlice";
import { postsActions } from "../slices/postsSlice";
export default function BoardScreen({ route, navigation }): React.ReactElement {
  const { posts, isLoading, isSuccess, postsError } = useSelector((state) => ({
    posts: state.postsReducers.posts,
    isLoading: state.postsReducers.isLoading,
    isSuccess: state.postsReducers.isSuccess,
    postsError: state.postsReducers.error,
  }));
  const dispatch = useDispatch();
  const { pk, name } = route.params;
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

  return (
    <View style={styles.container}>
      <View>
        <RN.FlatList
          data={posts}
          keyExtractor={(item) => item.pk.toString()}
          renderItem={({ item, index, separators }) => (
            <PostComponent
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
      </View>
    </View>
  );
}
