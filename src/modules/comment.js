import { createAction, handleActions } from "redux-actions";
import * as api from "utils/api";

//  액션
const GET_ALL_COMMENTS = "comment/GET_ALL_COMMENTS";
const ADD_COMMENT = "comment/ADD_COMMENT";
const TOGGLE_MODAL = "comment/TOGGLE_MODAL";
const TOGGLE_COMMENTS = "comment/TOGGLE_COMMENTS";
//  초기 상태
const initialState = {
  comments: [], //댓글 리스트
  see_all_comments: false, // 전체 댓글 보여주기 여부
  visible: false, // 모달 보여주기 여부
  supportCount: 0, // 후원자 인원수
};
//  전체 댓글 가져오기 액션생성함수
export const getAllComments = (idx, filter) => async (dispatch) => {
  try {
    const response = await api.getAllComments(idx, filter);
    dispatch({ type: GET_ALL_COMMENTS, payload: response.data.data });
  } catch (e) {
    throw e;
  }
};
//  댓글 추가 액션 생성 함수
export const addComment = (idx, comment) => async (dispatch) => {
  try {
    await api.addComment(idx, comment);

    dispatch({ type: ADD_COMMENT, payload: comment });
  } catch (e) {
    throw e;
  }
};
//  모달 토글 액션 생성함수
export const toggleModal = createAction(TOGGLE_MODAL, (visible) => visible);
//  댓글 전체 보여주기 액션 생성함수
export const toggleComments = createAction(TOGGLE_COMMENTS);

//  댓글 리듀서
const comment = handleActions(
  {
    [GET_ALL_COMMENTS]: (state, action) => ({
      ...state,
      comments: action.payload.support,
      supportCount: action.payload.supportCount,
    }),
    [ADD_COMMENT]: (state, { payload: comment }) => ({
      ...state,
      comments: state.comments.concat(comment),
    }),
    [TOGGLE_MODAL]: (state, { payload: visible }) => ({
      ...state,
      visible: !state.visible,
    }),
    [TOGGLE_COMMENTS]: (state, payload) => ({
      ...state,
      see_all_comments: !state.see_all_comments,
    }),
  },
  initialState
);

export default comment;
