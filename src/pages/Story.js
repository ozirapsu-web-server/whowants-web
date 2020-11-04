import React from "react";
import CarouselContainer from "containers/CarouselContainer";
import styled from "styled-components";

const StoryContainer = styled.section`
  width: 100%;
  height: 100vh;
`;

const Story = () => {
  return (
    <StoryContainer>
      <CarouselContainer />
    </StoryContainer>
  );
};

export default Story;
