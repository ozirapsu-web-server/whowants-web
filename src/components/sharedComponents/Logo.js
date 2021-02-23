import React, { useCallback } from "react";
import { withRouter, useLocation } from "react-router-dom";
import styled from "styled-components";
import logo from "images/logo.svg";
import { PC_MIN } from "utils/media";

const Header = styled.header`
  display: grid;
  grid-template-columns: 1fr 4fr 1fr;
  align-items: center;
  justify-items: center;
  position: fixed;
  top: 0;
  left: 0;
  background: ${(props) =>
    props.background === "gray" ? props.theme.color.grayB2 : "#fff"};
  width: 100%;
  height: 55px;
  z-index: 10;
  & img {
    width: auto;
    height: auto;
  }
  & img:hover {
    cursor: pointer;
  }
  & img:nth-child(2) {
    height: auto;
  }
  @media only screen and (min-width: ${PC_MIN}px) {
    border-bottom: 1px solid #c7c7c7;
    grid-template-columns: 80px 1fr 80px;
  }
`;
//  로고 크기 줄이기 위한 사이즈
const Img = styled.img`
  max-height: 18.23px;
`;

//  후원츠 로고
const Logo = React.memo(({ left, history, background }) => {
  const location = useLocation();
  // 현재 위치에 따라 이동하는 위치
  const moveTo = useCallback(() => {
    if (location.pathname === "/linkPage") {
      history.goBack();
    } else {
      history.push("/linkPage");
    }
  }, [history, location]);

  const home = useCallback(() => {
    history.push("/");
  }, [history]);

  return (
    <Header background={background}>
      <Img src={left} alt="메뉴바" onClick={moveTo} />
      <Img src={logo} alt="로고" onClick={home} />
    </Header>
  );
});

export default withRouter(Logo);
