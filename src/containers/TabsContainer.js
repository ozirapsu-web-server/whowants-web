import React from "react";
import TabList from "components/TabList";
import { useSelector } from "react-redux";

const TabsContainer = () => {
  const { story } = useSelector((state) => ({ story: state.story.story }));

  return (
    <>
      <TabList story={story}></TabList>
    </>
  );
};

export default TabsContainer;
