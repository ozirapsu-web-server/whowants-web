import React, { useCallback } from "react";
import Comment from "components/Comment";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import {
  CommentWrapper,
  Notice,
  NumberOfSupporter,
  Btn,
} from "components/sharedComponents";

const ParticipateBtn = styled(Btn)`
  height: 44px;
  background: #6fcf97;
  border-radius: 4px;
  font-weight: 700;
  font-size: 15px;
  line-height: 20px;
`;

const Supporter = ({ comments, lenOfComments, pageIdx }) => {
  const history = useHistory();
  const onClick = useCallback(() => {
    history.push(`/participate/${pageIdx}`);
  }, [history, pageIdx]);
  return (
    <CommentWrapper>
      <ParticipateBtn onClick={onClick}>응원 참여하기</ParticipateBtn>
      <Notice>
        <NumberOfSupporter>
          {lenOfComments}
          명의 서포터
        </NumberOfSupporter>
        <div>가 이 사연을 응원합니다.</div>
      </Notice>

      {comments &&
        comments.map((comment, idx) => {
          return (
            <Comment
              key={`supporters-${idx}`}
              support_nickname={comment.support_nickname}
              support_amount={comment.support_amount}
              support_comment={comment.support_comment}
            />
          );
        })}
    </CommentWrapper>
  );
};

export default Supporter;
