import React from "react";
import SlideContainer from "containers/SlideContainer";
import SummaryContainer from "containers/SummaryContainer";
import DonationContainer from "containers/DonationContainer";
import styled from "styled-components";

const StoryWrapper = styled.section`
  width: 100%;
  height: 100%;
`;

const Story = React.memo(() => {
  return (
    <StoryWrapper>
      <SlideContainer />
      <SummaryContainer />
      <DonationContainer />
    </StoryWrapper>
  );
});

export default Story;
