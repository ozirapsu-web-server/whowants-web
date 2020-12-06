import React, { useCallback } from "react";
import { withRouter, useLocation } from "react-router-dom";
import styled from "styled-components";
import logo from "images/logo.png";

const Header = styled.header`
  display: grid;
  grid-template-columns: 1fr 4fr 1fr;
  align-items: center;
  justify-items: center;
  position: fixed;
  top: 0;
  left: 0;
  background: ${props=>props.background==='gray'?props.theme.color.grayB2:'#fff'};
  width: 100%;
  height: 55px;
  z-index: 10;
  & img {
    width: auto;
    height: auto;
  }
  & img:nth-child(2) {
    height: auto;
  }
`;
//  후원츠 로고
const Logo = React.memo(({ left, history,background }) => {
  const location = useLocation();
  // 현재 위치에 따라 이동하는 위치
  const moveTo = useCallback(() => {
    if (location.pathname === "/linkPage") {
      history.goBack();
    } else  {
      history.push("/linkPage");
    }
  }, [history, location]);

  const home=useCallback(()=>{
    history.push('/');
  },[history])

  return (
    <Header background={background || null}>
      <img src={left} alt="메뉴바" onClick={moveTo} />
      <img src={logo} alt="로고" onClick={home}/>
    </Header>
  );
});

export default withRouter(Logo);
