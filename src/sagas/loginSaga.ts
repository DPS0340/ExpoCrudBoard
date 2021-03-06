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
    yield put(loginActions.logout());
    return;
  }

  if (!response.data.is_login) {
    yield put(loginActions.logout());
    return;
  }
  yield put(loginActions.checkLoginAsync(response.data));
}

export function* logoutAsync(action) {
  let response;
  try {
    response = yield client.get(`${url}/logout`);
  } catch (error) {
    yield put(loginActions.logout());
    return;
  }
  yield put(loginActions.logoutAsync(response.data));
}
