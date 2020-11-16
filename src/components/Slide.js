import React from "react";
import styled from "styled-components";

const SlideWrapper = styled.div`
  width: 20%;
  flex-basis: 20%;
  background: url(${(props) => props.src}) no-repeat center center;
  background-size: cover;
  flex-shrink: 0;
`;
//  이미지 슬라이드의 한 한 이미지 컴포넌트
const Slide = React.memo(({ img }) => {
  return <SlideWrapper src={img}></SlideWrapper>;
});

export default Slide;
