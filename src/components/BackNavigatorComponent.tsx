import * as React from "react";
import * as Paper from "react-native-paper";
import { useDispatch, useSelector } from "react-redux";
import { loginActions } from "../slices/loginSlice";
import { Text, View } from "./Themed";
import { StackNavigationHelpers } from "@react-navigation/stack/lib/typescript/src/types";
import { useState } from "react";

export default function BackNavigatorComponent(props: {
  navigation: StackNavigationHelpers;
}) {
  const { navigation } = props;
  const BackButton = navigation.canGoBack() ? (
    <Paper.Button
      onPress={() => {
        navigation.goBack();
      }}
    >
      Back
    </Paper.Button>
  ) : null;
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {BackButton}
    </View>
  );
}
