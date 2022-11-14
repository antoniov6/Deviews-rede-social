import styled from "styled-components";

export const Button = styled.button`
  width: 36px;
  height: 32px;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 2.1875rem;
  border-radius: 0.25rem;

  color: var(--color-white-0);
  box-shadow: var(--box-shadow);
  background: linear-gradient(var(--button-grad-red));
  transition: 0.5s;

  &:hover {
    background-color: rgba(211, 0, 0, 0.83);
  }

  svg {
    width: 80%;
    height: 80%;
  }
`;
