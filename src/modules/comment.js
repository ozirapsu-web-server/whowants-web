import { createAction, handleActions } from "redux-actions";
import * as api from "utils/api";

const GET_TOP3_COMMENTS = "comment/GET_TOP3_COMMENTS";
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
    // console.log(response.data.data);
    dispatch({ type: GET_ALL_COMMENTS, payload: response.data.data });
  } catch (e) {
    throw e;
  }
};

export const getTop3Comments = createAction(GET_TOP3_COMMENTS);
export const addComment = createAction(ADD_COMMENT, (comment) => comment);
export const toggleModal = createAction(TOGGLE_MODAL, (visible) => visible);
export const toggleComments = createAction(TOGGLE_COMMENTS);

const comment = handleActions(
  {
    [GET_ALL_COMMENTS]: (state, action) => ({
      ...state,
      comments: action.payload.support,
      supportCount: action.payload.supportCount,
    }),
    [GET_TOP3_COMMENTS]: (state, { payload: see_all_comments }) => ({
      ...state,
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
