import FormLogin from "../../components/FormLogin";
import Header from "../../components/Header";
import Logo from "../../assets/LogoDevil.png";
import { ContainerLeft, ContainerMain, ContainerRight, Main } from "./styles";
import Footer from "../../components/Footer";

const Login = () => {
  return (
    <>
      <Header />
      <Main>
        <ContainerMain>
          <div className="gradient">
            <ContainerLeft>
              <p>A rede dos devs</p>
            </ContainerLeft>
            <ContainerRight>
              <div className="container_logo">
                <h2>Login</h2>
                <figure>
                  <img src={Logo} alt="Logo Deviews" />
                </figure>
              </div>
              <FormLogin />
            </ContainerRight>
          </div>
        </ContainerMain>
      </Main>
      <Footer />
    </>
  );
};

export default Login;
