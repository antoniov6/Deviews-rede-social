import styled from "styled-components";

export const ButtonComponent = styled.button`
  background: linear-gradient(var(--button-grad-red));
  color: var(--color-white-0);
  box-shadow: var(--box-shadow);

  width: fit-content;
  height: fit-content;
  padding: 0.625rem;
  border-radius: 0.25rem;

  font-size: 1rem;

  &:hover {
    background-color: rgba(211, 0, 0, 0.83);
  }
`;
