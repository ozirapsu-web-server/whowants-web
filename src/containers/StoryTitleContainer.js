import React, { useEffect } from "react";
import StoryTitle from "components/StoryTitle";
import { useSelector, useDispatch } from "react-redux";
import { getStoryInfo } from "modules/story";

//  사연 요약 정보 컴포넌트
const StoryTitleContainer = React.memo(() => {
  const { title, summary } = useSelector((state) => ({
    title: state.story.title,
    summary: state.story.summary,
  }));
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getStoryInfo(1));
  }, [dispatch]);
  return <StoryTitle title={title} summary={summary}></StoryTitle>;
});

export default StoryTitleContainer;
