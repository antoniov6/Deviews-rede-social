import { useForm } from "react-hook-form";
import { useContext, useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";

import { ContainerPassword, Form } from "./styles";
import Button from "../Button";
import schema from "../../validators/loginUser";
import { IoEyeOffOutline } from "react-icons/io5";
import { GiBleedingEye } from "react-icons/gi";
import { AuthContext } from "../../providers/AuthContext";
import Span from "../FormSpan";
import { FiAlertCircle } from "react-icons/fi";

interface IUserLogin {
  email: string;
  password: string;
}

const FormLogin = () => {
  const { signIn } = useContext(AuthContext);
  const [isView, setIsView] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUserLogin>({ resolver: yupResolver(schema) });

  return (
    <Form onSubmit={handleSubmit(signIn)}>
      <label htmlFor="email">Email</label>
      <div className="div_input">
        <input
          type="text"
          placeholder="Digite aqui seu email"
          {...register("email")}
        />
        <div className="div_span">
          {errors.email && (
            <>
              <span className="error">{errors.email.message}</span>
              <FiAlertCircle />
            </>
          )}
        </div>
      </div>

      <label htmlFor="password">Senha</label>
      <div className="div_input">
        {isView ? (
          <ContainerPassword>
            <input
              type="text"
              placeholder="Digite aqui sua senha"
              {...register("password")}
            />
            <button
              className="message_password"
              type="button"
              onClick={() => setIsView(!isView)}
            >
              <span>Ocultar senha</span>
              <GiBleedingEye className="eyeOpen" />
            </button>
          </ContainerPassword>
        ) : (
          <ContainerPassword>
            <input
              type="password"
              placeholder="Digite aqui sua senha"
              {...register("password")}
            />
            <button
              className="message_password"
              type="button"
              onClick={() => setIsView(!isView)}
            >
              <span>Mostrar senha</span>
              <IoEyeOffOutline />
            </button>
          </ContainerPassword>
        )}
        <div className="div_span">
          {errors.password && (
            <>
              <span className="error">{errors.password.message}</span>
              <FiAlertCircle />
            </>
          )}
        </div>
      </div>

      <Button>&lt;Login/&gt;</Button>
      <Span>Cadastre-se.</Span>
    </Form>
  );
};

export default FormLogin;
