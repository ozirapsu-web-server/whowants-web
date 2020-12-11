import React, { useEffect, useCallback } from "react";
import StoryList from "components/StoryList";
import { useSelector, useDispatch } from "react-redux";
import { getRecentStory, getHotStory, setStoryIdx } from "modules/story";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { PC_MIN } from "utils/media";

const MediaWrapper = styled.div`
  @media only screen and (min-width: ${PC_MIN}px) {
    width: 60%;
    margin: auto;
  }
`;

const NotableContainer = () => {
  const history = useHistory();
  const { recentStories, hotStories } = useSelector((state) => ({
    recentStories: state.story.recentStories,
    hotStories: state.story.hotStories,
    idx: state.story.idx,
  }));
  const dispatch = useDispatch();
  const title = "주목할만한 사연";
  const title2 = "방금 시작된 모금";

  useEffect(() => {
    dispatch(getRecentStory());
    dispatch(getHotStory());
  }, [dispatch]);
  const onSetStoryIdx = useCallback(
    (pageIdx) => {
      dispatch(setStoryIdx(pageIdx));
      history.push(`/storyPage/${pageIdx}`);
    },
    [dispatch, history]
  );
  return (
    <MediaWrapper>
      {/* 주목할만한 사연 */}
      <StoryList
        data={hotStories}
        title={title}
        onClick={onSetStoryIdx}
      ></StoryList>
      {/* 방금 시작된 사연 */}
      <div id="#recent"></div>
      <StoryList
        data={recentStories}
        title={title2}
        onClick={onSetStoryIdx}
      ></StoryList>
    </MediaWrapper>
  );
};

export default NotableContainer;
