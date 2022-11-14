import styled from "styled-components";

export const ListItem = styled.li`
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;

  width: fit-content;
  height: 2rem;

  padding-left: 0.75rem;
  padding-right: 0.75rem;

  outline: 0;

  margin-right: 1rem;
  margin-bottom: 1rem;

  border-radius: 0.3125rem;

  color: var(--color-white-0);
  box-shadow: var(--box-shadow);
  background-color: var(--color-grey-2);

  .btn_close {
    width: auto;

    background-color: transparent;
    .iconClose {
      border: none;

      color: var(--color-grey-0);
      background-color: var(--color-grey-2);
      transition: 0.3s;

      &:hover {
        color: var(--color-red-0);
      }
    }
  }
`;
