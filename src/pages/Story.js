import React from "react";
import SlideContainer from "containers/SlideContainer";
import SummaryContainer from "containers/SummaryContainer";
import styled from "styled-components";

const StoryWrapper = styled.section`
  width: 100%;
  height: 100vh;
`;

const Story = React.memo(() => {
  return (
    <StoryWrapper>
      <SlideContainer />
      <SummaryContainer />
    </StoryWrapper>
  );
});

export default Story;
