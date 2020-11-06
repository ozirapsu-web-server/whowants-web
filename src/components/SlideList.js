import React from "react";
import styled from "styled-components";
import { ArrowRightCircle } from "@styled-icons/feather/ArrowRightCircle";
import DotList from "components/DotList";
import Slide from "components/Slide";

const Carousel = styled.div`
  width: 100%;
  height: 350px;
  display: flex;
  justify-content: flex-start;
  position: relative;
  overflow: hidden;
`;

const Sliders = styled.div`
  display: flex;
  height: 100%;
  width: 500%;
  flex-shrink: 0;
  transition: all 0.5s;
`;

const Button = styled(ArrowRightCircle)`
  position: absolute;
  top: 30vh;
  width: 40px;
  height: 40px;
  color: #fff;

  &:active {
    color: ${(props) => props.theme.color.blue};
  }
`;

const NextButton = styled(Button)`
  right: 20px;
`;

const PrevButton = styled(Button)`
  left: 20px;
  transform: scaleX(-1);
`;

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
    return (
      <Carousel style={carouselStyle}>
        <Sliders style={sliderStyle} onTransitionEnd={moveSlide}>
          {imgs.map((item) => (
            <Slide key={item} img={item}></Slide>
          ))}
        </Sliders>
        <DotList active={active} len={imgs.length} />
        <PrevButton onClick={prevClicked}>prev</PrevButton>
        <NextButton onClick={nextClicked}>next</NextButton>
      </Carousel>
    );
  }
);

export default SlideList;
