import React from "react";
import styled from "styled-components";

const OrganizerWrapper = styled.div`
  min-height: 100px;
  background: #fff;
  margin-top: 10px;
  padding: 20px;
  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  font-size: ${(props) => props.theme.size.mmd};\
  font-weight:bold;
`;

const OrganizerProfile = styled.div`
  display: flex;
  margin-top: 20px;
  align-items: center;
`;

const ProfileImg = styled.img`
  height: 50px;
  width: 50px;
  background: ${(props) => props.theme.color.middleBlue};
  border-radius: 50%;
  border: none;
  margin-right: 5px;
`;

const Author = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  & > div:nth-child(1) {
    font-weight: bold;
  }
  & > * {
    margin: 3px 0;
  }
`;

const InquiryBtn = styled.button`
  height: 40px;
  width: 80px;
  border-radius: 10px;
  background: ${(props) =>
    props.disabled ? "#ddd" : (props) => props.theme.color.blue};
  border: none;
  color: #fff;
  margin-left: auto;
  font-weight: bold;
`;

const Organizer = () => {
  return (
    <OrganizerWrapper>
      <Header>모금함 생성자</Header>
      <OrganizerProfile>
        <ProfileImg></ProfileImg>
        <Author>
          <div>이성민</div>
          <div>본인인증회원</div>
        </Author>
        <InquiryBtn disabled>문의하기</InquiryBtn>
      </OrganizerProfile>
    </OrganizerWrapper>
  );
};

export default Organizer;
