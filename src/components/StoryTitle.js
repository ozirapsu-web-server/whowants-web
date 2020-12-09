import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  min-height: 100px;
  padding-top: ${(props) => props.padding}px;
  padding: ${(props) => props.story}px;
  padding-bottom: 0;
  background: #fff;
`;

const Header = styled.header`
  font-size: 24px;
  font-weight: bold;
  width: 100%;
  letter-spacing: -0.03em;
  line-height: 36px;
`;
const TagWrapper = styled.div`
  display: flex;
  margin-bottom: 10px;
`;
const Tag = styled.div`
  border-radius: 13.5px;
  color: #4277ee;
  border: 1px solid #4277ee;
  font-size: ${(props) => props.size}px;
  font-weight: bold;
  min-width: ${(props) => props.width+5}px;
  height: 28px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 7px;
  // padding:0.1%;
`;

//  사연 요약 정보 컴포넌트
const StoryTitle = React.memo(
  ({ tags, title, padding, width, size, story }) => {
    return (
      <Wrapper padding={padding || 0} story={story}>
        <TagWrapper>
          {tags.map((item, idx) => (
            <div key={`${title}-${item}`}>
              <Tag width={width || 78} size={size || 14}>
                #{item}
              </Tag>
            </div>
          ))}
        </TagWrapper>
        <Header>{title}</Header>
      </Wrapper>
    );
  }
);

export default StoryTitle;
