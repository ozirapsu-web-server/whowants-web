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

const SeeAllBtn = styled.button`
  width: 100%;
  height: 45px;
  background: ${(props) => props.theme.color.blue};
  color: #fff;
  font-size: ${(props) => props.theme.size.smd};
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 10px;
  margin-top: 20px;
`;

const CommentList = React.memo(
  ({
    comments,
    onGetAllComments,
    onGetTop3Comments,
    seeAllComments,
    lenOfComments,
  }) => {
    return (
      <CommentWrapper>
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
                key={`top3-comment-${idx}`}
                name={comment.name}
                amount={comment.amount}
                comment={comment.comment}
              />
            );
          })}
        {!seeAllComments && lenOfComments !== 0 && (
          <SeeAllBtn onClick={onGetAllComments}>응원 모두 보기</SeeAllBtn>
        )}
        {seeAllComments && lenOfComments !== 0 && (
          <SeeAllBtn onClick={onGetTop3Comments}>응원 모두 보기 접기</SeeAllBtn>
        )}
      </CommentWrapper>
    );
  }
);

export default CommentList;
