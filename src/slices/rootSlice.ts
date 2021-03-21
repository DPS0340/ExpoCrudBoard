// rootReducer
import { combineReducers } from "redux";
import { boardsReducers } from "./boardsSlice";
import { loginReducers } from "./loginSlice";
import { registerReducers } from "./registerSlice";
import { postsReducers } from "./postsSlice";
import { commentsReducers } from "./commentsSlice";

const rootReducer = combineReducers({
  loginReducers,
  boardsReducers,
  registerReducers,
  postsReducers,
  commentsReducers,
});

export default rootReducer;
