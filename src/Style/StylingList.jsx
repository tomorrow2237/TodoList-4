import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const StyledList = styled.div`
position: absolute;
top: 57%;
left: 33%;
padding: 10px;
margin: 10px;
`;

const StyledTaskItem = styled.div`
  display: flex;
  align-items: center;
  margin: 5px;
`;


const StyledTaskText = styled.p`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 28px;
  margin: 2px;
  padding: 6px;
`;

const StyledIcon = styled(FontAwesomeIcon)`
  font-size: 24px;
  color:#FF4742;
`;

export default StyledList;
export {StyledTaskItem, StyledTaskText, StyledIcon}