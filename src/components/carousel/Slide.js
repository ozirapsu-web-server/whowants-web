import React from "react";
import styled from "styled-components";

const SlideWrapper = styled.div`
  width: ${(props) => props.len}%;
  flex-basis: ${(props) => props.len}%;
  background: url(${(props) => props.src}) no-repeat center center;
  background-size: cover;
  flex-shrink: 0;
`;
//  이미지 슬라이드의 한 한 이미지 컴포넌트
const Slide = React.memo(({ img, len }) => {
  return <SlideWrapper src={img} len={100 / len}></SlideWrapper>;
});

export default Slide;
