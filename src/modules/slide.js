import { createAction, handleActions } from "redux-actions";
import * as api from "utils/api";
import study1 from "images/study1.jpg";
import study2 from "images/study2.jpg";
import study3 from "images/study3.jpg";
import study4 from "images/study4.jpg";
import study5 from "images/study5.jpg";

const GET_IMGS = "slide/GET_IMGS";
const GET_IMGS_SUCCESS = "slide/GET_IMGS_SUCCESS";
const GET_IMGS_FAILURE = "slide/GET_IMGS_FAILURE";

const SET_IMGS = "slide/SET_IMGS";
const SET_SLIDER_STYLE = "slide/SET_SLIDER_STYLE";
const SET_CAROUSEL_STYLE = "slide/SET_CAROUSEL_STLYE";
const SET_DIRECTION = "slide/SET_DIRECTION";
const SET_ACTIVE = "slide/SET_ACTIVE";
// const LEFT = "left";
const RIGHT = "right";

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

const initialState = {
  imgs: [],
  sliderStyle: {},
  carouselStyle: {},
  direction: RIGHT,
  active: 0,
  loading: {
    GET_IMGS: false,
  },
};

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
