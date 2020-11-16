import React from "react";
import styled from "styled-components";
import logo from "images/logo.png";

const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  background: #fff;
  width: 100%;
  z-index: 10;

  & img {
    margin: 20px 0;
    width: 30%;
    height: auto;
  }
`;
//  후원츠 로고
const Logo = React.memo(() => {
  return (
    <Header>
      <img src={logo} alt="로고" />
    </Header>
  );
});

export default Logo;
