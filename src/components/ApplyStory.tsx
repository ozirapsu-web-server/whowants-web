import React from "react";
import styled from "styled-components";
import landingImage from "images/landingImage.png";
import { Link } from "react-router-dom";
import { MOBILE_MAX, PC_MIN, TABLET_MIN } from "utils/media";

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
  @media only screen and (min-width: ${TABLET_MIN}px) {
    padding: 30px;
  }
  @media only screen and (min-width: ${PC_MIN}px) {
    height: 515px;
    padding: 50px 200px;
  }
`;

const Title = styled.h1`
  font-weight: 900;
  font-size: 30px;
  line-height: 40px;
  width: 208px;
  margin-bottom: 15px;
`;

const Button = styled.button`
  position: absolute;
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
  @media only screen and (max-width: ${MOBILE_MAX}px) {
    left: 20px;
    bottom: 80px;
  }
  @media only screen and (min-width: ${TABLET_MIN}px) {
    right: 50px;
    bottom: 160px;
  }
  @media only screen and (min-width: ${PC_MIN}px) {
    left: 200px;
    bottom: 200px;
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
      <Button>
        <Link
          to={{
            pathname:
              "https://docs.google.com/forms/d/e/1FAIpQLScz-WmG5gMTZUfPIjOC4GMsge8DjmMj8mFkgVfJcqI70PwtZw/viewform",
          }}
          target="_blank"
        >
          사연 신청하기
        </Link>
      </Button>
    </Wrapper>
  );
};

export default ApplyStory;
