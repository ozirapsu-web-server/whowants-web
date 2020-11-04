import React from "react";
import Logo from "components/Logo";
import styled from "styled-components";
import study1 from "images/study1.jpg";

const SlideWrapper = styled.div`
  height: 65vh;
  width: 100%;
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
