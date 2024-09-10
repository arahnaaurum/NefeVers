import { Link } from "react-router-dom";
import styled from "styled-components";
import { QLinkType } from "./QLink";

export const StyledLink = styled(Link)<{$type: QLinkType }> `
  background-color: ${({$type}) => $type === QLinkType.PRIMARY? 'var(--primary-color)' : 'transparent'};
  color: ${({$type}) => $type === QLinkType.PRIMARY? 'var(--light)' : 'var(--primary-color)'};
  font-size: ${({$type}) => $type === QLinkType.SECONDARY && "20px"};
  padding: ${({$type}) => $type === QLinkType.PRIMARY && "12px 24px"};
  border-radius: 4px;
  transition: 0.3s;
  &:hover {
    transform: scale(0.9);
    color: ${({$type}) => $type === QLinkType.SECONDARY && 'var(--secondary-color)'};
  }
`