import styled from "styled-components";

export const HeaderComponent = styled.header`
  display: flex;
  justify-content: center;

  width: 100vw;
  height: 68px;

  background-color: var(--color-black-0);
  box-shadow: var(--box-shadow);

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 90%;
    height: 100%;

    figure {
      width: 12.5rem;

      img {
        width: 100%;
      }
    }
    .logoMobile {
      width: 50px;
    }

    .logoMobilePublic {
      width: 10.625rem;
    }
  }
`;
