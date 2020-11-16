import React from "react";
import Floating from "components/Floating";
import { withRouter } from "react-router-dom";
//  플로팅 버튼 컨테이너
const FloatingContainer = () => {
  const scrollTo = () => {
    window.scrollTo({ behavior: "smooth", top: myComment.current.offsetTop });
  };
  return <Floating></Floating>;
};

export default withRouter(FloatingContainer);
