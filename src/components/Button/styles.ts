import styled from "styled-components";

export const ButtonComponent = styled.button`
  width: 100%;
  min-height: 3rem;
  border-radius: 0.25rem;

  font-size: 1rem;
  font-weight: 600;

  color: var(--color-white-0);
  box-shadow: var(--box-shadow);
  background: linear-gradient(var(--button-grad-red));
  transition: 0.5s;

  &:hover {
    background-color: rgba(211, 0, 0, 0.83);
  }

  @media screen and (min-width: 425px) {
    width: 18.188rem;
  }
`;
