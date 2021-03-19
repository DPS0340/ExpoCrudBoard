import { put } from "redux-saga/effects";
import Axios from "axios";
import { boardsActions } from "../slices/boardsSlice";
import url from "./fetchUrl";

export function* getBoardsAsync(action) {
  let response;
  try {
    response = yield Axios.get(`${url}/board/`);
  } catch (error) {
    yield put(boardsActions.getBoardsAsync(error));
    return;
  }
  console.log({ response });
  yield put(boardsActions.getBoardsAsync(response.data.data));
}
