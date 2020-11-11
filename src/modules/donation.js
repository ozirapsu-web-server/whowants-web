import { createAction, handleActions } from "redux-actions";
import * as api from "utils/api";

const GET_AMOUNT = "donation/GET_AMOUNT";

export const getDonationInfo = (idx) => async (dispatch) => {
  try {
    const response = await api.getStory(idx);
    dispatch({ type: GET_AMOUNT, payload: response.data.data });
  } catch (e) {
    throw e;
  }
};

const initialState = {
  amount: 0,
  target: 0,
  percent: 0,
};

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
