import { FC } from "react";
import { StyledButton } from "./styled";

export enum BtnType {
  PRIMARY = "primary",
  SECONDARY = "secondary",
}

type ButtonProps = {
  type: BtnType;
  text: string;
  handle: () => void;
}

const Button: FC<ButtonProps> = ({type,text, handle}) => {

  return(
    <StyledButton
      $type={type}
      onClick={handle}
    >
      {text}
    </StyledButton>
  )

}

export default Button;