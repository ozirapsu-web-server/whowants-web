import React from "react";
import styled from "styled-components";
import profileLogo from "images/profileLogo.png";
import { ProfileImg } from "../sharedComponents";
import { ChevronRight } from "@styled-icons/boxicons-regular/ChevronRight";
import { CommentAlt } from "@styled-icons/fa-solid/CommentAlt";

const Wrapper = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  background: ${(props) => props.theme.color.grayB2};
`;

const HeadContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const News = styled.div`
  background: #fff;
  margin-top: 20px;
  padding: 20px;
`;

const Right = styled(ChevronRight)`
  width: 20px;
  height: 20px;
`;

const Comment = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 50px;
  background: #fff;
  border-top: 1px solid ${(props) => props.theme.color.grayB2};
  border-bottom: 1px solid ${(props) => props.theme.color.grayB2};
  //    임시 margin
  margin-bottom: 20px;
  & > div {
    height: 20px;
    line-height: 20px;
    text-align: center;
    font-size: 15px;
    font-weight: 500;
  }
`;

const CommentIcon = styled(CommentAlt)`
  width: 13.5px;
  height: 13.5px;
  color: black;
  margin-left: 30px;
`;

const Tab2 = ({ organizer }) => {
  return (
    <Wrapper>
      <News>
        <HeadContainer>
          <ProfileImg>
            <img src={profileLogo} alt="프로필이미지" />
          </ProfileImg>
          <div>{organizer}</div>
          <Right />
        </HeadContainer>
        <div>업데이트 정보가 없습니다.</div>
      </News>
      <Comment>
        <CommentIcon />
        <div>&nbsp;0</div>
      </Comment>
    </Wrapper>
  );
};

export default Tab2;
