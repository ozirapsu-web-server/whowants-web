import React, { useEffect } from "react";
import NotableStoryList from "components/NotableStoryList";

import { useSelector, useDispatch } from "react-redux";
import { getRecentStory } from "modules/story";
const NotableContainer = () => {
  const { stories } = useSelector((state) => ({
    stories: state.story.recentStories,
  }));
  const dispatch = useDispatch();
  console.log(stories);
  useEffect(() => {
    dispatch(getRecentStory());
  }, [dispatch]);
  return <NotableStoryList></NotableStoryList>;
};

export default NotableContainer;
