import styled from "styled-components";
import { Close } from "@styled-icons/evaicons-solid/Close";
import { PC_MIN } from "utils/media";

const StyledClose = styled(Close)`
  position: absolute;
  top: 10px;
  right: 20px;
  width: 30px;
  height: 30px;
  color: black;
`;

const Btn = styled.button`
  width: 100%;
  background: ${(props) => props.theme.color.blue};
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  color: #fff;
  border: none;
  border-radius: 10px;
  font-size: ${(props) => props.theme.size.mmd};
`;

const Percent = styled.div`
  display: flex;
  align-items: center;

  margin-bottom: 7px;

  & p:nth-child(1) {
    color: ${(props) => props.theme.color.blue};
    font-size: 20.43px;
    font-weight: 800;
    margin-right: 3px;
  }

  & p:nth-child(2) {
    font-weight: 500;
    font-size: 14px;
  }
`;

const ProgressWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 5px;
  margin-bottom: 30px;
  position: relative;

  & div {
    border-radius: 5px;
  }
`;

const Bar = styled.div`
  width: 100%;
  height: 18px;
  background: ${(props) => props.theme.color.gray};
  position: absolute;
  left: 0;
  top: 0;
`;

const ProgressBar = styled(Bar)`
  width: ${(props) => props.onprogress}%;
  background: ${(props) => props.theme.color.blue};
  height: 18px;
`;

const CommentWrapper = styled.section`
  width: 100%;
  padding: 20px;
  background: #f0f0f0;
  @media only screen and (min-width: ${PC_MIN}px) {
    border-radius: 6px;
  }
`;

const Notice = styled.div`
  height: 60px;
  width: 100%;
  display: flex;
  align-items: center;
  font-weight: 400;
  padding-left: 5px;
`;

const NumberOfSupporter = styled.div`
  font-weight: 800;
  font-size: 15px;
`;

export {
  StyledClose,
  Btn,
  Percent,
  ProgressWrapper,
  Bar,
  ProgressBar,
  CommentWrapper,
  Notice,
  NumberOfSupporter,
};
