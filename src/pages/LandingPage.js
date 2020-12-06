import React from "react";
import styled from "styled-components";
import LogoContainer from "containers/LogoContainer";
import LandingContainer from "containers/LandingContainer";
import NotableContainer from "containers/NotableContainer";
import hamburgerBar from "images/hamburgerBar.png";
const PageWrapper = styled.section`
  width: 100%;
  height: 100vh;
  background: #fff;
`;

const LandingPage = () => {
  return (
    <>
      <LogoContainer left={hamburgerBar}></LogoContainer>
      <LandingContainer />
      <NotableContainer />
    </>
  );
};

export default LandingPage;
