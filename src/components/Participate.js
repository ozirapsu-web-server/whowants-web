import React from "react";
import styled from "styled-components";

const Wrapper = styled.section`
  width: 100%;
  height: 100vh;
`;

const ParticipateBtn = styled.button`
  width: 90%;
  height: 30px;
`;

const Participate = () => {
  return (
    <Wrapper>
      작성란
      <ParticipateBtn>응원하기</ParticipateBtn>
    </Wrapper>
  );
};

export default Participate;
