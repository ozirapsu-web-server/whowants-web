import React from "react";
import Participate from "components/Participate";
import Modal from "components/Modal";
import useInputs from "customHooks/useInputs";
import { useDispatch } from "react-redux";
import { addComment } from "modules/comment";
import { withRouter } from "react-router-dom";

// 후원하는 자의 작성 컴포넌트
const ParticipateContainer = React.memo(({ history }) => {
  const [form, onChange, alert, onToggleModal, visible, reset] = useInputs({
    nickname: "",
    phoneNumber: "",
    comment: "응원합니다",
    amount: 0,
  });
  //  모달 보여주기 상태 visible

  const dispatch = useDispatch();
  //  댓글 추가 기능
  const onAddComment = (idx) => {
    // 댓글 추가 api와 연동하여 댓글을 추가한다
    dispatch(
      addComment(idx, {
        support_nickname: form.nickname,
        support_comment: form.comment,
        support_amount: form.amount,
        support_phone_number: form.phoneNumber,
      })
    );
    reset();
    // 사연 페이지로 이동
    history.push("/");
  };
  const goBack = () => {
    history.goBack();
  };

  return (
    <>
      <Participate
        form={form}
        onChange={onChange}
        alert={alert}
        goBack={goBack}
        onToggleModal={onToggleModal}
      ></Participate>
      <Modal
        amount={form.amount}
        visible={visible}
        onAddComment={onAddComment}
      ></Modal>
    </>
  );
});

export default withRouter(ParticipateContainer);
