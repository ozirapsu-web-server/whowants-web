import React from "react";
import Floating from "components/Floating";
//  플로팅 버튼 컨테이너

interface Props{
  pageIdx:number
}

const FloatingContainer = ({pageIdx}:Props) => {
  return <Floating pageIdx={pageIdx}></Floating>;
};

export default FloatingContainer;
