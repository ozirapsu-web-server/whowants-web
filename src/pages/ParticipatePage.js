import React from "react";
import ParticipateContainer from "containers/ParticipateContainer";
import LogoContainer from "containers/LogoContainer";
import hamburgerBar from "images/hamburgerBar.png";
import styled from 'styled-components';

const PageWrapper = styled.section`
  width: 100%;
  height: 100vh;
  background: #fff;;
`;

//  후원 작성란 페이지
const Participate = React.memo(() => {
  return (
  <>
    {/* <LogoContainer left={hamburgerBar} background='gray' ></LogoContainer> */}
    <ParticipateContainer/>
    </>
    );
});

export default Participate;
