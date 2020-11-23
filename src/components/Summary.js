import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  min-height: 100px;
  padding: 20px;
  background: #fff;
`;

const Header = styled.header`
  font-size: 24px;
  font-weight: bold;
  width: 100%;
  margin-bottom: 10px;
  letter-spacing: -0.03em;
  line-height: 36px;
`;
const TagWrapper = styled.div`
  display: flex;
  margin-bottom: 10px;
`;
const Tag = styled.div`
  border-radius: 13.5px;
  color: #4277ee;
  border: 1px solid #4277ee;
  font-size: 14px;
  font-weight: bold;
  width: 78px;
  height: 28px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 7px;
`;

//  사연 요약 정보 컴포넌트
const Summary = React.memo(({ title }) => {
  return (
    <Wrapper>
      <TagWrapper>
        <Tag>#고등학생</Tag>
        <Tag>#전신마비</Tag>
        <Tag>#수술비</Tag>
      </TagWrapper>
      <Header>{title}</Header>
    </Wrapper>
  );
});

export default Summary;
