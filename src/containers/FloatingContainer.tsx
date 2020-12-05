import React from "react";
import Floating from "components/Floating";
import PageProps from 'interfaces/Page.interface';
//  플로팅 버튼 컨테이너


const FloatingContainer = ({pageIdx}:PageProps) => {
  return <Floating pageIdx={pageIdx}></Floating>;
};

export default FloatingContainer;
