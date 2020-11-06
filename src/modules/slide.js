import study1 from "images/study1.jpg";
import study2 from "images/study2.jpg";
import study3 from "images/study3.jpg";
import study4 from "images/study4.jpg";
import study5 from "images/study5.jpg";

const SET_IMGS = "SET_IMGS";
const SET_SLIDER_STYLE = "SET_SLIDER_STYLE";
const SET_CAROUSEL_STYLE = "SET_CAROUSEL_STLYE";
const SET_DIRECTION = "SET_DIRECTION";
const SET_ACTIVE = "SET_ACTIVE";
// const LEFT = "left";
const RIGHT = "right";

export const setImgs = (imgs) => {
  return { type: SET_IMGS, imgs };
};

export const setSliderStyle = (sliderStyle) => {
  return { type: SET_SLIDER_STYLE, sliderStyle };
};
export const setCarouselStyle = (carouselStyle) => ({
  type: SET_CAROUSEL_STYLE,
  carouselStyle,
});

export const setDirection = (direction) => ({ type: SET_DIRECTION, direction });

export const setActive = (active) => ({ type: SET_ACTIVE, active });

const initialState = {
  imgs: [study1, study2, study3, study4, study5],
  sliderStyle: {},
  carouselStyle: {},
  direction: RIGHT,
  active: 0,
};

export default function slide(state = initialState, action) {
  switch (action.type) {
    case SET_IMGS:
      return {
        ...state,
        imgs: action.imgs,
      };
    case SET_SLIDER_STYLE:
      return {
        ...state,
        sliderStyle: action.sliderStyle,
      };
    case SET_CAROUSEL_STYLE:
      return {
        ...state,
        carouselStyle: action.carouselStyle,
      };
    case SET_DIRECTION:
      return {
        ...state,
        direction: action.direction,
      };
    case SET_ACTIVE:
      return {
        ...state,
        active: action.active,
      };
    default:
      return state;
  }
}
