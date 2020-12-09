import React,{useEffect} from "react";
import Participate from "components/Participate";
import Modal from "components/Modal";
import useInputs from "customHooks/useInputs";
import { useSelector, useDispatch } from "react-redux";
import { addComment } from "modules/comment";
import { withRouter } from "react-router-dom";
import { getStoryInfo } from "modules/story";

// 후원하는 자의 작성 컴포넌트
const ParticipateContainer = React.memo(({ history,match }) => {
  const {pageIdx}=match.params;
  const {title} = useSelector((state) => ({
    title: state.story.title,
  }));

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getStoryInfo(pageIdx));
  }, [dispatch, pageIdx]);
  console.log(title);
  const [form, onChange, alert, onToggleModal, visible, reset] = useInputs({
    nickname: "",
    phoneNumberFirst: "010",
    phoneNumberMid: "",
    phoneNumberLast: "",
    email:"",
    comment: "응원합니다",
    amount: 0,
  });
  //  모달 보여주기 상태 visible
  console.log(form)
  //  댓글 추가 기능
  const onAddComment = () => {
    // 댓글 추가 api와 연동하여 댓글을 추가한다
    const phoneNumber=form.phoneNumberFirst+'-'+form.phoneNumberMid+'-'+form.phoneNumberLast;

    dispatch(
      addComment(pageIdx, {
        support_nickname: form.nickname,
        support_comment: form.comment,
        support_amount: form.amount,
        support_phone_number: phoneNumber,
      })
    );
    reset();
    // 사연 페이지로 이동
    history.push(`/storyPage/${pageIdx}`);
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
        title={title}
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
