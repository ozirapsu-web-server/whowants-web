import React from "react";
import styled from "styled-components";

const Tab1Wrapper = styled.div`
  width: 100%;
  padding:20px;
  text-align: left;
  font-size: ${(props) => props.theme.size.mmd};
  font-family: "NanumBarunGothic", sans-serif !important;
`;
//  탭 첫 번째 컴포넌트 (사연 컨텐츠)
const Tab1 = React.memo(({ content }) => {
  return <Tab1Wrapper>{content}</Tab1Wrapper>;
});

export default Tab1;
