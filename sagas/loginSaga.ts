import { put } from "redux-saga/effects";
import Axios from "axios";
import { loginActions } from "../slices/loginSlice";
import url from "./fetchUrl";
import qs from "query-string";
import client from "./client";

export function* loginAsync(action) {
  const data = action.payload;
  console.log("data", data);
  let response;

  try {
    response = yield client.post(`${url}/login`, qs.stringify(data));
  } catch (error) {
    console.log(error);
    yield put(loginActions.loginFailedAsync(error));
    return;
  }

  console.log("response", response);
  console.log(response.data);
  yield put(loginActions.loginAsync(response.data));
}

export function* checkLoginAsync(action) {
  let response;

  try {
    response = yield client.get(`${url}/login`);
  } catch (error) {
    console.log(error);
    yield put(loginActions.logout());
    return;
  }

  console.log("response", response);
  console.log(response.data);
  if (!response.data.is_login) {
    yield put(loginActions.logout());
  }
}
