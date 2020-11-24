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
  font-weight: 800;
  font-size: 12px;
`;

const AmountContainer = styled.div`
  & div:nth-child(1) {
    font-weight: 700;
    font-size: 14px;
    color: ${(props) => props.theme.color.blue};
  }
  font-size: 12px;
  display: flex;
  margin-top: 5px;
`;

const CommentSection = styled.div`
  font-size: ${(props) => props.theme.size.smd};
  line-height: 20px;
  margin-top: 5px;
`;
//  하나의 댓글
const Comment = React.memo(({ name, amount, comment }) => {
  return (
    <CommentItem>
      <Name>{name}님이 응원합니다.</Name>
      {/* {parseInt(amount) !== 0 && (
        <AmountContainer>
          <div>{numberWithCommas(amount)}</div>
          <div>원 후원</div>
        </AmountContainer>
      )} */}
      <CommentSection>{!comment ? "응원합니다" : comment}</CommentSection>
    </CommentItem>
  );
});

export default Comment;
