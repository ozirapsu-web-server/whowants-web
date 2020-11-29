import React from "react";
import styled from "styled-components";

const Container = styled.section`
  width: 100%;
  & > h1 {
    font-weight: 700;
    font-size: 19px;
    margin: 20px;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  min-height: 200px;
  display: flex;
  padding-left: 20px;
  overflow: auto;
`;

const Story = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 193px;
  margin-right: 20px;
`;

const Img = styled.img`
  width: 264px;
  height: 193px;
`;

const NotableStoryList = ({ data }) => {
  console.log(data);
  return (
    <Container>
      <h1>주목할 만한 사연</h1>
      <Wrapper>
        {data.map((item, idx) => {
          return (
            <Story key={`story-${item.image}`}>
              <Img src={item.image}></Img>
            </Story>
          );
        })}
      </Wrapper>
    </Container>
  );
};

export default NotableStoryList;
