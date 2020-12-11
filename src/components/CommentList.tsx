import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import Comment from "components/Comment";
import { ArrowIosDownwardOutline } from "@styled-icons/evaicons-outline/ArrowIosDownwardOutline";
import { ArrowIosUpwardOutline } from "@styled-icons/evaicons-outline/ArrowIosUpwardOutline";
import { CommentListProps } from "interfaces/Comment.interface";
import {
  CommentWrapper,
  Notice,
  NumberOfSupporter,
} from "components/sharedComponents";

const DownArrow = styled(ArrowIosDownwardOutline)`
  width: ${(props) => props.theme.size.mmd};
  height: ${(props) => props.theme.size.mmd};
`;
const UpArrow = styled(ArrowIosUpwardOutline)`
  width: ${(props) => props.theme.size.mmd};
  height: ${(props) => props.theme.size.mmd};
`;

const SeeAllBtn = styled.button`
  width: 100%;
  height: 45px;
  color: ${(props) => props.theme.color.blue};
  border: none;
  &:hover {
    cursor: pointer;
  }
  & > div {
    display: flex;
    align-items: center;
    border: none;
    border-bottom: 1px solid ${(props) => props.theme.color.blue};
  }
  font-size: ${(props) => props.theme.size.mmd};
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
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
  }: CommentListProps) => {
    const myComment = useRef<HTMLDivElement>(null);
    useEffect(() => {
      if (added && myComment.current) {
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
                support_nickname={comment.support_nickname}
                support_amount={comment.support_amount}
                support_comment={comment.support_comment}
              />
            );
          })}
        <div ref={myComment}></div>
        {!seeAllComments && lenOfComments !== 0 && (
          <SeeAllBtn onClick={onToggleComments}>
            <div>
              응원 모두보기
              <DownArrow />
            </div>
          </SeeAllBtn>
        )}
        {seeAllComments && lenOfComments !== 0 && (
          <SeeAllBtn onClick={onToggleComments}>
            <div>
              응원 모두보기 접기
              <UpArrow />
            </div>
          </SeeAllBtn>
        )}
      </CommentWrapper>
    );
  }
);

export default CommentList;
