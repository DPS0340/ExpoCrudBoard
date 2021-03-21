import styles from "../styles/common";
import * as Paper from "react-native-paper";
import * as React from "react";
import { StackNavigationHelpers } from "@react-navigation/stack/lib/typescript/src/types";
import { IPostParams, IRoute } from "../../types";
import CommentsComponent from "../components/CommentsComponent";
import Responsive from "../components/ResponsiveComponent";
import HTML from "react-native-render-html";

export default function PostScreen(props: {
  navigation: StackNavigationHelpers;
  route: IRoute<IPostParams>;
}): React.ReactElement {
  const { navigation, route } = props;
  const { pk, author, board, content, title, writeAt } = route.params;
  const authorName = author?.fields?.nickname ?? navigation.navigate("Login");
  React.useEffect(() => {
    console.log({ pk, author, board, content, title, writeAt });
  }, [pk, author, board, content, title, writeAt]);
  navigation.setOptions({
    title,
  });
  return (
    <Responsive style={styles.container}>
      <Paper.Text style={styles.title}>{title}</Paper.Text>
      <Paper.Text>작성 시각: {writeAt.toLocaleString()}</Paper.Text>
      <Paper.Text>작성자: {authorName}</Paper.Text>
      <HTML source={{ html: content }} />
      <CommentsComponent pk={pk} />
    </Responsive>
  );
}
