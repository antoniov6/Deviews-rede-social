import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { P } from "./styles";

interface ISpanProps {
  children: ReactNode;
}

const Span = ({ children }: ISpanProps) => {
  return (
    <>
      {children === "Cadastre-se." ? (
        <P>
          Ainda não possui uma conta?
          <Link to={"/register"}>{children}</Link>
        </P>
      ) : (
        <P>
          Já possui uma conta?
          <div className="link_login">
            <Link to={"/login"}>{children}</Link>
          </div>
        </P>
      )}
    </>
  );
};

export default Span;
