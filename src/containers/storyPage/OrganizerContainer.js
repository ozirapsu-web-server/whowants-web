import React from "react";
import Organizer from "components/story/Organizer";
import { useSelector } from "react-redux";
//  모금 생성자 컨테이너 컴포넌트 (진행 현재 이름만 나온다)
const OrganizerContainer = () => {
  const { organizer } = useSelector((state) => ({
    organizer: state.story.organizer,
  }));
  return <Organizer organizer={organizer}></Organizer>;
};

export default OrganizerContainer;
