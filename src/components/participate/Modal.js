import React from "react";
import styled from "styled-components";
import { Btn } from "components/sharedComponents/sharedComponents";
import { TABLET_MIN } from "utils/media";

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
  @media only screen and (min-width: ${TABLET_MIN}px) {
    width: 600px;
  }
`;

const ModalHeader = styled.header`
  font-size: ${(props) => props.theme.size.mmd};
  font-weight: bold;
`;

const ModalBtn = styled(Btn)`
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
          <ModalHeader>응원 댓글이 달렸습니다.</ModalHeader>
          <div>응원해주셔서 감사합니다</div>
          {/* {amount ? (
            <div>
              응원해주셔서 감사합니다. <br />
              기부 기능은 아직 오픈되지 않아 기부는
              <br /> 불가합니다. 개인 기부를 원하시면 아래 전화번호로 연락을
              부탁드립니다.
              <br />
              <br />
              010-4450-6344
            </div>
          ) : (
            <div>응원해주셔서 감사합니다</div>
          )} */}
          <ModalBtn onClick={onAddComment}>확인</ModalBtn>
        </ModalContent>
      </ModalOverlay>
    </ModalWrapper>
  );
});

export default Modal;
