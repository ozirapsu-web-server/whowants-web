import React from "react";
import styled from "styled-components";
import { DotSingle } from "@styled-icons/entypo/DotSingle";

const DotWrapper = styled.div`
  width: 100%;
  height: 30px;
  bottom: 10px;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ActiveDot = styled(DotSingle)`
  color: #fff;
  width: 25px;
  height: 25px;
`;

const NonActiveDot = styled(ActiveDot)`
  color: rgba(255, 255, 255, 0.4);
`;

const DotContainer = React.memo(({}) => {
  return (
    <DotWrapper>
      <Dot></Dot>
    </DotWrapper>
  );
});

const Dot = React.memo(({ active }) => {
  return (
    <div>
      <ActiveDot />
      <NonActiveDot />
      <NonActiveDot />
      <NonActiveDot />
      <NonActiveDot />
    </div>
  );
});

export default DotContainer;
