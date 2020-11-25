import React from "react";
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
  background: #fff;
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
const Logo = React.memo(({ bar }) => {
  return (
    <Header>
      <img src={bar} alt="메뉴바" />
      <img src={logo} alt="로고" />
    </Header>
  );
});

export default Logo;
