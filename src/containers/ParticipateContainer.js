import React, { useState } from "react";
import Participate from "components/Participate";
import useInputs from "customHooks/useInputs";
import { useDispatch } from "react-redux";
import { addComment } from "modules/comment";
import { withRouter } from "react-router-dom";
const ParticipateContainer = React.memo(({ history }) => {
  const [{ nickname, comment, amount }, onChange, reset] = useInputs({
    nickname: "",
    comment: "응원합니다",
    amount: 0,
  });
  const [alert, setAlert] = useState(false);
  const dispatch = useDispatch();

  const onAddComment = () => {
    if (nickname === "") {
      setAlert(true);
      return;
    }
    dispatch(addComment({ name: nickname, comment, amount }));
    reset();
    history.push("/");
  };

  return (
    <Participate
      nickname={nickname}
      comment={comment}
      amount={amount}
      onChange={onChange}
      onAddComment={onAddComment}
      alert={alert}
    ></Participate>
  );
});

export default withRouter(ParticipateContainer);
