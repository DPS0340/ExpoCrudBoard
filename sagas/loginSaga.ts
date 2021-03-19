import { put } from "redux-saga/effects";
import Axios from "axios";
import { loginActions } from "../slices/loginSlice";
import url from "./fetchUrl";
import qs from "query-string";

export function* loginAsync(action) {
  const data = action.payload;
  console.log("data", data);
  let response;
  let failed = false;

  try {
    response = yield Axios.post(`${url}/login`, qs.stringify(data));
  } catch (error) {
    console.log(error);
    yield put(loginActions.loginFailedAsync(error));
    return;
  }

  console.log("response", response);
  console.log(response.data);
  yield put(loginActions.loginAsync(response.data));
}
