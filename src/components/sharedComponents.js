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

const SubmitBtn = styled.div`
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

export { StyledClose, SubmitBtn };
