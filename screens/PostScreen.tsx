import styles from "../styles/common";
import { Text, View } from "../components/Themed";
import * as Paper from "react-native-paper";
import * as React from "react";
import { StackNavigationHelpers } from "@react-navigation/stack/lib/typescript/src/types";
import { IPostParams, IRoute } from "../types";

export default function PostScreen(props: {
  navigation: StackNavigationHelpers;
  route: IRoute<IPostParams>;
}): React.ReactElement {
  const { navigation, route } = props;
  const { pk, author, board, content, title, writeAt } = route.params;
  const authorName = author.fields.username;
  React.useEffect(() => {
    console.log({ pk, author, board, content, title, writeAt });
  }, [pk, author, board, content, title, writeAt]);
  navigation.setOptions({
    title,
  });
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text>작성 시각: {writeAt.toLocaleString()}</Text>
      <Text>작성자: {authorName}</Text>
      <Text>{content}</Text>
    </View>
  );
}
