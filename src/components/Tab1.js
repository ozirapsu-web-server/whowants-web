import React from "react";
import styled from "styled-components";
import OrganizerContainer from "containers/OrganizerContainer";
import CommentContainer from "containers/CommentContainer";

const Tab1Wrapper = styled.div`
  width: 100%;
  padding: 20px;
  text-align: left;
  font-size: 16px;
  white-space: pre-wrap;
  font-weight: 400;
  line-height: 29px;
`;
//  탭 첫 번째 컴포넌트 (사연 컨텐츠)
const Tab1 = React.memo(({ content, pageIdx }) => {
  return (
    <>
      <Tab1Wrapper>{content}</Tab1Wrapper>
      <OrganizerContainer pageIdx={pageIdx} />
      <CommentContainer pageIdx={pageIdx} />
    </>
  );
});

export default Tab1;
