import { put } from "redux-saga/effects";
import Axios from "axios";
import { boardsActions } from "../slices/boardsSlice";
import url from "./fetchUrl";
import { commentsActions } from "../slices/commentsSlice";
import qs from "query-string";
import client from "./client";

export function* getCommentsAsync(action) {
  const { pk } = action.payload;
  let response;
  try {
    response = yield client.get(`${url}/replies?pk=${pk}`);
  } catch (error) {
    yield put(commentsActions.getCommentsFailedAsync(error));
    return;
  }
  console.log({ response });
  yield put(commentsActions.getCommentsAsync(response.data.data));
}

export function* deleteCommentAsync(action) {
  const { pk } = action.payload;
  let response;
  try {
    response = yield client.delete(`${url}/reply?pk=${pk}`, {
      data: qs.stringify({ pk }),
    });
  } catch (error) {
    yield put(commentsActions.deleteCommentFailedAsync(error));
    return;
  }
  console.log({ response });
  yield put(commentsActions.deleteCommentAsync(response.data.data));
}

export function* deleteReCommentAsync(action) {
  const { pk } = action.payload;
  let response;
  try {
    response = yield client.delete(`${url}/answer_reply`, {
      data: qs.stringify({ pk }),
    });
  } catch (error) {
    yield put(commentsActions.deleteCommentFailedAsync(error));
    return;
  }
  console.log({ response });
  yield put(commentsActions.deleteCommentAsync(response.data.data));
}
