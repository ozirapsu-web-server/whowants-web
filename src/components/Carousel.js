import React from "react";
import Logo from "components/Logo";
import styled from "styled-components";
import study1 from "images/study1.jpg";

const CarouselWrapper = styled.div`
  min-height: 350px;
  width: 100%;
  background: url(${study1}) no-repeat center center;
  background-size: cover;
`;

const Carousel = () => {
  return (
    <CarouselWrapper>
      <Logo />
    </CarouselWrapper>
  );
};

export default Carousel;
