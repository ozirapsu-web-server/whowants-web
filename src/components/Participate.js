import React from "react";
import styled from "styled-components";
import { withRouter } from "react-router-dom";
import { StyledClose, Btn } from "components/sharedComponents";
const Wrapper = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  background: #fff;
  padding: 0 20px;
  &:nth-of-type(1){
    margin-top: 55px;
  }
  margin-bottom:  7px;
`;

const WrapperTitle=styled.div`
  font-size:16px;
  font-weight:700;
  margin:20px 0;
`;

const ContentWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items:center;
  justify-content:space-between;
  margin-bottom:10px;
  & > label {
    padding: 0 3px;
    font-weight: bold;
  }

  & > input {
    height: 40px;
    width:70%;
    background: ${props=>props.theme.color.grayB2};
  }
  & > * {
    padding: 0 10px;
    border-radius: 6px;
    margin: 10px 0; 
    border: none;
  }
`;

const Title=styled.div`
  font-weight:500;
  font-size:15px;
  padding:0;
`;

const Text=styled.div`
font-size:14px;
width:70%;
line-height:18px;
`;

const Alert = styled.div`
  font-size: ${(props) => props.theme.size.smd};
  color: red;
  width: 100%;
  height: 20px;
`;

// 후원 참석자 폼 컴포넌트
const Participate = React.memo(
  ({ form, onChange, alert, goBack, onToggleModal,title }) => {
    return (
      <>
      <Wrapper>
      <WrapperTitle>1. 후원 여부</WrapperTitle>
      <ContentWrapper>
        <Title>후원 사연</Title>
    <Text>{title}</Text>
      </ContentWrapper>
      <ContentWrapper>

      <Title>후원 금액</Title>
    <Text>{title}</Text>
      </ContentWrapper>

      </Wrapper>
        <Wrapper>
        <WrapperTitle>2. 후원자 정보</WrapperTitle>
          <ContentWrapper>
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
          </ContentWrapper>
          <ContentWrapper>
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
          </ContentWrapper>
          
          </Wrapper>
          <Wrapper>
          <WrapperTitle>3. 응원 한 마디</WrapperTitle>
          <ContentWrapper>
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
          </ContentWrapper>
          </Wrapper>
          <Wrapper>
          <ContentWrapper>
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
          </ContentWrapper>
          <Btn onClick={onToggleModal}>응원 참여하기</Btn>
          <StyledClose onClick={goBack} />
        </Wrapper>
      </>
    );
  }
);

export default withRouter(Participate);
