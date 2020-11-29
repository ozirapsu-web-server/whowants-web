import React, { useEffect } from "react";
import NotableStoryList from "components/NotableStoryList";
import { useSelector, useDispatch } from "react-redux";
import { getRecentStory } from "modules/story";
const NotableContainer = () => {
  const { stories } = useSelector((state) => ({
    stories: state.story.recentStories,
  }));
  const dispatch = useDispatch();
  const title = "주목할만한 사연";
  useEffect(() => {
    dispatch(getRecentStory());
  }, [dispatch]);
  return <NotableStoryList data={stories} title={title}></NotableStoryList>;
};

export default NotableContainer;
