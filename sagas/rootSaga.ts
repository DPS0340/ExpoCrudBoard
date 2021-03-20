import { takeEvery, takeLatest } from "redux-saga/effects";
import { boardsActions } from "../slices/boardsSlice";
import { loginActions } from "../slices/loginSlice";
import { registerActions } from "../slices/registerSlice";
import { registerAsync } from "./registerSaga";
import { getBoardsAsync } from "./boardsSaga";
import { loginAsync } from "./loginSaga";
import { getPostsAsync } from "./postsSaga";
import { postsActions } from "../slices/postsSlice";
import { commentsActions } from "../slices/commentsSlice";
import { getCommentsAsync } from "./commentsSaga";

const { getPosts } = postsActions;
const { getBoards } = boardsActions;
const { login } = loginActions;
const { register } = registerActions;
const { getComments } = commentsActions;

export default function* rootWatcher() {
  yield takeLatest(login.type, loginAsync);
  yield takeLatest(register.type, registerAsync);
  yield takeEvery(getBoards.type, getBoardsAsync);
  yield takeEvery(getPosts.type, getPostsAsync);
  yield takeEvery(getComments.type, getCommentsAsync);
}
