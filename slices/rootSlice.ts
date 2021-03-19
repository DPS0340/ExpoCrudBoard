// rootReducer
import { combineReducers } from "redux";
import { boardsReducers } from "./boardsSlice";
import { loginReducers } from "./loginSlice";

const rootReducer = combineReducers({ loginReducers, boardsReducers });

export default rootReducer;
