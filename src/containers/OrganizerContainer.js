import React from "react";
import Organizer from "components/Organizer";
import { useSelector } from "react-redux";

const OrganizerContainer = () => {
  const { organizer } = useSelector((state) => ({
    organizer: state.story.organizer,
  }));
  return <Organizer organizer={organizer}></Organizer>;
};

export default OrganizerContainer;
