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

export default function comment(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
