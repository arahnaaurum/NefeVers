import { FC } from "react";
import { StyledImage } from "./styled";

type ImageProps = {
  src: string;
  alt?: string;
}

const Image:FC<ImageProps> = ({src, alt}) => {
  return <StyledImage src={src} alt={alt || "question picture"}/>
}

export default Image;