import React from "react";
import styled from "styled-components";

const Tab1Wrapper = styled.div`
  width: 100%;
  text-align: left;
  font-size: ${(props) => props.theme.size.mmd};
`;

const Tab1 = ({ story }) => {
  return <Tab1Wrapper>{story}</Tab1Wrapper>;
};

export default Tab1;
