import React from "react";
import LogoContainer from "containers/LogoContainer";
import SlideContainer from "containers/SlideContainer";
import SummaryContainer from "containers/SummaryContainer";
import DonationContainer from "containers/DonationContainer";
import TabsContainer from "containers/TabsContainer";
import OrganizerContainer from "containers/OrganizerContainer";
import FloatingContainer from "containers/FloatingContainer";
import CommentContainer from "containers/CommentContainer";
import styled from "styled-components";

const StoryWrapper = styled.section`
  width: 100%;
  height: 100%;
  margin-bottom: 125px;
  margin-top: 61.03px;
`;
//  사연 페이지
const Story = React.memo(() => {
  return (
    <StoryWrapper>
      <LogoContainer />
      <SlideContainer />
      <SummaryContainer />
      <DonationContainer />
      <TabsContainer />
      <OrganizerContainer />
      <CommentContainer />
      <FloatingContainer />
    </StoryWrapper>
  );
});

export default Story;
