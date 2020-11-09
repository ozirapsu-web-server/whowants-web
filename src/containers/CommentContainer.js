import React from "react";
import CommentList from "components/CommentList";
import { useSelector, useDispatch } from "react-redux";

const CommentContainer = () => {
  let { comments, see_all_comments } = useSelector((state) => ({
    comments: state.comment.comments,
    see_all_comments: state.comment.see_all_comments,
  }));
  if (!see_all_comments) {
    comments = comments.slice(0, 3);
  }

  return <CommentList comments={comments}></CommentList>;
};

export default CommentContainer;
