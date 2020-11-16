import React from "react";
import styled from "styled-components";
import { SubmitBtn } from "components/sharedComponents";

const ModalWrapper = styled.section`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  display: ${(props) => (props.visible ? "block" : "none")};
`;

const ModalOverlay = styled.div`
  background: rgba(0, 0, 0, 0.4);
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px;
`;

const ModalContent = styled.div`
  position: relative;
  background: #fff;
  border: 1px solid black;
  border-radius: 10px;
  width: 100%;
  min-height: 100px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  text-align: left;
  line-height: 1.3em;

  & > * {
    margin: 5px 0;
  }
  & > div:nth-child(2) {
    font-size: ${(props) => props.theme.size.smd};
  }
`;

const ModalHeader = styled.div`
  font-size: ${(props) => props.theme.size.mmd};
  font-weight: bold;
`;

const ModalBtn = styled(SubmitBtn)`
  width: 40%;
  margin-left: auto;
  height: 35px;
  margin-top: 1em;
  background: ${(props) => props.theme.color.blue};
`;

const Modal = React.memo(({ visible, onAddComment, amount }) => {
  return (
    <ModalWrapper visible={visible}>
      <ModalOverlay>
        <ModalContent>
          {amount !== 0 && (
            <ModalHeader>아직 구현되지 않은 기능입니다.</ModalHeader>
          )}
          <div>
            {amount
              ? "기부 기능이 오픈되면 가장 먼저 연락 메세지를 드리겠습니다."
              : "응원해주셔서 감사합니다"}
          </div>
          <ModalBtn onClick={() => onAddComment(1)}>확인</ModalBtn>
        </ModalContent>
      </ModalOverlay>
    </ModalWrapper>
  );
});

export default Modal;
