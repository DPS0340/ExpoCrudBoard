// rootReducer
import { combineReducers } from "redux";
import { boardsReducers } from "./boardsSlice";
import { loginReducers } from "./loginSlice";
import { registerReducers } from "./registerSlice";
import { postsReducers } from "./postsSlice";
import { commentsReducers } from "./commentsSlice";
import { changeEditReducers } from "./changeEditSlice";

const rootReducer = combineReducers({
  loginReducers,
  boardsReducers,
  registerReducers,
  postsReducers,
  commentsReducers,
  changeEditReducers,
});

export default rootReducer;
