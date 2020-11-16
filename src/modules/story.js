import { createAction, handleActions } from "redux-actions";
import * as api from "utils/api";

//  사연 액션
const GET_STORY_INFO = "story/GET_STORY_INFO";

// 액션 생성함수
export const getStoryInfo = (idx) => async (dispatch) => {
  try {
    const response = await api.getStory(idx);
    dispatch({ type: GET_STORY_INFO, payload: response.data.data });
  } catch (e) {
    throw e;
  }
};
//  초기상태
const initialState = {
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
  },
  initialState
);

export default story;
