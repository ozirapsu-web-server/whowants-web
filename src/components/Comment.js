import React from "react";
import styled from "styled-components";
import { numberWithCommas } from "utils/util";
const CommentItem = styled.div`
  width: 100%;
  min-height: 60px;
  border-radius: 10px;
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 10px 20px;
  margin-bottom: 10px;
`;

const Name = styled.div`
  font-weight: bold;
  font-size: ${(props) => props.theme.size.mmd};
`;

const AmountContainer = styled.div`
  font-weight: bold;
  font-size: ${(props) => props.theme.size.smd};
  & div:nth-child(1) {
    color: ${(props) => props.theme.color.blue};
  }
  display: flex;
  margin-top: 5px;
`;

const CommentSection = styled.div`
  font-size: ${(props) => props.theme.size.smd};
  margin-top: 5px;
`;

const Comment = React.memo(({ name, amount, comment }) => {
  return (
    <CommentItem>
      <Name>{name}</Name>
      {parseInt(amount) !== 0 && (
        <AmountContainer>
          <div>{numberWithCommas(amount)}</div>
          <div>원 후원</div>
        </AmountContainer>
      )}
      <CommentSection>{!comment ? "응원합니다" : comment}</CommentSection>
    </CommentItem>
  );
});

export default Comment;
