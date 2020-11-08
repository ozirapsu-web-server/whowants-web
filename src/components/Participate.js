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

const ParticipateBtn = styled.button`
  width: 100%;
  height: 40px;
  border: none;
  border-radius: 10px;
  background: ${(props) => props.theme.color.blue};
  color: #fff;
  font-weight: bold;
`;

const StyledClose = styled(Close)`
  width: 30px;
  height: 30px;
  color: black;
  position: absolute;
  top: 10px;
  right: 10px;
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
const Participate = React.memo(() => {
  return (
    <Wrapper>
      <LabelWrapper>
        <label htmlFor="nickname">닉네임</label>
        <input type="text" name="nickname" id="nickname-input" />
      </LabelWrapper>
      <LabelWrapper>
        <label htmlFor="comment">응원의 한마디</label>
        <textarea
          name="comment"
          id="comment-textarea"
          cols="30"
          rows="5"
          maxLength="100"
        ></textarea>
      </LabelWrapper>
      <LabelWrapper>
        <label htmlFor="donation">기부금액 (선택가능) </label>
        <input type="text" name="donation" id="donation-input" />
      </LabelWrapper>
      <StyledLink to="/story">응원 참여하기</StyledLink>
      <CloseBtn to="/story">
        <Close />
      </CloseBtn>
    </Wrapper>
  );
});

export default Participate;
