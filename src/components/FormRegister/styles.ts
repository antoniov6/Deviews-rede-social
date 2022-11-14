import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  gap: 1.25rem;

  width: 100%;

  padding-bottom: 1.25rem;
  border-radius: 0.25rem;

  background-color: var(--color-grey-3);

  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;

    width: 100%;

    .container_form {
      display: flex;
      align-items: center;
      flex-direction: column;
      gap: 1.25rem;
    }

    .container_div_form {
      width: 90%;

      margin-bottom: 1.25rem;

      @media screen and (min-width: 768px) {
        display: flex;
      }
    }

    .container_logo {
      display: flex;
      align-items: center;
      justify-content: space-between;

      width: 90%;

      margin: 1.75rem auto;

      h2 {
        width: 8.75rem;

        margin: 0;
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

      @media screen and (min-width: 425px) {
        width: 18.1875rem;
      }

      @media screen and (min-width: 768px) {
        width: 50%;

        margin: 1.75rem;

        figure {
          display: none;
        }

        h2 {
          width: 18.1875rem;
          margin: auto;
        }
      }
    }

    .divForm {
      display: flex;
      flex-flow: column;
      gap: 0.625rem;
      margin: 0 auto;

      width: 100%;

      label {
        padding-top: 1rem;
        padding-bottom: 1rem;
      }
      .entry {
        width: 90%;
        height: 3rem;

        padding-left: 1.3125rem;
        outline: 0;

        border-radius: 0.5rem;
        border: 2px solid transparent;

        color: var(--color-white-0);
        box-shadow: var(--box-shadow);
        background-color: var(--color-grey-2);
        transition: 0.3s;

        &:focus {
          border: 2px solid var(--color-grey-1);
        }
      }
      .entryDiv {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 0 auto;

        width: 90%;

        position: relative;

        input {
          width: 100%;
          height: 3rem;

          padding-left: 1.3125rem;
          outline: 0;
          border: 2px solid transparent;
          border-radius: 0.5rem;
          border: 2px solid transparent;

          box-shadow: var(--box-shadow);
          background-color: var(--color-grey-2);
          color: var(--color-white-0);
          transition: 0.3s;

          &:focus {
            border-color: var(--color-grey-1);
          }
        }

        .btn_add {
          display: flex;
          align-items: center;

          width: auto;
          height: 100%;

          position: absolute;

          right: 10px;

          background-color: transparent;

          svg {
            color: var(--color-grey-0);

            width: 1.125rem;
            height: 1.125rem;

            transition: 0.3s;

            &:hover {
              color: var(--color-white-0);
            }
          }

          .eyeOpen {
            width: 1.25rem;
            height: 1.25rem;
          }
        }

        @media screen and (min-width: 425px) {
          width: 16.875rem;
        }
      }

      .div_span {
        display: flex;
        align-items: end;
        gap: 0.3125rem;

        width: 90%;

        font-size: 0.75rem;
        line-height: 0.9375rem;

        color: var(--color-grey-0);

        span {
          text-align: justify;
        }

        svg {
          min-width: 0.9375rem;
          min-height: 0.9375rem;

          color: var(--color-red-0);
        }
      }

      ul {
        display: flex;
        flex-flow: row wrap;
        justify-content: left;
        margin-top: 1rem;

        text-align: left;

        max-height: 6rem;

        overflow: auto;

        .iconReact {
          border: none;

          color: var(--color-grey-0);
          background-color: var(--color-grey-2);
        }
      }

      p {
        display: flex;
        flex-direction: column;
        gap: 0.3125rem;

        font-size: 0.75rem;
        text-align: left;

        height: 2rem;

        color: var(--color-grey-0);

        a {
          font-size: 0.75rem;

          color: var(--color-red-0);
        }
      }

      @media screen and (min-width: 425px) {
        align-items: center;

        label,
        .div_span,
        ul {
          width: 18.1875rem;
        }

        .entry {
          width: 16.875rem;
        }
      }
    }
  }

  button {
    width: 90%;
  }

  @media screen and (min-width: 26.5625rem) {
    button {
      width: 18.188rem;
    }
  }

  @media screen and (min-width: 64rem) {
    .form_left {
      border-right: 0.125rem;
      border-style: solid;
      border-image: linear-gradient(
          to bottom,
          rgba(211, 0, 0, 0.83),
          rgba(0, 0, 0, 0.25)
        )
        1 100%;
    }
  }
`;
