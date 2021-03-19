// rootReducer
import { combineReducers } from "redux";
import { boardsReducers } from "./boardsSlice";
import { loginReducers } from "./loginSlice";
import { registerReducers } from "./registerSlice";
import { postsReducers } from "./postsSlice";

const rootReducer = combineReducers({
  loginReducers,
  boardsReducers,
  registerReducers,
  postsReducers,
});

export default rootReducer;
