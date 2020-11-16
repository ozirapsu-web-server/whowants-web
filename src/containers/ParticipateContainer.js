import React, { useState } from "react";
import Participate from "components/Participate";
import useInputs from "customHooks/useInputs";
import { useDispatch, useSelector } from "react-redux";
import { addComment, toggleModal } from "modules/comment";
import { withRouter } from "react-router-dom";

// 후원하는 자의 작성 컴포넌트
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
  //  모달 보여주기 상태 visible
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
  //  댓글 추가 기능
  const onAddComment = (idx) => {
    // 경고 메세지와 모달 메세지는 보이지 않도록 한다.
    // 댓글 추가 api와 연동하여 댓글을 추가한다
    setAlert(false);
    setVisible(false);
    dispatch(
      addComment(idx, {
        support_nickname: nickname,
        support_comment: comment,
        support_amount: amount,
        support_phone_number: phoneNumber,
      })
    );
    reset();
    // 사연 페이지로 이동
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
