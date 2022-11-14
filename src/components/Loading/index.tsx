import loadingSvg from "../../assets/loading.svg";
import { Container } from "./style";

const Loading = () => {
  return (
    <Container>
      <img src={loadingSvg} alt="loading" />
    </Container>
  );
};

export default Loading;
