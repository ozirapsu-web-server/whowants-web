import React, { useCallback, useEffect } from "react";
import CommentList from "components/CommentList";
import { useSelector, useDispatch } from "react-redux";

import { getAllComments, toggleComments, toggleAdded } from "modules/comment";

const CommentContainer = React.memo(() => {
  let { comments, seeAllComments, supportCount, added, idx } = useSelector(
    (state) => ({
      comments: state.comment.comments,
      seeAllComments: state.comment.see_all_comments,
      supportCount: state.comment.supportCount,
      added: state.comment.added,
      idx: state.story.idx,
    })
  );
  //  3명의 댓글만 보여준다. seeAllComments가 true인 경우 전체 댓글을 보여준다
  if (!seeAllComments) {
    comments = comments.slice(0, 3);
  }

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllComments(idx, 0));
  }, [dispatch, idx]);
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
