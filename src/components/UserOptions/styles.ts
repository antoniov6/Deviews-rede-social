import styled from "styled-components";

export const ContainerName = styled.div`
  display: flex;
  align-items: center;
  gap: 0.3125rem;

  padding-bottom: 0.625rem;
  color: var(--color-white-4);
  background: linear-gradient(
      to right,
      rgba(211, 0, 0, 0.83),
      rgba(0, 0, 0, 0.25)
    )
    left bottom var(--color-grey-4) no-repeat;
  background-size: 100% 1px;
  figure {
    z-index: 10;
    overflow: hidden;
    border-radius: 50%;
    width: 3.75rem;
    height: 3.75rem;
  }
  figure > img {
    height: 3.75rem;
    z-index: 9;
  }

  span {
    font-size: 0.75rem;
    color: var(--color-grey-0);
  }

  h3 {
    color: var(--color-white-0);
  }
`;

export const ContainerBio = styled.div`
  display: flex;
  gap: 0.625rem;
  align-items: center;

  h3,
  p {
    color: var(--color-white-0);
    font-size: 0.875rem;
  }
`;

export const ContainerTechs = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  h3 {
    color: var(--color-white-0);
    font-size: 0.875rem;
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    width: 11.375rem;
    height: 4.375rem;
    overflow: auto;
    gap: 0.625rem;
  }
`;
