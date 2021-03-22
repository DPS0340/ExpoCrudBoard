import styles from "../styles/common";
import * as Paper from "react-native-paper";
import * as React from "react";
import * as RN from "react-native";
import { StackNavigationHelpers } from "@react-navigation/stack/lib/typescript/src/types";
import CommentsComponent from "../components/CommentsComponent";
import HTML from "react-native-render-html";

export default function DeletePostComponent(props: {
  navigation: StackNavigationHelpers;
  pk: number;
}): React.ReactElement {
  const { navigation, pk } = props;
  const onClick = () => {
    alert("TODO");
  };
  return (
    <Paper.Button mode="contained" onPress={onClick}>
      Delete Post
    </Paper.Button>
  );
}
