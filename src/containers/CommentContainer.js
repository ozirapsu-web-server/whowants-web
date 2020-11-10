import React, { useCallback } from "react";
import CommentList from "components/CommentList";
import { useSelector, useDispatch } from "react-redux";

import { getAllComments, getTop3Comments } from "modules/comment";

const CommentContainer = React.memo(() => {
  let { comments, seeAllComments } = useSelector((state) => ({
    comments: state.comment.comments,
    seeAllComments: state.comment.see_all_comments,
  }));
  const lenOfComments = !comments ? 0 : comments.length;
  if (!seeAllComments) {
    comments = comments.slice(0, 3);
  }
  const dispatch = useDispatch();
  const onGetAllComments = useCallback(() => {
    dispatch(getAllComments());
  }, [dispatch]);

  const onGetTop3Comments = useCallback(() => {
    dispatch(getTop3Comments());
  }, [dispatch]);

  return (
    <CommentList
      comments={comments}
      onGetAllComments={onGetAllComments}
      onGetTop3Comments={onGetTop3Comments}
      seeAllComments={seeAllComments}
      lenOfComments={lenOfComments}
    ></CommentList>
  );
});

export default CommentContainer;