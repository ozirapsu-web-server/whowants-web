import { combineReducers } from "redux";
import summary from "modules/summary";
import slide from "modules/slide";
import donation from "modules/donation";
const rootReducer = combineReducers({ summary, slide, donation });

export default rootReducer;
