import { takeEvery, takeLatest } from "redux-saga/effects";
import { boardsActions } from "../slices/boardsSlice";
import { loginActions } from "../slices/loginSlice";
import { registerActions } from "../slices/registerSlice";
import { registerAsync } from "./registerSaga";
import { getBoardsAsync } from "./boardsSaga";
import { checkLoginAsync, loginAsync, logoutAsync } from "./loginSaga";
import {
  changePostAsync,
  deletePostAsync,
  getPostsAsync,
  writePostAsync,
} from "./postsSaga";
import { postsActions } from "../slices/postsSlice";
import { commentsActions } from "../slices/commentsSlice";
import {
  changeCommentAsync,
  changeReCommentAsync,
  deleteCommentAsync,
  deleteReCommentAsync,
  getCommentsAsync,
  writeCommentAsync,
  writeRecommentAsync,
} from "./commentsSaga";

const { getPosts, writePost, deletePost, changePost } = postsActions;
const { getBoards } = boardsActions;
const { login, checkLogin, logout } = loginActions;
const { register } = registerActions;
const {
  getComments,
  deleteComment,
  deleteReComment,
  writeComment,
  writeReComment,
  changeComment,
  changeReComment,
} = commentsActions;

export default function* rootWatcher() {
  yield takeLatest(login.type, loginAsync);
  yield takeLatest(register.type, registerAsync);
  yield takeLatest(checkLogin.type, checkLoginAsync);
  yield takeLatest(writePost.type, writePostAsync);
  yield takeLatest(logout.type, logoutAsync);
  yield takeLatest(deletePost.type, deletePostAsync);
  yield takeLatest(deleteComment.type, deleteCommentAsync);
  yield takeLatest(deleteReComment.type, deleteReCommentAsync);
  yield takeLatest(writeComment.type, writeCommentAsync);
  yield takeLatest(writeReComment.type, writeRecommentAsync);
  yield takeLatest(changePost.type, changePostAsync);
  yield takeLatest(changeComment.type, changeCommentAsync);
  yield takeLatest(changeReComment.type, changeReCommentAsync);
  yield takeEvery(getBoards.type, getBoardsAsync);
  yield takeEvery(getPosts.type, getPostsAsync);
  yield takeEvery(getComments.type, getCommentsAsync);
}
