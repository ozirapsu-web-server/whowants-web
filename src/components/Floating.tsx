import React from 'react';
import styled from "styled-components";
import { Heart } from "@styled-icons/boxicons-regular/Heart";
import { Link } from "react-router-dom";
import KakaoShareButton from "button/KakaoSharedButton";

const FloatWrapper = styled.section`
  border: none;
  width: 100%;
  padding: 20px;
  background: #fff;
  position: fixed;
  left: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  &  * {
    height: 44px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: ${(props) => props.theme.size.mmd};
    font-weight: 700;
    width: 49%;
    margin: 0 5px;
    border:none;
    border-radius: 6px;
  }
  & >div{
    border:1px solid #4F4F4F;
  }
`;

const Participate = styled.button`
  background: ${(props) => props.theme.color.blue};
  color: #fff;
  border: none;
  & a{
    width:100%;
  }
`;

const ExtraWrapper = styled.div`
  width: 90%;
  height: 45px;
  display: flex;
  justify-content: space-between;

  //  좋아요, 공유하기
  & > div {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    border: 1px solid rgba(36, 36, 36, 0.5);
  }

  & > div:nth-child(1) {
    // 좋아요 버튼 임시 삭제
    width: 20%;
    display: none;
  }
`;

const UnLiked = styled(Heart)`
  height: 20px;
  width: 20px;
`;

interface Props{
  pageIdx:number;
}

//  웹 모바일 화면 밑에 떠다니며 참여하기, 공유하기, 좋아요 기능이 있는 FLOATING 컴포넌트
const Floating = ({pageIdx}:Props) => {
  return (
    <>
      <FloatWrapper>
        {/* <ExtraWrapper>
          <div>
            <UnLiked />
          </div>
        </ExtraWrapper> */}
        <KakaoShareButton />
        <Participate>
          <Link to={`/participate/${pageIdx}`}>사연 후원하기</Link>
        </Participate>
      </FloatWrapper>
    </>
  );
};

export default Floating;
