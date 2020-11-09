const GET_TOP3_COMMENTS = "GET_TOP3_COMMENTS";

const GET_ALL_COMMENTS = "GET_ALL_COMMENTS";

const initialState = {
  comments: [
    { name: "최해랑", amount: 50000, comment: "응원응원" },
    { name: "최해랑", amount: 0, comment: "응원응원" },
    { name: "최해랑", amount: 50000, comment: "응원응원" },
    { name: "최해랑", amount: 50000, comment: "응원응원" },
  ],
  see_all_comments: false,
};

export const getAllComments = () => {
  return { type: GET_ALL_COMMENTS };
};

export const getTop3Comments = () => {
  return { type: GET_TOP3_COMMENTS };
};

export default function comment(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_COMMENTS:
      return {
        ...state,
        see_all_comments: true,
      };
    case GET_TOP3_COMMENTS:
      return {
        ...state,
        see_all_comments: false,
      };
    default:
      return state;
  }
}
