import { put } from "redux-saga/effects";
import Axios from "axios";
import { boardsActions } from "../slices/boardsSlice";
import url from "./fetchUrl";
import qs from "query-string";
import { postsActions } from "../slices/postsSlice";
import client from "./client";

export function* getPostsAsync(action) {
  const { pk, data } = action.payload;
  console.log({ pk, data });
  let response;
  try {
    response = yield client.get(`${url}/post?pk=${pk}`, qs.stringify(data));
  } catch (error) {
    yield put(postsActions.getPostsFailedAsync(error));
    return;
  }
  console.log({ response });
  yield put(postsActions.getPostsAsync(response.data.data));
}

export function* writePostAsync(action) {
  const data = action.payload;
  let response;
  try {
    response = yield client.post(`${url}/post`, qs.stringify(data));
  } catch (error) {
    yield put(postsActions.writePostFailedAsync(error));
    return;
  }
  console.log({ response });
  yield put(postsActions.writePostAsync(response.data.data));
}
