import { put } from "redux-saga/effects";
import Axios from "axios";
import { boardsActions } from "../slices/boardsSlice";
import url from "./fetchUrl";
import { commentsActions } from "../slices/commentsSlice";
import qs from "query-string";
import client from "./client";

export function* getCommentsAsync(action) {
  const { pk } = action.payload;
  yield put(commentsActions.loading());
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
  yield put(commentsActions.loading());
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

export function* changeCommentAsync(action) {
  const data = action.payload;
  yield put(commentsActions.loading());
  let response;
  try {
    response = yield client.put(`${url}/reply`, qs.stringify(data));
  } catch (error) {
    yield put(commentsActions.changeCommentFailedAsync(error));
    return;
  }
  console.log({ response });
  yield put(commentsActions.changeCommentAsync(response.data.data));
}

export function* changeReCommentAsync(action) {
  const data = action.payload;
  yield put(commentsActions.loading());
  let response;
  try {
    response = yield client.put(`${url}/answer_reply`, qs.stringify(data));
  } catch (error) {
    yield put(commentsActions.changeCommentFailedAsync(error));
    return;
  }
  console.log({ response });
  yield put(commentsActions.changeCommentAsync(response.data.data));
}

export function* deleteReCommentAsync(action) {
  const { pk } = action.payload;
  yield put(commentsActions.loading());
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

export function* writeCommentAsync(action) {
  const data = action.payload;
  let response;
  try {
    response = yield client.post(`${url}/reply`, qs.stringify(data));
  } catch (error) {
    yield put(commentsActions.writeCommentFailedAsync(error));
    return;
  }
  console.log({ response });
  yield put(commentsActions.writeCommentAsync(response.data.data));
}
export function* writeRecommentAsync(action) {
  const data = action.payload;
  let response;
  try {
    response = yield client.post(`${url}/answer_reply`, qs.stringify(data));
  } catch (error) {
    yield put(commentsActions.writeReCommentFailedAsync(error));
    return;
  }
  console.log({ response });
  yield put(commentsActions.writeReCommentAsync(response.data.data));
}
