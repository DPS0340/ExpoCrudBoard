import * as React from "react";
import * as RN from "react-native";

import * as Paper from "react-native-paper";
import { Text, View } from "../components/Themed";
import { useDispatch, useSelector } from "react-redux";
import styles from "../styles/common";
import { boardsActions } from "../slices/boardsSlice";
import BoardComponent from "../components/BoardComponent";
import { IBoard } from "../types";
import { FlatList } from "react-native-gesture-handler";
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

  React.useEffect(() => {
    console.log(boards);
  }, [boards]);

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Boards</Text>
      </View>
      <View>
        <RN.FlatList
          data={boards}
          renderItem={({ item, index, separators }) => (
            <BoardComponent
              navigation={navigation}
              pk={item.pk}
              name={item.fields.name}
            />
          )}
        />
      </View>
    </View>
  );
}
