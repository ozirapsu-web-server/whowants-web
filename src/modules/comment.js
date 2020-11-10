import { createAction, handleActions } from "redux-actions";

const GET_TOP3_COMMENTS = "comment/GET_TOP3_COMMENTS";
const GET_ALL_COMMENTS = "comment/GET_ALL_COMMENTS";
const ADD_COMMENT = "comment/ADD_COMMENT";
const TOGGLE_MODAL = "comment/TOGGLE_MODAL";

const initialState = {
  comments: [
    { name: "최해랑", amount: 50000, comment: "응원응원" },
    { name: "최해랑", amount: 0, comment: "응원응원" },
    { name: "최해랑", amount: 50000, comment: "응원응원" },
    { name: "최해랑", amount: 50000, comment: "응원응원" },
  ],
  see_all_comments: false,
  visible: false,
};

export const getAllComments = createAction(GET_ALL_COMMENTS);
export const getTop3Comments = createAction(GET_TOP3_COMMENTS);
export const addComment = createAction(ADD_COMMENT, (comment) => comment);
export const toggleModal = createAction(TOGGLE_MODAL, (visible) => visible);

const comment = handleActions(
  {
    [GET_ALL_COMMENTS]: (state, { payload: see_all_comments }) => ({
      ...state,
      see_all_comments: true,
    }),
    [GET_TOP3_COMMENTS]: (state, { payload: see_all_comments }) => ({
      ...state,
      see_all_comments: false,
    }),
    [ADD_COMMENT]: (state, { payload: comment }) => ({
      ...state,
      comments: state.comments.concat(comment),
    }),
    [TOGGLE_MODAL]: (state, { payload: visible }) => ({
      ...state,
      visible: !state.visible,
    }),
  },
  initialState
);

export default comment;
