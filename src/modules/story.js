import { createAction, handleActions } from "redux-actions";
import * as api from "utils/api";

//  사연 액션
const GET_STORY_INFO = "story/GET_STORY_INFO";
const GET_RECENT_STORY = "story/GET_RECENT_STORY";
const GET_HOT_STORY="story/GET_HOR_STORY";
const SET_STORY_IDX = "story/SET_STORY_IDX";

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
  try {
    dispatch({ type: GET_RECENT_STORY, payload: response.data.data });
  } catch (e) {
    throw e;
  }
};

// 주목할만한 사연

export const getHotStory = () => async (dispatch) => {
  const response = await api.getHotStory();
  try {
    dispatch({ type: GET_HOT_STORY, payload: response.data.data });
  } catch (e) {
    throw e;
  }
};


export const setStoryIdx = createAction(SET_STORY_IDX, (idx) => idx);

//  초기상태
const initialState = {
  idx: 1,
  recentStories: [],
  summary: "",
  title: "",
  content: "",
  organizer: "",
  tags: [],
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
      tags: action.payload.tags,
    }),
    [GET_RECENT_STORY]: (state, action) => ({
      ...state,
      recentStories: action.payload,
    }),
    [SET_STORY_IDX]: (state, { payload: idx }) => ({
      ...state,
      idx,
    }),
  },
  initialState
);

export default story;
