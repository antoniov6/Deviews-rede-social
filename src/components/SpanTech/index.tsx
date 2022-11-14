import { ReactNode } from "react";
import { SpanComponent } from "./styles";

interface ISpanTechProps {
  children: ReactNode;
}

const SpanTech = ({ children }: ISpanTechProps) => {
  return <SpanComponent>{children}</SpanComponent>;
};
export default SpanTech;