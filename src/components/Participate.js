import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Close } from "@styled-icons/evaicons-solid/Close";

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

const StyledLink = styled(Link)`
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

const CloseBtn = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 10px;
  right: 20px;

  & > * {
    width: 30px;
    height: 30px;
    color: black;
  }
`;

const Alert = styled.div`
  font-size: ${(props) => props.theme.size.smd};
  color: red;
  width: 100%;
  height: 20px;
  display: ${(props) => (props.alert ? "inline-block" : "none")};
`;
const Participate = React.memo(
  ({ nickname, comment, amount, onChange, onAddComment, alert }) => {
    return (
      <Wrapper>
        <LabelWrapper>
          <label htmlFor="nickname">닉네임</label>
          <Alert alert={alert}>이름을 입력해주세요</Alert>
          <input
            type="text"
            name="nickname"
            id="nickname-input"
            onChange={onChange}
            value={nickname}
            placeholder="닉네임"
          />
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
            nickname={comment}
            placeholder="응원합니다"
          ></textarea>
        </LabelWrapper>
        <LabelWrapper>
          <label htmlFor="donation">기부금액 (선택가능) </label>
          <input
            type="text"
            name="amount"
            id="amount-input"
            onChange={onChange}
            value={amount}
          />
        </LabelWrapper>
        <StyledLink onClick={onAddComment}>응원 참여하기</StyledLink>
        <CloseBtn to="/story">
          <Close />
        </CloseBtn>
      </Wrapper>
    );
  }
);

export default Participate;
