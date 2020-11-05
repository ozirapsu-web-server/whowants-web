import React, { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setImgs,
  setSliderStyle,
  setCarouselStyle,
  setDirection,
  setActive,
} from "modules/slide";
import SlideList from "components/SlideList";

const SlideContainer = React.memo(() => {
  const { imgs, sliderStyle, carouselStyle, direction, active } = useSelector(
    (state) => ({
      imgs: state.slide.imgs,
      sliderStyle: state.slide.sliderStyle,
      direction: state.slide.direction,
      active: state.slide.active,
    })
  );
  const dispatch = useDispatch();
  console.log(direction);
  const onSetImgs = useCallback((imgs) => dispatch(setImgs(imgs)), [dispatch]);
  const onSetSliderStyle = useCallback(
    (sliderStyle) => dispatch(setSliderStyle(sliderStyle)),
    [dispatch]
  );
  const onSetCarouselStyle = useCallback(
    (carouselStyle) => dispatch(setCarouselStyle(carouselStyle)),
    [dispatch]
  );
  const onSetDirection = useCallback(
    (direction) => dispatch(setDirection(direction)),
    [dispatch]
  );
  const onSetActive = useCallback((active) => dispatch(setActive(active)), [
    dispatch,
  ]);

  const moveSlide = useCallback(() => {
    if (direction === "right") {
      // move the first slide to the end
      const firstSlide = imgs.shift();
      onSetImgs([...imgs, firstSlide]);
    } else {
      // move the last slide to the front
      const lastSlide = imgs.pop();
      onSetImgs([lastSlide, ...imgs]);
    }
    onSetSliderStyle({
      transition: "none",
      transform: "translate(0)",
    });
  }, [direction, imgs, onSetSliderStyle, onSetImgs]);

  const nextClicked = useCallback(() => {
    if (direction === "left") {
      moveSlide();
    }
    if (active + 1 === imgs.length) {
      onSetActive(0);
    } else {
      onSetActive(active + 1);
    }
    onSetDirection("right");
    onSetCarouselStyle({
      justifyContent: `flex-start`,
    });
    onSetSliderStyle({
      transform: `translate(-20%)`,
    });
  }, [
    active,
    direction,
    moveSlide,
    imgs.length,
    onSetActive,
    onSetCarouselStyle,
    onSetSliderStyle,
    onSetDirection,
  ]);

  const prevClicked = useCallback(() => {
    if (direction === "right") {
      moveSlide();
    }
    if (active === 0) {
      onSetActive(imgs.length - 1);
    } else {
      onSetActive(active - 1);
    }

    onSetDirection("left");

    onSetCarouselStyle({
      justifyContent: `flex-end`,
    });

    onSetSliderStyle({
      transform: `translate(20%)`,
    });
  }, [
    direction,
    moveSlide,
    imgs.length,
    active,
    onSetDirection,
    onSetActive,
    onSetCarouselStyle,
    onSetSliderStyle,
  ]);

  return (
    <SlideList
      carouselStyle={carouselStyle}
      sliderStyle={sliderStyle}
      imgs={imgs}
      moveSlide={moveSlide}
      active={active}
      prevClicked={prevClicked}
      nextClicked={nextClicked}
    ></SlideList>
  );
});

export default SlideContainer;
