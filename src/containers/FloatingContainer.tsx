import React from "react";
import Floating from "components/story/Floating";
import PageProps from "interfaces/Page.interface";
import { useSelector } from "react-redux";
//  플로팅 버튼 컨테이너

const FloatingContainer = ({ pageIdx }: PageProps) => {
  const { title, img } = useSelector((state: any) => ({
    title: state.story.title,
    img: state.slide.imgs[0],
  }));
  return <Floating pageIdx={pageIdx} title={title} img={img}></Floating>;
};

export default FloatingContainer;
