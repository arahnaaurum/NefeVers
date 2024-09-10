import styled from "styled-components";

export const StyledStart = styled.main`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;

  h2 {
    margin-bottom: 24px;
  }

  .note {
    margin-top: 48px;
    font-size: 14px;
    color: var(--secondary-color);
  }
`