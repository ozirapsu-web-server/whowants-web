import React from "react";
import CommentList from "components/CommentList";
import { useSelector } from "react-redux";

const CommentContainer = () => {
  const { comments } = useSelector((state) => ({
    comments: state.comment.comments,
  }));

  return <CommentList comments={comments}></CommentList>;
};

export default CommentContainer;
