import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { ArrowRightCircle } from "@styled-icons/feather/ArrowRightCircle";

import Slide from "components/Slide";
import study1 from "images/study1.jpg";
import study2 from "images/study2.jpg";
import study3 from "images/study3.jpg";
import study4 from "images/study4.jpg";
import study5 from "images/study5.jpg";

const Carousel = styled.div`
  width: 100%;
  height: 60%;
  display: flex;
  justify-content: flex-start;
  position: relative;
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
`;

const NextButton = styled(Button)`
  right: 5px;
`;

const PrevButton = styled(Button)`
  left: 5px;
  transform: scaleX(-1);
`;

const LEFT = "left";
const RIGHT = "right";

const Slider = () => {
  const [imgs, setImgs] = useState([study1, study2, study3, study4, study5]);
  const [sliderStyle, setSliderStyle] = useState({});
  const [carouselStyle, setCarouselStyle] = useState({});
  const [direction, setDirection] = useState(RIGHT);

  const nextClicked = () => {
    if (direction === LEFT) {
      moveSlide();
    }

    setDirection(RIGHT);
    setCarouselStyle({
      justifyContent: `flex-start`,
    });

    setSliderStyle({
      transform: `translate(-20%)`,
    });
  };

  const prevClicked = () => {
    if (direction === RIGHT) {
      moveSlide();
    }

    setDirection(LEFT);

    setCarouselStyle({
      justifyContent: `flex-end`,
    });

    setSliderStyle({
      transform: `translate(20%)`,
    });
  };

  const moveSlide = () => {
    if (direction === RIGHT) {
      // move the first slide to the end
      const firstSlide = imgs.shift();
      setImgs([...imgs, firstSlide]);
    } else {
      // move the last slide to the front
      const lastSlide = imgs.pop();
      setImgs([lastSlide, ...imgs]);
    }

    setSliderStyle({
      transition: "none",
      transform: "translate(0)",
    });
  };

  return (
    <Carousel style={carouselStyle}>
      <Sliders style={sliderStyle} onTransitionEnd={moveSlide}>
        {imgs.map((item) => (
          <Slide key={item} img={item}></Slide>
        ))}
      </Sliders>
      <PrevButton onClick={prevClicked}>prev</PrevButton>
      <NextButton onClick={nextClicked}>next</NextButton>
    </Carousel>
  );
};

export default Slider;
