import styled from "styled-components";

export const StyledImage = styled.img`
  height: 500px;
  max-width: 500px;
  object-fit: fill;
  border-radius: 4px;
  @media (max-width: 450px) {
    height: unset;
    max-width: 250px;
  }
`