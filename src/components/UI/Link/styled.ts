import { Link } from "react-router-dom";
import styled from "styled-components";
import { QLinkType } from "./QLink";

export const StyledLink = styled(Link)<{$type: QLinkType }> `
  text-align: center;
  background-color: ${({$type}) => $type === QLinkType.PRIMARY? 'var(--primary-color)' : 'var(--secondary-color)'};
  color: var(--light);
  font-size: ${({$type}) => $type === QLinkType.SECONDARY && "20px"};
  padding: ${({$type}) => $type === QLinkType.PRIMARY? "12px 24px" : "8px"};
  border-radius: ${({$type}) => $type === QLinkType.PRIMARY? "4px" : "24px"};;
  transition: 0.3s;
  &:hover {
    transform: scale(0.9);
    color: ${({$type}) => $type === QLinkType.SECONDARY && 'var(--secondary-color)'};
  }
`