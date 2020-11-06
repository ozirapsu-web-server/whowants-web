const initialState = {
  amount: 1240400,
  target: 3000000,
  percent: 41,
};

const GET_AMOUNT = "GET_AMOUNT";
const GET_PERCENT = "GET_PERCENT";
const POST_AMOUNT = "POST_AMOUNT";
const POST_PERCENT = "POST_PERCENT";

export default function donation(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
