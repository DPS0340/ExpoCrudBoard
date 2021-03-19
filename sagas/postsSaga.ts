import { put } from "redux-saga/effects";
import Axios from "axios";
import { boardsActions } from "../slices/boardsSlice";
import url from "./fetchUrl";
import qs from "query-string";
import { postsActions } from "../slices/postsSlice";

export function* getPostsAsync(action) {
  const { pk, data } = action.payload;
  let response;
  try {
    response = yield Axios.get(`${url}/post/${pk}`, qs.stringfy(data));
  } catch (error) {
    yield put(postsActions.getPostsFailedAsync(error));
    return;
  }
  console.log({ response });
  yield put(postsActions.getPostsAsync(response.data.data));
}
