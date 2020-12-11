import React, { useCallback, useEffect } from "react";
import CommentList from "components/CommentList";
import { useSelector, useDispatch } from "react-redux";

import { getAllComments, toggleComments, toggleAdded } from "modules/comment";

const CommentContainer = React.memo(({ pageIdx }) => {
  let { comments, seeAllComments, supportCount, added } = useSelector(
    (state) => ({
      comments: state.comment.comments,
      seeAllComments: state.comment.see_all_comments,
      supportCount: state.comment.supportCount,
      added: state.comment.added,
    })
  );
  //  3명의 댓글만 보여준다. seeAllComments가 true인 경우 전체 댓글을 보여준다
  if (!seeAllComments) {
    comments = comments.slice(0, 3);
  }

  const dispatch = useDispatch();

  useEffect(() => {
    // 두 번째 인자: 최근 순 댓글 가져오기
    dispatch(getAllComments(pageIdx, 0));
  }, [dispatch, pageIdx, comments]);
  //  댓글을 전체 보여주기 토글 기능
  const onToggleComments = useCallback(() => {
    dispatch(toggleComments());
  }, [dispatch]);

  const onToggleAdded = useCallback(() => {
    dispatch(toggleAdded());
  }, [dispatch]);
  return (
    <CommentList
      comments={comments}
      seeAllComments={seeAllComments}
      onToggleComments={onToggleComments}
      onToggleAdded={onToggleAdded}
      lenOfComments={supportCount}
      added={added}
    ></CommentList>
  );
});

export default CommentContainer;
