import React from "react";
import LogoContainer from "containers/LogoContainer";
import SlideContainer from "containers/SlideContainer";
import StoryTitleContainer from "containers/StoryTitleContainer";
import DonationContainer from "containers/DonationContainer";
import TabsContainer from "containers/TabsContainer";
import FloatingContainer from "containers/FloatingContainer";
import styled from "styled-components";
import hamburgerBar from "images/hamburgerBar.png";
const StoryWrapper = styled.section`
  width: 100%;
  height: 100%;
  margin-bottom: 125px;
  margin-top: 55px;
  background: #fff;
`;
//  사연 페이지
const Story = React.memo(({match}) => {
  const {pageIdx}=match.params;

  return (
    <StoryWrapper>
      <LogoContainer left={hamburgerBar} />
      <SlideContainer pageIdx={pageIdx}/>
      <StoryTitleContainer pageIdx={pageIdx}/>
      <DonationContainer pageIdx={pageIdx}/>
      <TabsContainer pageIdx={pageIdx}/>
      <FloatingContainer pageIdx={pageIdx}/>
    </StoryWrapper>
  );
});

export default Story;
