import React from "react";
import styled from "styled-components";
import { ArrowIosForwardOutline } from "@styled-icons/evaicons-outline/ArrowIosForwardOutline";
import DotList from "components/DotList";
import Slide from "components/Slide";
import { MOBILE_MAX, PC_MIN, TABLET_MIN } from "utils/media";
const Carousel = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  overflow: hidden;
  position: relative;
  @media only screen and (max-width: ${MOBILE_MAX}px) {
    height: 350px;
  }
  @media only screen and (min-width: ${TABLET_MIN}px) {
    height: 500px;
  }
  @media only screen and (min-width: ${PC_MIN}px) {
    height: 343px;
    width: 581.46px;
  }
`;

const Sliders = styled.div`
  display: flex;
  height: 100%;
  width: ${(props) => props.len}%;
  flex-shrink: 0;
  transition: all 0.5s;
`;

const Button = styled(ArrowIosForwardOutline)`
  position: absolute;
  top: 50%;
  width: 40px;
  height: 40px;
  color: ${(props) => props.theme.color.gray};

  &:active {
    color: ${(props) => props.theme.color.black};
  }
`;

const NextButton = styled(Button)`
  right: 20px;
`;

const PrevButton = styled(Button)`
  left: 20px;
  //거꾸로 뒤집기
  transform: scaleX(-1);
`;
// 이미지 슬라이드 컴포넌트
const SlideList = React.memo(
  ({
    carouselStyle,
    sliderStyle,
    imgs,
    moveSlide,
    active,
    prevClicked,
    nextClicked,
  }) => {
    const slideWidth = imgs.length;
    return (
      <Carousel style={carouselStyle}>
        <Sliders
          style={sliderStyle}
          onTransitionEnd={moveSlide}
          len={slideWidth * 100}
        >
          {imgs.map((item) => (
            <Slide key={item} img={item} len={slideWidth}></Slide>
          ))}
        </Sliders>
        <DotList active={active} len={slideWidth} />
        <PrevButton onClick={prevClicked}>prev</PrevButton>
        <NextButton onClick={nextClicked}>next</NextButton>
      </Carousel>
    );
  }
);

export default SlideList;
