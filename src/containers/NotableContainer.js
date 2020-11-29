import React, { useEffect } from "react";
import StoryList from "components/StoryList";
import { useSelector, useDispatch } from "react-redux";
import { getRecentStory, setStoryIdx } from "modules/story";
const NotableContainer = () => {
  const { stories, idx } = useSelector((state) => ({
    stories: state.story.recentStories,
    idx: state.story.idx,
  }));
  const dispatch = useDispatch();
  const title = "주목할만한 사연";
  const title2 = "방금 시작된 모금";
  useEffect(() => {
    dispatch(getRecentStory());
  }, [dispatch]);
  console.log(stories);
  console.log(idx);
  const onSetStoryIdx = (s_idx) => {
    console.log(s_idx);
    dispatch(setStoryIdx(s_idx));
  };
  return (
    <>
      <StoryList
        data={stories}
        title={title}
        onSetStoryIdx={onSetStoryIdx}
      ></StoryList>
      <StoryList
        data={stories}
        title={title2}
        onSetStoryIdx={onSetStoryIdx}
      ></StoryList>
    </>
  );
};

export default NotableContainer;
