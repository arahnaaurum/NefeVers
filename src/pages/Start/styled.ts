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
    margin: 48px 0;
    font-size: 14px;
    color: var(--secondary-color);
    text-align: justify;
    @media (max-width: 450px) {
      margin-top: 36px 0;
    }
    label {
      color: var(--primary-color);
      font-weight: 600;
      display: flex;
      align-items: center;
      gap: 8px;
    }
  }

  .agreement {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
`