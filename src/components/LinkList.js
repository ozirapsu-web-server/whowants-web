import React, { useCallback, useEffect } from "react";
import styled from "styled-components";
import { useHistory, Link } from "react-router-dom";
import { TABLET_MIN } from "utils/media";

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
  @media only screen and (min-width: ${TABLET_MIN}px) {
    width: 400px;
    margin: 100px auto;
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
  font-weight: 900;
  &:hover {
    cursor: pointer;
  }
`;

const LinkList = () => {
  const history = useHistory();

  const home = useCallback(
    (position) => {
      history.push(`/${position}`);
    },
    [history]
  );

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <ListWrapper>
      <Title>내 모금함 만들기</Title>
      <Section>
        <Link
          to={{
            pathname:
              "https://docs.google.com/forms/d/e/1FAIpQLScz-WmG5gMTZUfPIjOC4GMsge8DjmMj8mFkgVfJcqI70PwtZw/viewform",
          }}
          target="_blank"
        >
          사연 신청하기
        </Link>
      </Section>
      <Title>프로젝트 둘러보기</Title>
      <Section onClick={() => home("#notable")}>주목할 만한 사연</Section>
      <Section onClick={() => home("#recent")}>방금 시작된 모금</Section>
    </ListWrapper>
  );
};

export default LinkList;
