import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  min-height: 100px;
  padding: 20px;
`;

const Header = styled.header`
  font-size: 20px;
  font-weight: bold;
  width: 100%;
  margin-bottom: 10px;
  line-height: 1.5em;
`;

const SummaryContent = styled.div`
  font-size: 16px;
  line-height: 1.5em;
`;

const Summary = () => {
  return (
    <Wrapper>
      <Header>
        불쑥 끼어든 차량에, 하루 전 수능 끝난 고등학생 '전신 마비'
      </Header>
      <SummaryContent>
        수능 끝나고 대학갈 생각에 부풀어 있던 한 고등학생이 갑자기 끼어든
        차량으로 전신 마비가 되었습니다. 수술비를 모으고 있습니다. 여러분의
        도움이 필요합니다.
      </SummaryContent>
    </Wrapper>
  );
};

export default Summary;
