import React, { useCallback, useEffect } from "react";
import CommentList from "components/CommentList";
import { useSelector, useDispatch } from "react-redux";

import {
  getAllComments,
  getTop3Comments,
  toggleComments,
} from "modules/comment";

const CommentContainer = React.memo(() => {
  let { comments, seeAllComments, supportCount } = useSelector((state) => ({
    comments: state.comment.comments,
    seeAllComments: state.comment.see_all_comments,
    supportCount: state.comment.supportCount,
  }));

  if (!seeAllComments) {
    comments = comments.slice(0, 3);
  }

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllComments(1, 0));
  }, [dispatch]);

  const onToggleComments = useCallback(() => {
    dispatch(toggleComments());
  }, [dispatch]);

  return (
    <CommentList
      comments={comments}
      seeAllComments={seeAllComments}
      onToggleComments={onToggleComments}
      lenOfComments={supportCount}
    ></CommentList>
  );
});

export default CommentContainer;
