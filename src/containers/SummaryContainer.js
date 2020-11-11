import React, { useEffect } from "react";
import Summary from "components/Summary";
import { useSelector, useDispatch } from "react-redux";
import { getStoryInfo } from "modules/story";

const SummaryContainer = React.memo(() => {
  const { title, summary } = useSelector((state) => ({
    title: state.story.title,
    summary: state.story.summary,
  }));
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getStoryInfo(1));
  }, [dispatch]);

  return <Summary title={title} summary={summary}></Summary>;
});

export default SummaryContainer;
