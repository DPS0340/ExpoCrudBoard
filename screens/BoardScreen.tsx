import * as React from "react";
import * as RN from "react-native";

import * as Paper from "react-native-paper";
import { Text, View } from "../components/Themed";
import { useDispatch, useSelector } from "react-redux";
import { loginActions } from "../slices/loginSlice";
import { IResponse } from "../types";
import styles from "../styles/common";
export default function BoardScreen({ navigation }): React.ReactElement {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Not Implemented</Text>
    </View>
  );
}
