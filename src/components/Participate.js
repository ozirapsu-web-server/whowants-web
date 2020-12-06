import React from "react";
import styled from "styled-components";
import { withRouter } from "react-router-dom";
import { StyledClose, Btn } from "components/sharedComponents";
import { numberWithCommas } from "utils/util";


const Wrapper = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  background: ${props=>props.theme.color.grayB2};
  padding: 20px;
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

const TitleWrapper=styled.div`
width: 100%;
  display: flex;
  align-items:center;
  justify-content:space-between;
  & > * {
    padding: 0 10px;
    border-radius: 6px;
    border: none;
  }
`;

const ContentWrapper = styled(TitleWrapper)`
  align-items:center;
  justify-content:space-between;
  margin-bottom:10px;
  & > label {
    padding: 0 3px;
    font-weight: bold;
  }

  & > input {
    height: 36px;
    width:70%;
    background:#fff;
  }

`;

const CommentWrapper=styled(TitleWrapper)`
  flex-direction:column;
  align-items:flex-start;
  &>label{
    font-weight:bold;
  }
  &>*{
    width:100%;
    padding:0;
    margin-bottom:10px;
  } 
  &>textarea{
    height:72px;
    padding:10px;
  }
  &>div{
    height:127px;
    font-size:10px;
    padding:10px;
    font-weight:400;
    line-height:18px;
    color:${props=>props.theme.color.black};
    overflow-y:auto;
    background:#fff;
    border:1px solid #BDBDBD;
  }
`;

const Title=styled.div`
  font-weight:bold;
  font-size:15px;
  padding:10px 0;
`;

const Text=styled.div`
font-size:14px;
width:70%;
line-height:18px;
padding:10px 0;
`;

const AmountWrapper=styled.div`
width:70%;  
display:flex;
align-items:flex-start;
flex-wrap:wrap;
padding:0;
& > button{
  width:48%;
  margin:1%;
}
`

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
      <TitleWrapper>
        <Title>후원 사연</Title>
    <Text>{title}</Text>
      </TitleWrapper>
      <ContentWrapper>

      <Title>후원 금액</Title>
    <AmountWrapper name="amount">
      <Btn onClick={onChange} value="10000">{numberWithCommas(10000)}원</Btn>
      <Btn onClick={onChange} value="20000">{numberWithCommas(20000)}원</Btn>
      <Btn onClick={onChange} value="30000">{numberWithCommas(30000)}원</Btn>
    </AmountWrapper>
      </ContentWrapper>

      </Wrapper>
        <Wrapper>
        <WrapperTitle>2. 후원자 정보</WrapperTitle>
          <ContentWrapper>
            <label htmlFor="nickname">이름</label>
            <input
              type="text"
              name="nickname"
              id="nickname-input"
              onChange={onChange}
              value={form.nickname}
              placeholder="이름"
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
          <ContentWrapper>
            <label htmlFor="email">이메일</label>
            <input
              type="text"
              name="email"
              id="email-input"
              onChange={onChange}
              value={form.email}
              placeholder="example@domain"
            />
            {alert.email && (
              <Alert alert={alert.email}>{alert.email}</Alert>
            )}
          </ContentWrapper>
          
          </Wrapper>
          <Wrapper>
          <WrapperTitle>3. 응원 한 마디</WrapperTitle>
          <CommentWrapper>
            <label htmlFor="comment">응원 한 마디</label>
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
          </CommentWrapper>
          </Wrapper>
          <Wrapper>
              <CommentWrapper>
              <label htmlFor="marketing-terms">5. 마케팅 정보 동의</label>
              <div>
              회원의 개인정보는 당사의 개인정보 취급방침에 따라 안전하게 보호됩니다. '회사'는 이용자들의 개인정보를 개인정보 취급방침의 '제 2조 수집하는 개인정보의 항목, 수집방법 및 이용목적'에서 고지한 범위 내에서 사용하며, 이용자의 사전 동의 없이는 동 범위를 초과하여 이용하거나 원칙적으로 이용자의 개인정보를 외부에 공개하지 않습니다.
              </div>
              </CommentWrapper>
          </Wrapper>
          <Wrapper>
          {/* <ContentWrapper>
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
          </ContentWrapper> */}
          <Btn onClick={onToggleModal}>후원 참여하기</Btn>
          <StyledClose onClick={goBack} />
        </Wrapper>
      </>
    );
  }
);

export default withRouter(Participate);
