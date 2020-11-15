import { createAction, handleActions } from "redux-actions";
import * as api from "utils/api";

const GET_ALL_COMMENTS = "comment/GET_ALL_COMMENTS";
const ADD_COMMENT = "comment/ADD_COMMENT";
const TOGGLE_MODAL = "comment/TOGGLE_MODAL";
const TOGGLE_COMMENTS = "comment/TOGGLE_COMMENTS";

const initialState = {
  comments: [],
  see_all_comments: false,
  visible: false,
  supportCount: 0,
};

export const getAllComments = (idx, filter) => async (dispatch) => {
  try {
    const response = await api.getAllComments(idx, filter);
    dispatch({ type: GET_ALL_COMMENTS, payload: response.data.data });
  } catch (e) {
    throw e;
  }
};
export const addComment = (idx, comment) => async (dispatch) => {
  try {
    await api.addComment(idx, comment);

    dispatch({ type: ADD_COMMENT, payload: comment });
  } catch (e) {
    throw e;
  }
};

export const toggleModal = createAction(TOGGLE_MODAL, (visible) => visible);
export const toggleComments = createAction(TOGGLE_COMMENTS);

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
