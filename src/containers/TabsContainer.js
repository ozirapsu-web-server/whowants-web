import React from "react";
import TabList from "components/TabList";
import { useSelector } from "react-redux";


//  탭 정보 컴포넌트
const TabsContainer = ({pageIdx}) => {
  const { content,comments,supportCount } = useSelector((state) => ({
    content: state.story.content,
    supportCount:state.comment.supportCount,
    comments:state.comment.comments
  }));

  return (
    <>
      <TabList content={content} comments={comments} supportCount={supportCount} pageIdx={pageIdx}></TabList>
    </>
  );
};

export default TabsContainer;
