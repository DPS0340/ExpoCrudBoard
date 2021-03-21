import { put } from "redux-saga/effects";
import Axios from "axios";
import { boardsActions } from "../slices/boardsSlice";
import url from "./fetchUrl";
import client from "./client";

export function* getBoardsAsync(action) {
  let response;
  try {
    response = yield client.get(`${url}/board/`);
  } catch (error) {
    yield put(boardsActions.getBoardsFailedAsync(error));
    return;
  }
  console.log({ response });
  yield put(boardsActions.getBoardsAsync(response.data.data));
}
