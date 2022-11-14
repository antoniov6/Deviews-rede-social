import FormRegister from "../../components/FormRegister";
import Header from "../../components/Header";
import { Main } from "./styles";
import Footer from "../../components/Footer";

const Register = () => {
  return (
    <>
      <Header />
      <Main>
        <div className="gradient">
          <FormRegister />
        </div>
      </Main>
      <Footer />
    </>
  );
};

export default Register;
