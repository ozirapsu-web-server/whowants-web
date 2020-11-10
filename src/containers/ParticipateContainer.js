import React, { useState } from "react";
import Participate from "components/Participate";
import useInputs from "customHooks/useInputs";
import { useDispatch, useSelector } from "react-redux";
import { addComment, toggleModal } from "modules/comment";
import { withRouter } from "react-router-dom";
const ParticipateContainer = React.memo(({ history }) => {
  const [
    { nickname, comment, amount, phoneNumber },
    onChange,
    reset,
    alert,
    setAlert,
  ] = useInputs({
    nickname: "",
    phoneNumber: "",
    comment: "응원합니다",
    amount: 0,
  });

  const [visible, setVisible] = useState(false);
  const dispatch = useDispatch();

  const goBack = () => {
    history.goBack();
  };

  const onToggleModal = () => {
    if (nickname === "") {
      setAlert(true);
      return;
    }
    setVisible((visible) => !visible);
  };

  const onAddComment = () => {
    setAlert(false);
    setVisible(false);
    dispatch(addComment({ name: nickname, comment, amount }));
    reset();
    history.push("/");
  };

  return (
    <Participate
      nickname={nickname}
      phoneNumber={phoneNumber}
      comment={comment}
      amount={amount}
      onChange={onChange}
      onAddComment={onAddComment}
      alert={alert}
      goBack={goBack}
      visible={visible}
      onToggleModal={onToggleModal}
    ></Participate>
  );
});

export default withRouter(ParticipateContainer);
