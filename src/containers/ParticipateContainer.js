import React from "react";
import Participate from "components/Participate";
import useInputs from "customHooks/useInputs";
import { useSelector, useDispatch } from "react-redux";
import { addComment } from "modules/comment";
const ParticipateContainer = React.memo(() => {
  const [{ nickname, comment, amount }, onChange, reset] = useInputs({
    nickname: "",
    comment: "",
    amount: "",
  });
  console.log("nickname", nickname);

  console.log("comment", comment);
  console.log("amount", amount);

  const dispatch = useDispatch();

  const onAddComment = () => {
    dispatch(addComment({ name: nickname, comment, amount }));
    reset();
  };

  return (
    <Participate
      nickname={nickname}
      comment={comment}
      amount={amount}
      onChange={onChange}
      onAddComment={onAddComment}
    ></Participate>
  );
});

export default ParticipateContainer;
