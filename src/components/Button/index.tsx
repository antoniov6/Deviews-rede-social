import { ReactNode } from "react";
import { ButtonComponent } from "./styles";

interface IButtonProps {
  children: ReactNode;
}

const Button = ({ children }: IButtonProps) => {
  return <ButtonComponent type="submit">{children}</ButtonComponent>;
};
export default Button;
