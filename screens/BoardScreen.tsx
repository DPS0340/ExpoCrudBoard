import * as React from "react";
import * as RN from "react-native";

import * as Paper from "react-native-paper";
import { Text, View } from "../components/Themed";
import { useDispatch, useSelector } from "react-redux";
import styles from "../styles/common";
import { boardsActions } from "../slices/boardsSlice";
import BoardComponent from "../components/BoardComponent";
import { IBoard } from "../types";
export default function BoardScreen({ navigation }): React.ReactElement {
  const { boards, isLoading, isSuccess, boardError } = useSelector((state) => ({
    boards: state.boardsReducers.boards,
    isLoading: state.boardsReducers.isLoading,
    isSuccess: state.boardsReducers.isSuccess,
    boardError: state.boardsReducers.error,
  }));
  const dispatch = useDispatch();
  const getBoards = () => {
    dispatch(boardsActions.getBoards(navigation));
  };
  React.useEffect(() => {
    if (!isSuccess && !boardError) {
      getBoards();
    }
  }, [isSuccess, boardError]);

  const boardComponents = boards.map((data: IBoard) => (
    <BoardComponent
      navigation={navigation}
      pk={data.pk}
      name={data.fields.name}
    />
  ));

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Boards</Text>
      {boardComponents}
    </View>
  );
}
