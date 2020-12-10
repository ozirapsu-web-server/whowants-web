import React, { useEffect } from "react";
import LogoContainer from "containers/LogoContainer";
import SlideContainer from "containers/SlideContainer";
import StoryTitleContainer from "containers/StoryTitleContainer";
import DonationContainer from "containers/DonationContainer";
import TabsContainer from "containers/TabsContainer";
import FloatingContainer from "containers/FloatingContainer";
import styled from "styled-components";
import hamburgerBar from "images/hamburgerBar.png";
import useMedia from "customHooks/useMedia";
import { PC_MIN } from "utils/media";

const StoryWrapper = styled.section`
  width: 100%;
  height: 100%;
  margin-bottom: 125px;
  margin-top: 55px;
  background: #fff;
  @media only screen and (min-width: ${PC_MIN}px) {
    display: flex;
    // background: yellow;
    justify-content: center;
  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
`;

const FlexWrapper = styled.div`
  display: flex;
  justify-content: center;

  // background: pink;
  // border: 5px solid black;
  & > div {
    margin: 30px 15px;
  }
`;

//  사연 페이지
const Story = React.memo(({ match }) => {
  const { Mobile, pc, Tablet } = useMedia();

  const { pageIdx } = match.params;
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <>
      {Mobile && (
        <StoryWrapper>
          <LogoContainer left={hamburgerBar} />
          <SlideContainer pageIdx={pageIdx} />
          <StoryTitleContainer pageIdx={pageIdx} />
          <DonationContainer pageIdx={pageIdx} />
          <TabsContainer pageIdx={pageIdx} />
          <FloatingContainer pageIdx={pageIdx} />
        </StoryWrapper>
      )}
      {Tablet && (
        <StoryWrapper>
          <LogoContainer left={hamburgerBar} />
          <SlideContainer pageIdx={pageIdx} />
          <StoryTitleContainer pageIdx={pageIdx} />
          <DonationContainer pageIdx={pageIdx} />
          <TabsContainer pageIdx={pageIdx} />
          <FloatingContainer pageIdx={pageIdx} />
        </StoryWrapper>
      )}
      {pc && (
        <StoryWrapper>
          <LogoContainer left={hamburgerBar} />
          <Column>
            <StoryTitleContainer pageIdx={pageIdx} />
            <FlexWrapper>
              <div style={{ width: "581.46px" }}>
                <SlideContainer pageIdx={pageIdx} />
                <TabsContainer pageIdx={pageIdx} />
              </div>
              <div>
                <DonationContainer pageIdx={pageIdx} />
                {/* <FloatingContainer pageIdx={pageIdx} /> */}
              </div>
            </FlexWrapper>
          </Column>
        </StoryWrapper>
      )}
    </>
  );
});

export default Story;
