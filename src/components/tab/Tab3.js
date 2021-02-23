import React, { useCallback } from "react";
import Comment from "components/comment/Comment";
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

const MiddleNotice = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: 300;
  line-height: 20px;
  color: #484848;
  margin: 20px 0;
  & div:nth-child(2) {
    text-decoration: underline;
    text-underline-position: under;
  }
`;

const Tab3 = ({ comments, lenOfComments, pageIdx }) => {
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
            <div key={`tab3-${idx}`}>
              <Comment
                support_nickname={comment.support_nickname}
                support_amount={comment.support_amount}
                support_comment={comment.support_comment}
              />
              {idx === 4 && (
                <MiddleNotice key={`mid-notice-${idx}`}>
                  <div>{lenOfComments}명의 서포터즈와 함께해요.&nbsp;</div>
                  <div onClick={onClick}>모금에 참여해보세요.</div>
                </MiddleNotice>
              )}
            </div>
          );
        })}
    </CommentWrapper>
  );
};

export default Tab3;
