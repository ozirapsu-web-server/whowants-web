import React from "react";
import styled from "styled-components";
import landingImage from "images/landingImage.png";

const Wrapper = styled.div`
  width: 100%;
  height: 346px;
  margin-top: 55px;
  background: url(${landingImage});
  background-size: cover;
  padding: 30px 20px;
  color: #fff;
  position: relative;

  & > div {
    font-size: 16px;
    font-weight: 300;
  }
`;

const Title = styled.h1`
  font-weight: 800;
  font-size: 30px;
  line-height: 40px;
  width: 208px;
  margin-bottom: 15px;
`;

const Button = styled.button`
  position: absolute;
  left: 20px;
  bottom: 50px;
  width: 150px;
  height: 38px;
  background: ${(props) => props.theme.color.blue};
  border: none;
  border-radius: 6px;
  font-weight: bold;
  font-size: ${(props) => props.theme.size.mmd};
  color: #fff;
  &:hover {
    cursor: pointer;
  }
`;

const ApplyStory = () => {
  return (
    <Wrapper>
      <Title>
        세상을 돕는
        <br /> 가장 쉬운 방법,
        <br /> 후원츠
      </Title>
      <div>세상을 움직이는 일, 함께 할래?</div>
      <Button>사연 신청하기</Button>
    </Wrapper>
  );
};

export default ApplyStory;
