import React from "react";
import Slider from "containers/Slider";
import Summary from "components/Summary";
import styled from "styled-components";

const StoryContainer = styled.section`
  width: 100%;
  height: 100vh;
`;

const Story = React.memo(() => {
  return (
    <StoryContainer>
      <Slider />
      <Summary />
    </StoryContainer>
  );
});

export default Story;
