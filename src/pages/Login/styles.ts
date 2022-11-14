import styled from "styled-components";

export const Main = styled.main`
  height: 85vh;
  width: 100vw;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ContainerMain = styled.div`
  width: 90%;
  height: 90%;

  align-items: center;
  padding: 0.125rem;

  border-radius: 0.25rem;
  background: linear-gradient(
    100deg,
    rgba(211, 0, 0, 0.83),
    rgba(0, 0, 0, 0.25)
  );

  .gradient {
    width: 100%;
    height: 100%;

    display: flex;
    align-items: center;

    border-radius: 0.25rem;
    background-color: var(--color-grey-3);
  }

  @media screen and (min-width: 425px) {
    width: 24.25rem;
  }

  @media screen and (min-width: 768px) {
    width: 90%;

    flex-direction: inherit;
  }

  @media screen and (min-width: 1024px) {
    width: 70%;
  }
`;

export const ContainerLeft = styled.div`
  display: none;

  p {
    color: var(--color-white-0);
  }

  @media screen and (min-width: 768px) {
    width: 50%;
    height: 90%;

    display: flex;
    justify-content: center;
    align-items: center;

    border-right: 0.125rem;
    border-style: solid;
    border-image: linear-gradient(
        to bottom,
        rgba(211, 0, 0, 0.83),
        rgba(0, 0, 0, 0.25)
      )
      1 100%;
  }
`;

export const ContainerRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;

  width: 100%;
  height: 100%;

  .container_logo {
    display: flex;
    margin: auto;
    align-items: center;
    justify-content: space-between;

    width: 81.9%;

    h2 {
      margin: 0;
      width: 5.625rem;
      padding-bottom: 0.625rem;

      font-size: 2rem;
      font-weight: 500;

      color: var(--color-white-0);
      background: linear-gradient(
          to right,
          rgba(211, 0, 0, 0.83),
          rgba(0, 0, 0, 0.25)
        )
        left bottom var(--color-grey-3) no-repeat;
      background-size: 100% 1px;
    }

    img {
      width: 3.125rem;
    }
  }

  @media screen and (min-width: 425px) {
    .container_logo {
      width: 18.1875rem;
    }
  }

  @media screen and (min-width: 768px) {
    width: 50%;

    .container_logo {
      h2 {
        width: 100%;
      }

      img {
        display: none;
      }
    }
  }
`;
