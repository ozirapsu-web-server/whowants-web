import React, { useState, useCallback } from "react";
import styled from "styled-components";
import { ArrowRightCircle } from "@styled-icons/feather/ArrowRightCircle";
import DotContainer from "containers/DotContainer";

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
  overflow: hidden;
`;

const Sliders = styled.div`
  display: flex;
  height: 100%;
  width: 500%;
  flex-shrink: 0;
  transition: all 0.5s;
  overflow: hidden;
`;

const Button = styled(ArrowRightCircle)`
  position: absolute;
  top: 30vh;
  width: 40px;
  height: 40px;
  color: #fff;
`;

const NextButton = styled(Button)`
  right: 20px;
`;

const PrevButton = styled(Button)`
  left: 20px;
  transform: scaleX(-1);
`;

const LEFT = "left";
const RIGHT = "right";

const Slider = () => {
  const [imgs, setImgs] = useState([study1, study2, study3, study4, study5]);
  const [sliderStyle, setSliderStyle] = useState({});
  const [carouselStyle, setCarouselStyle] = useState({});
  const [direction, setDirection] = useState(RIGHT);
  const [active, setActive] = useState(0);

  const moveSlide = useCallback(() => {
    if (direction === RIGHT) {
      // move the first slide to the end
      const firstSlide = imgs.shift();
      setImgs((imgs) => [...imgs, firstSlide]);
    } else {
      // move the last slide to the front
      const lastSlide = imgs.pop();
      setImgs((imgs) => [lastSlide, ...imgs]);
    }

    setSliderStyle((sliderStyle) => ({
      transition: "none",
      transform: "translate(0)",
    }));
  }, [direction, imgs]);

  const nextClicked = useCallback(() => {
    if (direction === LEFT) {
      moveSlide();
    }
    setActive((active) => {
      if (active + 1 === imgs.length) return 0;
      else return active + 1;
    });
    setDirection((direction) => RIGHT);
    setCarouselStyle((carouselStyle) => ({
      justifyContent: `flex-start`,
    }));

    setSliderStyle((sliderStyle) => ({
      transform: `translate(-20%)`,
    }));
  }, [direction, moveSlide, imgs.length]);

  const prevClicked = useCallback(() => {
    if (direction === RIGHT) {
      moveSlide();
    }

    setActive((active) => {
      if (active === 0) {
        return imgs.length - 1;
      } else return active - 1;
    });

    setDirection((direction) => LEFT);

    setCarouselStyle((carouselStyle) => ({
      justifyContent: `flex-end`,
    }));

    setSliderStyle((sliderStyle) => ({
      transform: `translate(20%)`,
    }));
  }, [direction, moveSlide, imgs.length]);

  return (
    <Carousel style={carouselStyle}>
      <Sliders style={sliderStyle} onTransitionEnd={moveSlide}>
        {imgs.map((item) => (
          <Slide key={item} img={item}></Slide>
        ))}
      </Sliders>
      <DotContainer active={active} len={imgs.length} />
      <PrevButton onClick={prevClicked}>prev</PrevButton>
      <NextButton onClick={nextClicked}>next</NextButton>
    </Carousel>
  );
};

export default Slider;
