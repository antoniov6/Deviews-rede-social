import styled from "styled-components";

export const Container = styled.div`
  height: 1.5625rem;

  display: flex;
  align-items: center;

  border-radius: 50em;
  border: 0.125rem solid transparent;
  background-color: transparent;
  background: linear-gradient(var(--color-grey-4), var(--color-grey-4))
      padding-box,
    linear-gradient(to right, rgba(211, 0, 0, 0.83), rgba(0, 0, 0, 0.25))
      border-box;

  input {
    width: 80%;
    height: 90%;

    font-size: 0.875rem;
    outline: 0;
    padding-left: 1.25rem;

    border-radius: 3.125rem;
    background-color: transparent;
    color: var(--color-white-0);
  }

  button {
    background-color: transparent;
    border: none;
    height: 100%;

    svg {
      color: var(--color-red-0);
      width: 3.125rem;
      height: 80%;
      transition: 0.5s;

      &:hover {
        color: var(--color-white-0);
      }
    }
  }
`;
