import { put } from "redux-saga/effects";
import Axios from "axios";
import { loginActions } from "../slices/loginSlice";
import url from "./fetchUrl";
import { registerActions } from "../slices/registerSlice";
import qs from "query-string";
import client from "./client";

export function* registerAsync(action) {
  const data = action.payload;
  console.log("data", data);
  let response;

  try {
    response = yield client.post(`${url}/register`, qs.stringify(data));
  } catch (error) {
    console.log(error);
    yield put(registerActions.registerFailedAsync(error));
    return;
  }
  console.log("response", response);
  console.log(response.data);
  yield put(registerActions.registerAsync(response.data));
}
