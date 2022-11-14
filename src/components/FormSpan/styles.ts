import styled from "styled-components";

export const P = styled.p`
  display: flex;
  flex-direction: column;
  gap: 0.3125rem;

  font-size: 0.75rem;
  text-align: center;

  color: var(--color-grey-0);

  a {
    font-size: 0.75rem;

    position: relative;

    align-self: center;
    padding: 0.125rem 0rem 0.3125rem 0rem;

    transition: 0.3s;
    color: var(--color-white-0);

    &:after {
      content: "";

      bottom: 0;
      left: 50%;

      height: 0.125rem;
      width: 0;

      position: absolute;

      background: linear-gradient(
        to right,
        rgba(211, 0, 0, 0.83),
        rgba(0, 0, 0, 0.25)
      );
      transition: width 0.5s ease 0s, left 0.5s ease 0s;
    }

    &:hover {
      color: var(--color-white-0);
      scale: 1.1;
    }
    &:hover:after {
      width: 100%;

      left: 0;
    }
  }

  .link_login {
    display: flex;
    justify-content: center;
    gap: 0.3125rem;
  }
`;
