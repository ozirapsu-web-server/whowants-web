import { combineReducers } from "redux";
import summary from "modules/summary";
import slide from "modules/slide";

const rootReducer = combineReducers({ summary, slide });

export default rootReducer;
