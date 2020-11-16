import React from "react";
import TabList from "components/TabList";
import { useSelector } from "react-redux";
//  탭 정보 컴포넌트
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
