import react from "react";
import styled from "styled-components";
import { Heart } from "@styled-icons/boxicons-regular/Heart";
import { Link } from "react-router-dom";
import KakaoShareButton from "button/KakaoSharedButton";

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
//  웹 모바일 화면 밑에 떠다니며 참여하기, 공유하기, 좋아요 기능이 있는 FLOATING 컴포넌트
const Floating = () => {
  return (
    <>
      <FloatWrapper>
        <Participate>
          <Link to="/participate">응원 참여하기</Link>
        </Participate>

        <ExtraWrapper>
          <div>
            <UnLiked />
          </div>
          <KakaoShareButton />
        </ExtraWrapper>
      </FloatWrapper>
    </>
  );
};

export default Floating;
