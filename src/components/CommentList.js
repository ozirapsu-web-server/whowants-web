import React from "react";
import styled from "styled-components";
import Comment from "components/Comment";

const CommentWrapper = styled.section`
  width: 100%;
  padding: 20px;
`;

const CommentList = () => {
  return (
    <CommentWrapper>
      <Comment name="최해랑" amount="50000" comment="응원합니다" />
    </CommentWrapper>
  );
};

export default CommentList;
