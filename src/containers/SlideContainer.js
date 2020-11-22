import React, { useCallback, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getImgs,
  setImgs,
  setSliderStyle,
  setCarouselStyle,
  setDirection,
  setActive,
} from "modules/slide";
import SlideList from "components/SlideList";
// 이미지 슬라이드 컨테이너 컴포넌트
const SlideContainer = React.memo(() => {
  const { imgs, sliderStyle, carouselStyle, direction, active } = useSelector(
    (state) => ({
      imgs: state.slide.imgs,
      loading: state.slide.loading.GET_IMGS,
      sliderStyle: state.slide.sliderStyle, //슬라이드 스타일
      direction: state.slide.direction, //슬라이드 이동 방향
      active: state.slide.active, //현재 보이는 이미지
      carouselStyle: state.slide.carouselStyle, //carousel컴포넌트 스타일
    })
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getImgs(1));
  }, [dispatch]);
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
  //  현재 이동 방향이 오른쪽이냐 왼쪽이냐에 따라 이미지의 순서를 변경한다
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
  //  오른쪽 버튼 클릭
  const nextClicked = useCallback(() => {
    if (direction === "left") {
      moveSlide();
    }
    onSetDirection("right");
    onSetCarouselStyle({
      justifyContent: `flex-start`,
    });
    onSetSliderStyle({
      transform: `translate(-20%)`,
    });
    if (active + 1 === imgs.length) {
      onSetActive(0);
    } else {
      onSetActive(active + 1);
    }
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
  //  왼쪽 버튼 클릭
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
