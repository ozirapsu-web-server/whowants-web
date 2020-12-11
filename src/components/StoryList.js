import React from "react";
import styled from "styled-components";
import StoryTitle from "components/StoryTitle";
import {
  Percent,
  ProgressWrapper,
  Bar,
  ProgressBar,
} from "components/sharedComponents";
import { PC_MIN, TABLET_MAX, TABLET_MIN } from "utils/media";

const Container = styled.section`
  width: 100%;
  min-height: 200px;
  background: #fff;
  padding: 0 20px 0 20px;
  padding-bottom: 50px;
  & > h1 {
    font-weight: 700;
    font-size: 19px;
    margin: 20px;
  }
  overflow: hidden;
  @media only screen and (min-width: ${TABLET_MIN}px) and (max-width: ${TABLET_MAX}px) {
    margin: 30px;
  }
  @media only screen and (min-width: ${PC_MIN}px) {
    display: flex;
    flex-direction: column;
    & > h1 {
      margin: 20px 0;
    }
  }
`;

const Wrapper = styled.div`
  width: 100%;
  min-height: 200px;
  display: flex;
  overflow: auto;
  padding-bottom: 20px;
  @media only screen and (min-width: ${PC_MIN}px) {
    justify-content: space-between;
  }
`;

const Story = styled.div`
  display: flex;
  flex-direction: column;
  width: 230px;
  min-height: 193px;
  margin: 0 10px;
  &:hover {
    cursor: pointer;
  }
  @media only screen and (min-width: ${TABLET_MIN}px) and (max-width: ${TABLET_MAX}px) {
    margin: 0 30px;
  }
  @media only screen and (min-width: ${PC_MIN}px) {
    &:first-of-type {
      margin-left: 0;
    }
    &:last-of-type {
      margin-right: 0;
    }
  }
`;

const Img = styled.img`
  width: 230px;
  height: 168px;
  border-radius: 6px;
`;

const StoryList = ({ title, data, onClick }) => {
  return (
    <Container>
      <h1>{title}</h1>
      <Wrapper>
        {data.map((item, idx) => {
          return (
            <Story
              key={`story-${item.image}`}
              onClick={() => onClick(item.idx)}
            >
              <Img src={item.image}></Img>
              <StoryTitle
                title={item.title}
                tags={item.tags}
                padding={10}
                width={69}
              ></StoryTitle>

              <ProgressWrapper>
                <Bar />
                <ProgressBar onprogress={item.amount_rate}></ProgressBar>
              </ProgressWrapper>
              <Percent>
                <p>{item.amount_rate}</p>
                <p>% 달성</p>
              </Percent>
            </Story>
          );
        })}
        {/* <div
          style={{
            width: "20px",
            height: "100%",
            visibility: "hidden",
          }}
        >
          a
        </div> */}
      </Wrapper>
    </Container>
  );
};

export default StoryList;
