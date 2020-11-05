import React from "react";
import Slider from "containers/Slider";
import styled from "styled-components";

const StoryContainer = styled.section`
  width: 100%;
  height: 100vh;
`;

const Story = () => {
  return (
    <StoryContainer>
      <Slider />
    </StoryContainer>
  );
};

export default Story;
