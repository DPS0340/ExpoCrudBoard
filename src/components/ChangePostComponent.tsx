import styles from "../styles/common";
import * as Paper from "react-native-paper";
import * as React from "react";
import * as RN from "react-native";
import { StackNavigationHelpers } from "@react-navigation/stack/lib/typescript/src/types";
import CommentsComponent from "../components/CommentsComponent";
import HTML from "react-native-render-html";
import { useDispatch, useSelector } from "react-redux";
import { postsActions, postsReducers } from "../slices/postsSlice";
import useEffectWithInitialCallback from "../hooks/useEffectWithInitialCallback";

export default function ChangePostComponent(props: {
  navigation: StackNavigationHelpers;
  pk: number;
  name: string;
  title: string;
  content: string;
}): React.ReactElement {
  const { navigation, pk, name, title, content } = props;
  const onClick = () => {
    navigation.push("postChange", { pk, name, title, content });
  };
  return <Paper.Button onPress={onClick}>Change Post</Paper.Button>;
}
