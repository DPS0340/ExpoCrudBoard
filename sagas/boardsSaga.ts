import { put } from "redux-saga/effects";
import Axios from "axios";
import { boardsActions } from "../slices/boardsSlice";
import url from "./fetchUrl";

export function* getBoardsAsync(action) {
  const { navigation } = action.payload;

  const response = yield Axios.get(`${url}/board/`);
  yield put(boardsActions.getBoardsAsync(response.data));
  navigation.navigate("Board");
}
