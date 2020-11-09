import { combineReducers } from "redux";
import summary from "modules/summary";
import slide from "modules/slide";
import donation from "modules/donation";
import story from "modules/story";
import comment from "modules/comment";
const rootReducer = combineReducers({
  summary,
  slide,
  donation,
  story,
  comment,
});

export default rootReducer;
