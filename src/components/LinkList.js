import React, { useCallback } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

const ListWrapper = styled.section`
  padding: 20px;
  width: 100%;
  height: 100%;
  background: #fff;
  margin-top: 55px;
  & > * {
    line-height: 1.5em;
    margin-bottom: 0.5em;
    font-weight: 700;
  }
`;

const Title = styled.h1`
  width: 100%;
  font-size: ${(props) => props.theme.size.mmd};
  color: #b3b3b3;
  font-weight: 700;
`;

const Section = styled.div`
  font-size: 28px;
`;

const LinkList = () => {
  const history = useHistory();

  const home = useCallback(
    (position) => {
      history.push(`/${position}`);
    },
    [history]
  );

  return (
    <ListWrapper>
      <Title>내 모금함 만들기</Title>
      <Section>사연 신청하기</Section>
      <Title>프로젝트 둘러보기</Title>
      <Section onClick={() => home("#notable")}>주목할 만한 사연</Section>
      <Section onClick={() => home("#recent")}>방금 시작된 모금</Section>
    </ListWrapper>
  );
};

export default LinkList;
