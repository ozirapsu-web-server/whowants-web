import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  min-height: 70px;
  padding-top: ${(props) => props.padding}px;
  padding: ${(props) => props.story}px;
  padding-bottom: 0;
  background: #fff;
`;

const Header = styled.header`
  font-size: 17px;
  font-weight: 500;
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
  font-size: 10px;
  font-weight: 500;
  min-width: 52px;
  height: 22px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 7px;
`;

//  사연 요약 정보 컴포넌트
const StoryTitle = React.memo(({ tags, title, padding, size, story }) => {
  return (
    <Wrapper padding={padding || 0} story={story}>
      <TagWrapper>
        {tags.map((item, idx) => (
          <div key={`${title}-${item}`}>
            <Tag width={42} size={size || 10}>
              #{item}
            </Tag>
          </div>
        ))}
      </TagWrapper>
      <Header>{title}</Header>
    </Wrapper>
  );
});

export default StoryTitle;
