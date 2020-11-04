import React from "react";
import styled from "styled-components";
import logo from "images/logo.png";

const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;

  & img {
    margin: 25px 0;
    width: 30%;
    height: auto;
  }
`;

const Logo = () => {
  return (
    <Header>
      <img src={logo} alt="로고" />
    </Header>
  );
};

export default Logo;
