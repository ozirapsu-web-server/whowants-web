import React from "react";
import TabList from "components/TabList";
import { useSelector } from "react-redux";

//  탭 정보 컴포넌트
const TabsContainer = ({ pageIdx }) => {
  const { content, comments, supportCount, organizer } = useSelector(
    (state) => ({
      content: state.story.content,
      supportCount: state.comment.supportCount,
      comments: state.comment.comments,
      organizer: state.story.organizer,
    })
  );
  console.log(content);

  return (
    <>
      <TabList
        content={content}
        comments={comments}
        supportCount={supportCount}
        pageIdx={pageIdx}
        organizer={organizer}
      ></TabList>
    </>
  );
};

export default TabsContainer;
