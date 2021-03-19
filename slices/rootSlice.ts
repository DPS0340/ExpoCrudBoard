// rootReducer
import { combineReducers } from "redux";
import { boardsReducers } from "./boardsSlice";
import { loginReducers } from "./loginSlice";
import { registerReducers } from "./registerSlice";

const rootReducer = combineReducers({
  loginReducers,
  boardsReducers,
  registerReducers,
});

export default rootReducer;
