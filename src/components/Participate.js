import React from "react";
import styled from "styled-components";
import { withRouter } from "react-router-dom";
import { StyledClose, SubmitBtn } from "components/sharedComponents";
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

const Alert = styled.div`
  font-size: ${(props) => props.theme.size.smd};
  color: red;
  width: 100%;
  height: 20px;
`;

// 후원 참석자 폼 컴포넌트
const Participate = React.memo(
  ({ form, onChange, alert, goBack, onToggleModal }) => {
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
              value={form.nickname}
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
              value={form.phoneNumber}
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
              value={form.comment}
              placeholder="응원합니다"
            ></textarea>
          </LabelWrapper>
          <LabelWrapper>
            <label htmlFor="donation">기부금액 (선택가능) </label>
            <select
              name="amount"
              id="amount-select"
              onChange={onChange}
              value={form.amount}
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
      </>
    );
  }
);

export default withRouter(Participate);
