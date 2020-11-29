import { createAction, handleActions } from "redux-actions";
import * as api from "utils/api";

// 액션
const GET_IMGS = "slide/GET_IMGS";
const GET_IMGS_SUCCESS = "slide/GET_IMGS_SUCCESS";
const GET_IMGS_FAILURE = "slide/GET_IMGS_FAILURE";

const SET_IMGS = "SET_IMGS";
const SET_SLIDER_STYLE = "SET_SLIDER_STYLE";
const SET_CAROUSEL_STYLE = "SET_CAROUSEL_STLYE";
const SET_DIRECTION = "SET_DIRECTION";
const SET_ACTIVE = "SET_ACTIVE";

// 액션 생성함수
export const getImgs = (idx) => async (dispatch) => {
  dispatch({ type: GET_IMGS });
  try {
    const response = await api.getImgs(idx);
    dispatch({ type: GET_IMGS_SUCCESS, payload: response.data.data });
  } catch (e) {
    dispatch({ type: GET_IMGS_FAILURE, payload: e, error: true });
    throw e;
  }
};

export const setImgs = createAction(SET_IMGS, (imgs) => imgs);

export const setSliderStyle = createAction(
  SET_SLIDER_STYLE,
  (sliderStyle) => sliderStyle
);

export const setCarouselStyle = createAction(
  SET_CAROUSEL_STYLE,
  (carouselStyle) => carouselStyle
);

export const setDirection = createAction(
  SET_DIRECTION,
  (direction) => direction
);

export const setActive = createAction(SET_ACTIVE, (active) => active);

//  초기 상태
const initialState = {
  imgs: [],
  sliderStyle: {}, //슬라이더 스타일 상태
  carouselStyle: {},
  direction: null, //슬라이드 방향
  active: 0, // 현재 보이는 이미지
  loading: {
    GET_IMGS: false,
  },
};
//  슬라이드 리듀서
const slide = handleActions(
  {
    [GET_IMGS]: (state) => ({
      ...state,
      loading: {
        ...state.loading,
        GET_IMGS: true,
      },
    }),
    [GET_IMGS_SUCCESS]: (state, action) => ({
      ...state,
      loading: {
        ...state.loading,
        GET_IMGS: false,
      },
      imgs: action.payload,
    }),
    [GET_IMGS_FAILURE]: (state, action) => ({
      ...state,
      loading: {
        ...state.loading,
        GET_IMGS: false,
      },
    }),
    [SET_IMGS]: (state, { payload: imgs }) => ({
      ...state,
      imgs,
    }),
    [SET_SLIDER_STYLE]: (state, { payload: sliderStyle }) => ({
      ...state,
      sliderStyle,
    }),
    [SET_CAROUSEL_STYLE]: (state, { payload: carouselStyle }) => ({
      ...state,
      carouselStyle,
    }),
    [SET_DIRECTION]: (state, { payload: direction }) => ({
      ...state,
      direction,
    }),
    [SET_ACTIVE]: (state, { payload: active }) => ({
      ...state,
      active,
    }),
  },
  initialState
);

export default slide;
