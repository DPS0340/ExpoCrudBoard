import { takeEvery, takeLatest } from "redux-saga/effects";
import { boardsActions } from "../slices/boardsSlice";
import { loginActions } from "../slices/loginSlice";
import { getBoardsAsync } from "./boardsSaga";
import { loginAsync } from "./loginSaga";

const { getBoards } = boardsActions;
const { login } = loginActions;

export default function* rootWatcher() {
  yield takeLatest(login.type, loginAsync);
  yield takeEvery(getBoards.type, getBoardsAsync);
}
