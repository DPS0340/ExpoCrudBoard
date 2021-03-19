import { put } from "redux-saga/effects";
import Axios from "axios";
import { loginActions } from "../slices/loginSlice";
import url from "./fetchUrl";
import { registerActions } from "../slices/registerSlice";

export function* registerAsync(action) {
  const data = action.payload;
  console.log("data", data);
  let response;
  let failed = false;

  try {
    response = yield Axios.post(`${url}/register`, data);
    console.log("response", response);
  } catch (error) {
    failed = true;
    console.log(error);
    yield put(registerActions.registerFailedAsync(error));
  }

  console.log("response", response);
  console.log(response.data);
  if (failed) {
    return;
  }
  yield put(registerActions.registerAsync(response.data));
}
