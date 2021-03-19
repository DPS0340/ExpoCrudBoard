import { put } from "redux-saga/effects";
import Axios from "axios";
import { loginActions } from "../slices/loginSlice";
import url from "./fetchUrl";

export function* loginAsync(action) {
  const { data, navigation } = action.payload;
  console.log("data", data);
  let response;
  let failed = false;

  try {
    response = yield Axios.post(`${url}/login`, data);
    console.log("response", response);
  } catch (error) {
    failed = true;
    console.log(error);
    yield put(loginActions.loginFailedAsync(error));
  }

  console.log("response", response);
  console.log(response.data);
  if (failed) {
    return;
  }
  yield put(loginActions.loginAsync(response.data));
}
