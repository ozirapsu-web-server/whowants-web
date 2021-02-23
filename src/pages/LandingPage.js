import React, { useEffect } from "react";
import styled from "styled-components";
import LogoContainer from "containers/LogoContainer";
import LandingContainer from "containers/landingPage/LandingContainer";
import NotableContainer from "containers/landingPage/NotableContainer";
import hamburgerBar from "images/hamburgerBar.png";
const PageWrapper = styled.section`
  width: 100%;
  height: 100vh;
  background: #fff;
`;

const LandingPage = ({ location }) => {
  // 링크 페이지에서 클릭한 요소( 주목할만한 모금, 또는 방금 시작된 모금)으로 이동하게 하는 코드
  useEffect(() => {
    const element = document.getElementById(location.hash);
    setTimeout(() => {
      window.scrollTo({
        behavior: element ? "smooth" : "auto",
        top: element ? element.offsetTop + 300 : 0,
      });
    }, 100);
  }, [location]);
  return (
    <PageWrapper>
      <LogoContainer left={hamburgerBar}></LogoContainer>
      <LandingContainer />
      <NotableContainer />
    </PageWrapper>
  );
};

export default LandingPage;
