import React from "react";
import styled from "styled-components";
import logo from "images/logo.png";

const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  & img {
    margin: 25px 0;
    width: 30%;
    height: auto;
    z-index: 10;
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
