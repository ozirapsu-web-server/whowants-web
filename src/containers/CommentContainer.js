import React from "react";
import CommentList from "components/CommentList";
import { useSelector, useDispatch } from "react-redux";

import { getAllComments, getTop3Comments } from "modules/comment";

const CommentContainer = React.memo(() => {
  let { comments, seeAllComments } = useSelector((state) => ({
    comments: state.comment.comments,
    seeAllComments: state.comment.see_all_comments,
  }));
  if (!seeAllComments) {
    comments = comments.slice(0, 3);
  }
  const dispatch = useDispatch();
  const onGetAllComments = () => {
    dispatch(getAllComments());
  };

  const onGetTop3Comments = () => {
    dispatch(getTop3Comments());
  };

  return (
    <CommentList
      comments={comments}
      onGetAllComments={onGetAllComments}
      onGetTop3Comments={onGetTop3Comments}
      seeAllComments={seeAllComments}
    ></CommentList>
  );
});

export default CommentContainer;
