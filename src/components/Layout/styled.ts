import styled from "styled-components";

export const Wrapper = styled.div `
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-image: url("/bg.jpg");
  background-size: contain;
  & > div {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const Header = styled.header `
  position: relative;
  width: 100%;
  flex-grow: 0;
  padding: 24px;
  text-align: center;
  h1 {
    font-size: 36px;
    font-weight: 600;
    color: var(--light);
  }
`;

export const Popup = styled.div`
  position: absolute;
  left: 50%;
  background-color: var(--light);;
  padding: 16px;
  border-radius: 4px;
  box-shadow: 0 0.125rem 0.5rem rgba(0, 0, 0, .3), 0 0.0625rem 0.125rem rgba(0, 0, 0, .2);

  &::before {
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    bottom: 100%;
    left: 1.5em;
    border: .75rem solid transparent;
    border-top: none;
    border-bottom-color: var(--light);
    filter: drop-shadow(0 -0.0625rem 0.0625rem rgba(0, 0, 0, .1));
  }
`

export const Footer = styled.footer `
  padding: 16px 36px;
  background: linear-gradient(transparent, var(--light));
  color: var(--dark);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
  gap: 8px;
  
  span {
    color: var(--bg-color);
  }

  .links {
    display: flex;
    margin: 0;
    padding: 0;
    gap: 16px;
  }

  .link {
    opacity: 0.7;
    transition: 0.3s ease-in-out;
    &__icon {
      border-radius: 24px;
    }
  }
  .link:hover {
    transform: scale(1.3);
    opacity: 1;
  }
`;

export const Container = styled.div `
  height: 650px;
  width: 50%;
  max-width: 600px;
  min-width: 320px;
  overflow-y: auto;
  overflow-x: hidden;
  flex-grow: 1;
  padding: 24px;
  border-radius: 4px;
  background-color: var(--light);
  &::-webkit-scrollbar {
    width: 8px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: var(--light);
    border-radius: 4px;
  }
`;