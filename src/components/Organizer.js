import React from "react";
import styled from "styled-components";
import profileLogo from "images/profileLogo.png";
import { PC_MIN, TABLET_MAX } from "utils/media";
import { OrganizerProfile, ProfileImg } from "components/sharedComponents";

const OrganizerWrapper = styled.div`
  min-height: 100px;
  background: #fff;
  margin-top: 10px;
  @media only screen and (max-width: ${TABLET_MAX}px) {
    margin: 26px;
  }
  @media only screen and (min-width: ${PC_MIN}px) {
    margin: 26px 0;
  }
  padding: 20px;
  display: flex;
  flex-direction: column;
  border: 1px solid ${(props) => props.theme.color.gray};
  border-radius: 6px;
`;

const Header = styled.div`
  font-size: ${(props) => props.theme.size.mmd};
  font-weight: bold;
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

// const InquiryBtn = styled.button`
//   height: 40px;
//   width: 80px;
//   border-radius: 10px;
//   background: ${(props) =>
//     props.disabled ? "#ddd" : (props) => props.theme.color.blue};
//   border: none;
//   color: #fff;
//   margin-left: auto;
//   font-weight: bold;
// `;
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
