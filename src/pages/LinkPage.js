import React from "react";
import styled from "styled-components";
import LinkContainer from "containers/linkPage/LinkContainer";

const LinkPageWrapper = styled.section`
  width: 100%;
  height: 100vh;
  background: #fff;
`;
const LinkPage = () => {
  return (
    <LinkPageWrapper>
      <LinkContainer />
    </LinkPageWrapper>
  );
};

export default LinkPage;
