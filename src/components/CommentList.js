import React from "react";
import styled from "styled-components";
import Comment from "components/Comment";

const CommentWrapper = styled.section`
  width: 100%;
  padding: 20px;
`;

const Notice = styled.div`
  height: 60px;
  padding: 10px 5px;
  width: 100%;
  background: ${(props) => props.theme.color.mint};
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
`;

const NumberOfSupporter = styled.div`
  font-weight: bold;
  font-size: 16px;
`;

const CommentList = ({ numOfSupporter }) => {
  return (
    <CommentWrapper>
      <Notice>
        <NumberOfSupporter>{numOfSupporter}명의 서포터</NumberOfSupporter>
        <div>가 이 사연을 응원합니다.</div>
      </Notice>
      <Comment name="최해랑" amount="50000" comment="응원합니다" />
    </CommentWrapper>
  );
};

export default CommentList;
