import React from "react";
import styled from "styled-components";
// import { numberWithCommas } from "utils/util";
import { CommentProps } from "interfaces/Comment.interface";
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
  font-weight: 700;
  font-size: 13px;
`;

// const AmountContainer = styled.div`
//   & div:nth-child(1) {
//     font-weight: 700;
//     font-size: 14px;
//     color: ${(props) => props.theme.color.blue};
//   }
//   font-size: 12px;
//   display: flex;
//   margin-top: 5px;
// `;

const CommentSection = styled.div`
  font-size: ${(props) => props.theme.size.smd};
  font-weight: 400;
  line-height: 20px;
  margin-top: 5px;
`;
//  하나의 댓글
const Comment = React.memo(
  ({ support_nickname, support_amount, support_comment }: CommentProps) => {
    return (
      <CommentItem>
        <Name>{support_nickname} 님이 응원합니다.</Name>
        {/* {parseInt(support_amount) !== 0 && (
        <AmountContainer>
          <div>{numberWithCommas(support_amount)}</div>
          <div>원 후원</div>
        </AmountContainer>
      )} */}
        <CommentSection>
          {!support_comment ? "응원합니다" : support_comment}
        </CommentSection>
      </CommentItem>
    );
  }
);

export default Comment;
