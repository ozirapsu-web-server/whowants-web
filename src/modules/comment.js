import { createAction, handleActions } from "redux-actions";

const GET_TOP3_COMMENTS = "comment/GET_TOP3_COMMENTS";
const GET_ALL_COMMENTS = "comment/GET_ALL_COMMENTS";

const initialState = {
  comments: [
    { name: "최해랑", amount: 50000, comment: "응원응원" },
    { name: "최해랑", amount: 0, comment: "응원응원" },
    { name: "최해랑", amount: 50000, comment: "응원응원" },
    { name: "최해랑", amount: 50000, comment: "응원응원" },
  ],
  see_all_comments: false,
};

export const getAllComments = createAction(GET_ALL_COMMENTS);
export const getTop3Comments = createAction(GET_TOP3_COMMENTS);

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
  },
  initialState
);

export default comment;
