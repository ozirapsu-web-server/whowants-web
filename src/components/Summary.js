import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  min-height: 100px;
  padding: 20px;
  background: #fff;
`;

const Header = styled.header`
  font-size: 20px;
  font-weight: bold;
  width: 100%;
  margin-bottom: 10px;
  line-height: 1.5em;
`;

const SummaryContent = styled.div`
  font-size: ${(props) => props.theme.size.smd};
  line-height: 1.5em;
`;

const Summary = React.memo(({ title, summary }) => {
  return (
    <Wrapper>
      <Header>{title}</Header>
      <SummaryContent>{summary}</SummaryContent>
    </Wrapper>
  );
});

export default Summary;
