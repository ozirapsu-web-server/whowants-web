import { createAction, handleActions } from "redux-actions";
import * as api from "utils/api";

//  사연 액션
const GET_STORY_INFO = "story/GET_STORY_INFO";
const GET_RECENT_STORY = "story/GET_RECENT_STORY";

// 액션 생성함수
export const getStoryInfo = (idx) => async (dispatch) => {
  try {
    const response = await api.getStory(idx);
    dispatch({ type: GET_STORY_INFO, payload: response.data.data });
  } catch (e) {
    throw e;
  }
};
//  방금 시작된 사연
export const getRecentStory = () => async (dispatch) => {
  const response = await api.getRecentStory();
  console.log(response.data.data);
  try {
    dispatch({ type: GET_RECENT_STORY, payload: response.data.data });
  } catch (e) {
    throw e;
  }
};
//  초기상태
const initialState = {
  recentStories: [],
  summary: "",
  title: "",
  content: "",
  organizer: "",
};
//  사연 리듀서
const story = handleActions(
  {
    [GET_STORY_INFO]: (state, action) => ({
      ...state,
      content: action.payload.content,
      title: action.payload.title,
      summary: action.payload.summary,
      organizer: action.payload.host_name,
    }),
    [GET_RECENT_STORY]: (state, action) => ({
      ...state,
      recentStories: action.payload,
    }),
  },
  initialState
);

export default story;
