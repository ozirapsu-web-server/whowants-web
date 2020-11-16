import { createAction, handleActions } from "redux-actions";
import * as api from "utils/api";
//  액션
const GET_AMOUNT = "donation/GET_AMOUNT";

// 액션 생성함수
export const getDonationInfo = (idx) => async (dispatch) => {
  try {
    const response = await api.getStory(idx);
    dispatch({ type: GET_AMOUNT, payload: response.data.data });
  } catch (e) {
    throw e;
  }
};
//  초기 상태
const initialState = {
  amount: 0,
  target: 0,
  percent: 0,
};
//  후원 금액 리듀서
const donation = handleActions(
  {
    [GET_AMOUNT]: (state, action) => ({
      ...state,
      amount: action.payload.current_amount,
      target: action.payload.target_amount,
      percent: action.payload.amount_rate,
    }),
  },
  initialState
);

export default donation;
