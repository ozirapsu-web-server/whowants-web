import React from "react";
import styled from "styled-components";
// import { Heart } from "@styled-icons/boxicons-regular/Heart";
import { Link } from "react-router-dom";
import KakaoShareButton from "button/KakaoSharedButton";
import { TABLET_MAX } from "utils/media";

const FloatWrapper = styled.section`
  border: none;
  font-size: 15px;
  padding: 20px;
  background: #fff;
  @media only screen and (max-width: ${TABLET_MAX}px) {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100vw;
  }
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  & * {
    height: 44px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: ${(props) => props.theme.size.mmd};
    font-weight: 700;
    width: 60%;
    margin: 0;
    border: none;
    border-radius: 6px;
    &:hover {
      cursor: pointer;
    }
  }
  & div:nth-child(1) {
    width: 48%;
    margin-right: 5px;
  }
  & div:nth-child(2) {
    margin-left: 5px;
  }
  & > div {
    border: 1px solid #4f4f4f;
    font-weight: 400;
  }
`;

const Participate = styled.button`
  background: ${(props) => props.theme.color.blue};
  color: #fff;

  font-weight: 700;
  border: none;
  & a {
    width: 100%;
  }
`;

// const ExtraWrapper = styled.div`
//   width: 90%;
//   height: 45px;
//   display: flex;
//   justify-content: space-between;

//   //  좋아요, 공유하기
//   & > div {
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     border-radius: 10px;
//     border: 1px solid rgba(36, 36, 36, 0.5);
//   }

//   & > div:nth-child(1) {
//     // 좋아요 버튼 임시 삭제
//     width: 20%;
//     display: none;
//   }
// `;

// const UnLiked = styled(Heart)`
//   height: 20px;
//   width: 20px;
// `;

interface Props {
  pageIdx: number;
  title: string;
  img: string;
}

//  웹 모바일 화면 밑에 떠다니며 참여하기, 공유하기, 좋아요 기능이 있는 FLOATING 컴포넌트
const Floating = ({ pageIdx, title, img }: Props) => {
  // console.log(title, img);
  return (
    <>
      <FloatWrapper>
        {/* <ExtraWrapper>
          <div>
            <UnLiked />
          </div>
        </ExtraWrapper> */}
        <KakaoShareButton title={title} img={img} />
        <Participate>
          <Link to={`/participate/${pageIdx}`}>사연 후원하기</Link>
        </Participate>
      </FloatWrapper>
    </>
  );
};

export default Floating;
