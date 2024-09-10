import styled from "styled-components";

export const StyledQuestion = styled.main`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  h2 {
    margin-bottom: 16px;
    span {
      font-weight: 400;
      font-size: 20px;
    }
  }

  .navigation {
    display: flex;
    justify-content: space-between;
    padding: 16px 0;
  }
`

export const Answers = styled.ul`
  margin: 0;
  padding: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 36px;
  figure {
    margin: 0;
    padding: 0;
    text-align: center;
  }
  .checked {
    img {
      border: 3px solid var(--primary-color);
    }
    color: var(--primary-color);
    font-weight: 600;
  }
`