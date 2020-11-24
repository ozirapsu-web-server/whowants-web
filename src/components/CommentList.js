import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import Comment from "components/Comment";

const CommentWrapper = styled.section`
  width: 100%;
  padding: 20px;
  background: #f0f0f0;
`;

const Notice = styled.div`
  height: 60px;
  width: 100%;
  display: flex;
  align-items: center;
  font-weight: 400;
  padding-left: 5px;
`;

const NumberOfSupporter = styled.div`
  font-weight: 800;
  font-size: 15px;
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
//  댓글 리스트 컴포넌트
const CommentList = React.memo(
  ({
    comments,
    lenOfComments,
    onToggleComments,
    seeAllComments,
    added,
    onToggleAdded,
  }) => {
    const myComment = useRef();
    useEffect(() => {
      if (added) {
        window.scrollTo({
          behavior: "smooth",
          top: myComment.current.offsetTop,
        });
        onToggleAdded();
      }
    }, [onToggleAdded, added]);
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
                name={comment.support_nickname}
                amount={comment.support_amount}
                comment={comment.support_comment}
              />
            );
          })}
        <div ref={myComment}></div>
        {!seeAllComments && lenOfComments !== 0 && (
          <SeeAllBtn onClick={onToggleComments}>응원 모두 보기</SeeAllBtn>
        )}
        {seeAllComments && lenOfComments !== 0 && (
          <SeeAllBtn onClick={onToggleComments}>응원 모두 보기 접기</SeeAllBtn>
        )}
      </CommentWrapper>
    );
  }
);

export default CommentList;
