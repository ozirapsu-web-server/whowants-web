import React from "react";
import SlideContainer from "containers/SlideContainer";
import SummaryContainer from "containers/SummaryContainer";
import styled from "styled-components";

const StoryContainer = styled.section`
  width: 100%;
  height: 100vh;
`;

const Story = React.memo(() => {
  return (
    <StoryContainer>
      <SlideContainer />
      <SummaryContainer />
    </StoryContainer>
  );
});

export default Story;
