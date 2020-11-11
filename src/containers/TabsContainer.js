import React from "react";
import TabList from "components/TabList";
import { useSelector } from "react-redux";

const TabsContainer = () => {
  const { content } = useSelector((state) => ({
    content: state.story.content,
  }));

  return (
    <>
      <TabList content={content}></TabList>
    </>
  );
};

export default TabsContainer;
