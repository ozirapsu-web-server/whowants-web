import React from "react";
import styled from "styled-components";
import profileLogo from "images/profileLogo.png";

const OrganizerWrapper = styled.div`
  min-height: 100px;
  background: #fff;
  margin-top: 10px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  border: 1px solid ${(props) => props.theme.color.gray};
  border-radius: 6px;
  margin: 0 20px;
`;

const Header = styled.div`
  font-size: ${(props) => props.theme.size.mmd};\
  font-weight:bold;
`;

const OrganizerProfile = styled.div`
  width: 100%;
  display: flex;
  margin-top: 20px;
  align-items: center;
`;

const ProfileImg = styled.div`
  height: 50px;
  width: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #b7b7b7;
  border-radius: 50%;
  border: none;
  margin-right: 1.2em;
  // 로고 크기만 고려해서 조종함. 추후 실제 프로필이미지 넣을 경우 다른 스타일 넣을지도
  & > img {
    width: 60%;
    height: auto;
    object-fit: cover;
  }
`;

const Author = styled.div`
  width: 55%;
  display: flex;
  flex-direction: column;
  & > div:nth-child(1) {
    font-weight: bold;
  }
  & > div:nth-child(2) {
    line-height: 1.3em;
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
//  모금함 생성자 컴포넌트
const Organizer = ({ organizer }) => {
  return (
    <OrganizerWrapper>
      <Header>모금함 생성자</Header>
      <OrganizerProfile>
        <ProfileImg>
          <img src={profileLogo} alt="프로필로고" />
        </ProfileImg>
        <Author>
          <div>{organizer}</div>
          <div>반갑습니다. 최해랑입니다.(서버연결안한 테스트 문구)</div>
        </Author>
        {/* <InquiryBtn disabled>문의하기</InquiryBtn> */}
      </OrganizerProfile>
    </OrganizerWrapper>
  );
};

export default Organizer;
