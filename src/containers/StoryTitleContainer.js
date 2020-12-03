import React, { useEffect } from "react";
import StoryTitle from "components/StoryTitle";
import { useSelector, useDispatch } from "react-redux";
import { getStoryInfo } from "modules/story";

//  사연 요약 정보 컴포넌트 -> 태그로 변경
const StoryTitleContainer = React.memo(({pageIdx}) => {

  const { title, tags } = useSelector((state) => ({
    title: state.story.title,
    tags: state.story.tags,
  }));
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getStoryInfo(pageIdx));
  }, [dispatch, pageIdx]);
  return <StoryTitle title={title} tags={tags} story={20}></StoryTitle>;
});

export default StoryTitleContainer;
