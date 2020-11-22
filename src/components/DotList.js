import React from "react";
import Dot from "components/Dot";
import styled from "styled-components";

const DotWrapper = styled.div`
  width: 100%;
  height: 30px;
  bottom: 10px;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
`;
// 이미지 슬라이드에서 활성화되고 안된 부분을 나타내는 점
const DotList = React.memo(({ active, len }) => {
  // console.log(active, len);
  return (
    <DotWrapper>
      {Array(len)
        .fill(0)
        .map((item, idx) => {
          if (active === idx) {
            return <Dot key={`dot-${idx}`} active></Dot>;
          }
          return <Dot key={`dot-${idx}`}></Dot>;
        })}
    </DotWrapper>
  );
});

export default DotList;
