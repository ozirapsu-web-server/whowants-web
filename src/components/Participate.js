import React from "react";
import styled from "styled-components";
import { Close } from "@styled-icons/evaicons-solid/Close";
import { withRouter } from "react-router-dom";

const Wrapper = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background: #f0f0f0;
  padding: 20px;
`;

const LabelWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 15px 0;
  & > label {
    padding: 0 3px;
    font-weight: bold;
  }

  & > input {
    height: 40px;
    background: #fff;
  }
  & > * {
    padding: 10px;
    border-radius: 10px;
    margin: 5px 0;
    border: none;
  }
`;

const SubmitBtn = styled.div`
  width: 100%;
  background: ${(props) => props.theme.color.blue};
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  color: #fff;
  border-radius: 10px;
  font-size: ${(props) => props.theme.size.mmd};
`;

const StyledClose = styled(Close)`
  position: absolute;
  top: 10px;
  right: 20px;
  width: 30px;
  height: 30px;
  color: black;
`;

const Alert = styled.div`
  font-size: ${(props) => props.theme.size.smd};
  color: red;
  width: 100%;
  height: 20px;
`;

const ModalContainer = styled.section`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  display: ${(props) => (props.visible ? "block" : "none")};
`;

const ModalOverlay = styled.div`
  background: rgba(0, 0, 0, 0.4);
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px;
`;

const ModalContent = styled.div`
  position: relative;
  background: #fff;
  border: 1px solid black;
  border-radius: 10px;
  width: 100%;
  min-height: 150px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  text-align: left;
  line-height: 1.3em;

  & > * {
    margin: 5px 0;
  }
  & > div:nth-child(2) {
    font-size: ${(props) => props.theme.size.smd};
  }
`;

const ModalHeader = styled.div`
  font-size: ${(props) => props.theme.size.mmd};
  font-weight: bold;
`;
// 후원 참석자 폼 컴포넌트
const Participate = React.memo(
  ({
    nickname,
    phoneNumber,
    comment,
    amount,
    onChange,
    onAddComment,
    alert,
    goBack,
    visible,
    onToggleModal,
  }) => {
    return (
      <>
        <Wrapper>
          <LabelWrapper>
            <label htmlFor="nickname">닉네임</label>

            <input
              type="text"
              name="nickname"
              id="nickname-input"
              onChange={onChange}
              value={nickname}
              placeholder="닉네임"
            />
            {alert.nickname && (
              <Alert alert={alert.nickname}>{alert.nickname}</Alert>
            )}
          </LabelWrapper>
          <LabelWrapper>
            <label htmlFor="phoneNumber">전화번호</label>
            <input
              type="text"
              name="phoneNumber"
              id="phoneNumber-input"
              onChange={onChange}
              value={phoneNumber}
              placeholder="010-0000-0000"
            />
            {alert.phoneNumber && (
              <Alert alert={alert.phoneNumber}>{alert.phoneNumber}</Alert>
            )}
          </LabelWrapper>
          <LabelWrapper>
            <label htmlFor="comment">응원의 한마디</label>
            <textarea
              name="comment"
              id="comment-textarea"
              cols="30"
              rows="5"
              maxLength="100"
              onChange={onChange}
              value={comment}
              placeholder="응원합니다"
            ></textarea>
          </LabelWrapper>
          <LabelWrapper>
            <label htmlFor="donation">기부금액 (선택가능) </label>
            <select
              name="amount"
              id="amount-select"
              onChange={onChange}
              value={amount}
            >
              <option value="0">0</option>
              <option value="5000">5000</option>
              <option value="10000">10000</option>
              <option value="50000">50000</option>
            </select>
          </LabelWrapper>
          <SubmitBtn onClick={onToggleModal}>응원 참여하기</SubmitBtn>
          <StyledClose onClick={goBack} />
        </Wrapper>
        <ModalContainer visible={visible}>
          <ModalOverlay>
            <ModalContent>
              <StyledClose onClick={() => onAddComment(1)} />
              <ModalHeader>아직 구현되지 않은 기능입니다.</ModalHeader>
              <div>
                기부 기능이 오픈되면 가장 먼저 연락 메세지를 드리겠습니다.
              </div>
            </ModalContent>
          </ModalOverlay>
        </ModalContainer>
      </>
    );
  }
);

export default withRouter(Participate);
