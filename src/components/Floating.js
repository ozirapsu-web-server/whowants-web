import React from "react";
import styled from "styled-components";
import { Heart } from "@styled-icons/boxicons-regular/Heart";
import { Link } from "react-router-dom";

const FloatWrapper = styled.section`
  border: none;
  width: 100%;
  height: 125px;
  background: #fff;
  position: fixed;
  left: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  & * {
    border: none;
    font-size: ${(props) => props.theme.size.smd};
    font-weight: bold;
    width: 100%;
  }
`;

const Participate = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 90%;
  height: 45px;
  background: ${(props) => props.theme.color.blue};
  color: #fff;
  border-radius: 10px;
`;

const ExtraWrapper = styled.div`
  width: 90%;
  height: 45px;
  display: none;
  justify-content: space-between;

  & > div {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    border: 1px solid rgba(36, 36, 36, 0.5);
  }

  & > div:nth-child(1) {
    width: 20%;
  }
  & > div:nth-child(2) {
    width: 70%;
  }
`;

const UnLiked = styled(Heart)`
  height: 20px;
  width: 20px;
`;
//  웹 모바일 화면 밑에 떠다니며 참여하기, 공유하기, 좋아요 기능이 있는 FLOATING 컴포넌트
const Floating = () => {
  return (
    <FloatWrapper>
      <Participate>
        <Link to="/participate">응원 참여하기</Link>
      </Participate>

      <ExtraWrapper>
        <div>
          <UnLiked />
        </div>
        <div>공유하기</div>
      </ExtraWrapper>
    </FloatWrapper>
  );
};

export default Floating;
