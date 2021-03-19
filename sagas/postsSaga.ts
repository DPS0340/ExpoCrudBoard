import { put } from "redux-saga/effects";
import Axios from "axios";
import { boardsActions } from "../slices/boardsSlice";
import url from "./fetchUrl";
import qs from "query-string";

export function* getPostsAsync(action) {
  let response;
  try {
    response = yield Axios.get(`${url}/post/`, qs.stringfy({}));
  } catch (error) {
    yield put(boardsActions.getBoardsAsync(error));
    return;
  }
  console.log({ response });
  yield put(boardsActions.getBoardsAsync(response.data.data));
}
