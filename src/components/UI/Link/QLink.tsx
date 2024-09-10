import { FC } from "react";
import { StyledLink } from "./styled";

export enum QLinkType {
  PRIMARY = "primary",
  SECONDARY = "secondary",
}

type QLinkProps = {
  path: string;
  type: QLinkType;
  text: string;
}

const QLink: FC<QLinkProps> = ({path, type, text }) => {
  return(
    <StyledLink
      to={path}
      $type={type}
    >
      {text}
    </StyledLink>
  )

}

export default QLink;