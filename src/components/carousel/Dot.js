import React from "react";
import styled from "styled-components";
import { DotSingle } from "@styled-icons/entypo/DotSingle";

const ActiveDot = styled(DotSingle)`
  color: ${(props) => props.theme.color.lightBlue};
  width: 25px;
  height: 25px;
`;

const NonActiveDot = styled(ActiveDot)`
  color: ${(props) => props.theme.color.notActive};
`;
//  슬라이드 이미지에서 현재 활성화된 부분을 나타내는  점입니다.
const Dot = React.memo(({ active }) => {
  return (
    <>
      {active && <ActiveDot />}
      {!active && <NonActiveDot />}
    </>
  );
});

export default Dot;
