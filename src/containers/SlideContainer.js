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
const SlideContainer = React.memo(({pageIdx}) => {
  const {
    imgs,
    sliderStyle,
    carouselStyle,
    direction,
    active,
    idx,
  } = useSelector((state) => ({
    imgs: state.slide.imgs,
    loading: state.slide.loading.GET_IMGS,
    sliderStyle: state.slide.sliderStyle, //슬라이드 스타일
    direction: state.slide.direction, //슬라이드 이동 방향
    active: state.slide.active, //현재 보이는 이미지
    carouselStyle: state.slide.carouselStyle, //carousel컴포넌트 스타일
  }));

  const imgLength = imgs.length;
  const slideWidth = 100 / imgLength;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getImgs(pageIdx));
  }, [dispatch, pageIdx]);

  //  현재 이동 방향이 오른쪽이냐 왼쪽이냐에 따라 이미지의 순서를 변경한다
  const moveSlide = useCallback(() => {
    if (direction === "right") {
      const firstSlide = imgs.shift();
      dispatch(setImgs([...imgs, firstSlide]));
    } else if (direction === "left") {
      const lastSlide = imgs.pop();
      dispatch(setImgs([lastSlide, ...imgs]));
    }
    dispatch(
      setSliderStyle({
        transition: "none",
        transform: "translate(0)",
      })
    );
  }, [direction, imgs, dispatch]);
  //  오른쪽 버튼 클릭
  const nextClicked = useCallback(() => {
    if (direction === "left") {
      moveSlide();
    }
    dispatch(setDirection("right"));
    dispatch(
      setCarouselStyle({
        justifyContent: `flex-start`,
      })
    );
    dispatch(
      setSliderStyle({
        transform: `translate(-${slideWidth}%)`,
      })
    );
    dispatch(setActive((active + 1) % imgLength));
  }, [active, direction, moveSlide, imgLength, slideWidth, dispatch]);
  //  왼쪽 버튼 클릭
  const prevClicked = useCallback(() => {
    if (direction === "right") {
      moveSlide();
    }
    if (active === 0) {
      dispatch(setActive(imgLength - 1));
    } else {
      dispatch(setActive(active - 1));
    }

    dispatch(setDirection("left"));

    dispatch(
      setCarouselStyle({
        justifyContent: `flex-end`,
      })
    );

    dispatch(
      setSliderStyle({
        transform: `translate(${slideWidth}%)`,
      })
    );
  }, [direction, moveSlide, imgLength, active, slideWidth, dispatch]);

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
