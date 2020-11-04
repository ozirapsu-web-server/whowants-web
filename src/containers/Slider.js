import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import Slide from "components/Slide";
import study1 from "images/study1.jpg";
import study2 from "images/study2.jpg";
import study3 from "images/study3.jpg";
import study4 from "images/study4.jpg";
import study5 from "images/study5.jpg";

const initialState = [study1, study2, study3, study4, study5];

const total = 4;

const Container = styled.div`
  width: 100%;
  height: 65vh;
  background: #ddd;
  overflow: hidden;
`;

const SliderContainer = styled.div`
  width: 100%;
  display: flex;
`;

const Button = styled.button`
  width: 50px;
  height: 30px;
  border: 1px solid black;
  background: coral;
`;

const Slider = () => {
  const [page, setPage] = useState(0);
  const slideRef = useRef(null);

  useEffect(() => {
    slideRef.current.style.transition = "all 0.5s ease-in-out";
    slideRef.current.style.transform = `translateX(-${page}00%)`; // 백틱을 사용하여 슬라이드로 이동하는 애니메이션을 만듭니다.
  }, [page]);

  const nextSlide = () => {
    if (page >= total) {
      setPage(0);
    } else {
      setPage(page + 1);
    }
  };

  const prevSlide = () => {
    if (page == 0) {
      setPage(total);
    } else {
      setPage(page - 1);
    }
  };

  return (
    <>
      <Container>
        <SliderContainer ref={slideRef}>
          {initialState.map((item, idx) => (
            <Slide img={item} key={`slide-${idx}`}></Slide>
          ))}
        </SliderContainer>
      </Container>
      <Button onClick={prevSlide}>prev</Button>
      <Button onClick={nextSlide}>next</Button>
    </>
  );
};

export default Slider;
