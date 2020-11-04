import React from "react";
import Logo from "components/Logo";
import styled from "styled-components";
import study1 from "images/study1.jpg";
import { ArrowRightCircle } from "@styled-icons/feather/ArrowRightCircle";

const SlideWrapper = styled.div`
  width: 20%;
  flex-basis: 20%;
  background: url(${(props) => props.src}) no-repeat center center;
  background-size: cover;
  flex-shrink: 0;
`;

const Slide = ({ img }) => {
  return (
    <SlideWrapper src={img}>
      <Logo />
    </SlideWrapper>
  );
};

export default Slide;
