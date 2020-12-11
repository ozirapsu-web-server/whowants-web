import React from "react";
import styled from "styled-components";
import profileLogo from "images/profileLogo.png";
import { ProfileImg } from "./sharedComponents";

const Wrapper = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  background: ${(props) => props.theme.color.grayB2};
`;

const HeadContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const News = styled.div`
  background: #fff;
  margin-top: 20px;
  padding: 20px;
`;

const Profile = styled.img`
  width: 47px;
  height: 47px;
  border-radius: 50%;
  background: #b7b7b7;
`;

const Tab2 = () => {
  return (
    <Wrapper>
      <News>
        <HeadContainer>
          <ProfileImg>
            <img src={profileLogo} alt="프로필이미지" />
          </ProfileImg>
        </HeadContainer>
        <div>업데이트 정보가 없습니다.</div>
      </News>
    </Wrapper>
  );
};

export default Tab2;
