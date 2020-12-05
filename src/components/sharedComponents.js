import styled from "styled-components";
import { Close } from "@styled-icons/evaicons-solid/Close";

const StyledClose = styled(Close)`
  position: absolute;
  top: 10px;
  right: 20px;
  width: 30px;
  height: 30px;
  color: black;
`;

const Btn = styled.div`
  width: 100%;
  background: ${(props) => props.theme.color.blue};
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  color: #fff;
  border-radius: 10px;
  font-size: ${(props) => props.theme.size.mmd};
`;

const Percent = styled.div`
  display: flex;
  align-items: center;
  font-weight: bold;
  margin-bottom: 7px;
  & p:nth-child(1) {
    margin-right: 3px;
  }
  & p:nth-child(1) {
    font-size: 24px;
    color: ${(props) => props.theme.color.blue};
  }

  & p:nth-child(2) {
    font-weight: bold;
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

export { StyledClose, Btn, Percent, ProgressWrapper, Bar, ProgressBar };
