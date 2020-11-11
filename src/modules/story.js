import { createAction, handleActions } from "redux-actions";
import * as api from "utils/api";

const GET_STORY_INFO = "story/GET_STORY_INFO";

export const getStoryInfo = (idx) => async (dispatch) => {
  try {
    const response = await api.getStory(idx);
    dispatch({ type: GET_STORY_INFO, payload: response.data.data });
  } catch (e) {
    throw e;
  }
};

const initialState = {
  summary: "",
  title: "",
  content: "",
  organizer: "",
};

const story = handleActions(
  {
    [GET_STORY_INFO]: (state, action) => ({
      ...state,
      content: action.payload.content,
      title: action.payload.title,
      summary: action.payload.summary,
      organizer: action.payload.host_name,
    }),
  },
  initialState
);

export default story;
