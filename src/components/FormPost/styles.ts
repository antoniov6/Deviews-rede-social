import styled from "styled-components";

export const ContainerForm = styled.div`
  padding-bottom: 1.875rem;
  color: var(--color-white-4);
  background: linear-gradient(
      to right,
      rgba(211, 0, 0, 0.83),
      rgba(0, 0, 0, 0.25)
    )
    left bottom var(--color-grey-4) no-repeat;
  background-size: 100% 1px;
`;

export const Form = styled.form`
  background-color: var(--color-grey-4);
  padding: 0.625rem;
  border-width: 0.125rem;
  border-style: solid;
  border-image: linear-gradient(
      to right,
      rgba(211, 0, 0, 0.83),
      rgba(0, 0, 0, 0.25)
    )
    10;

  .container_post {
    display: flex;
    flex-direction: column;

    textarea {
      width: 100%;
      height: 5rem;
      margin-bottom: 0.625rem;

      font-size: 1rem;
      outline: none;
      resize: none;

      color: var(--color-white-0);
      background-color: var(--color-grey-4);
    }

    textarea:focus {
      outline: none;
    }

    .container_buttons {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      align-items: flex-end;
      gap: 10px;

      @media screen and (min-width: 425px) {
        flex-direction: initial;
      }

      .container_add_img {
        display: flex;
        flex-direction: row-reverse;
        align-items: center;
        min-height: 1.875rem;
        border-radius: 0.3em;
        padding: 0 2px;

        background: linear-gradient(var(--button-grad-red));

        box-shadow: var(--box-shadow);

        button {
          align-items: center;
          display: flex;
          justify-content: center;
          width: 40px;
          min-height: 1.875rem;
          padding: 5px;

          border-radius: 0.25rem;
          background-color: transparent;
          color: var(--color-white-0);

          &:hover {
            background-color: rgba(211, 0, 0, 0.83);
          }

          svg {
            height: 60%;
            width: 70%;
          }

          @media screen and (min-width: 425px) {
            min-width: 40px;
          }
        }

        input {
          min-height: 28px;
          width: 100%;
          height: 90%;
          background-color: var(--color-grey-4);

          text-align: center;
          font-size: 0.875rem;
          outline: 0;

          border-radius: 4px;
          color: var(--color-white-0);
        }

        @media screen and (min-width: 425px) {
          flex-direction: row;
        }
      }
    }

    button {
      align-self: flex-end;
      min-height: 1.875rem;
      width: 3.75rem;

      @media screen and (min-width: 425px) {
        padding: 0 30px;
        width: auto;
      }
    }
  }
`;
