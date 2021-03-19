import { put } from "redux-saga/effects";
import Axios from "axios";
import { loginActions } from "../slices/loginSlice";
import url from "./fetchUrl";

export function* loginAsync(action) {
  const { data, navigation } = action.payload;
  console.log("data", data);

  const response = yield Axios.post(`${url}/login`, data);
  console.log("response", response);
  yield put(loginActions.loginAsync(response.data));
  navigation.navigate("Main");
}
