import React from "react";
import styled from "styled-components";
import { DotSingle } from "@styled-icons/entypo/DotSingle";

const ActiveDot = styled(DotSingle)`
  color: #fff;
  width: 25px;
  height: 25px;
`;

const NonActiveDot = styled(ActiveDot)`
  color: rgba(255, 255, 255, 0.4);
`;

const Dot = React.memo(({ active }) => {
  return (
    <>
      {active && <ActiveDot />}
      {!active && <NonActiveDot />}
    </>
  );
});

export default Dot;
