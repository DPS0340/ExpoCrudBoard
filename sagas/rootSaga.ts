import { takeEvery, takeLatest } from "redux-saga/effects";
import { boardsActions } from "../slices/boardsSlice";
import { getBoardsAsync } from "./boardsSaga";

const { getBoards } = boardsActions;

export default function* rootWatcher() {
  yield takeLatest(registerRoom.type, registerRoomAsync);
  yield takeLatest(putRoom.type, putRoomAsync);
  yield takeEvery(getRooms.type, getRoomsAsync);
}
