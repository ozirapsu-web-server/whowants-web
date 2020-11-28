import React from "react";
import styled from "styled-components";
import StoryTitle from "components/StoryTitle";
import Donation from "components/Donation";
const Story = ({ title, summary, target, amount, percent }) => {
  return (
    <>
      <StoryTitle title={title} summary={summary}></StoryTitle>
    </>
  );
};

const NotableStoryList = () => {
  return (
    <div>
      <Story></Story>
    </div>
  );
};

export default NotableStoryList;
