import { combineReducers } from "redux";
import summary from "modules/summary";
import slide from "modules/slide";
import donation from "modules/donation";
import story from "modules/story";
const rootReducer = combineReducers({ summary, slide, donation, story });

export default rootReducer;
