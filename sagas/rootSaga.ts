import { takeEvery, takeLatest } from "redux-saga/effects";
import { boardsActions } from "../slices/boardsSlice";
import { loginActions } from "../slices/loginSlice";
import { registerActions } from "../slices/registerSlice";
import { registerAsync } from "./registerSaga";
import { getBoardsAsync } from "./boardsSaga";
import { loginAsync } from "./loginSaga";

const { getBoards } = boardsActions;
const { login } = loginActions;
const { register } = registerActions;

export default function* rootWatcher() {
  yield takeLatest(login.type, loginAsync);
  yield takeLatest(register.type, registerAsync);
  yield takeEvery(getBoards.type, getBoardsAsync);
}
