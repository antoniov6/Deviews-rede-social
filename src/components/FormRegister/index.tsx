import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Schema } from "../../validators/RegisterUser";
import { yupResolver } from "@hookform/resolvers/yup";
import { BsPlusLg } from "react-icons/bs";
import { FiAlertCircle } from "react-icons/fi";
import toast from "react-hot-toast";

import { Form } from "./styles";
import { AuthContext, UserDataRegister } from "../../providers/AuthContext";
import ListTech from "../ListTech";
import Button from "../Button";
import Span from "../FormSpan";
import { ToastError } from "../ToastStyle/styles";
import Logo from "../../assets/LogoDevil.png";

interface IFormRegister {
  name: string;
  username: string;
  email: string;
  password: string;
  passwordConfirm: string;
  bio: string;
}

const FormRegister = () => {
  const { signUp } = useContext(AuthContext);
  const [newTech, setNewTech] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState<string>("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormRegister>({
    resolver: yupResolver(Schema),
  });

  const addTech = (data: string) => {
    const tech = data.toLowerCase();
    const findTech = newTech.find((elem) => elem === tech);

    findTech && toast.error("Você já cadastrou essa tecnologia.", ToastError);
    tech === "" && toast.error("Adicione uma tecnologia válida.", ToastError);

    !findTech && tech !== "" && setNewTech((prev: any) => [...prev, data]);
  };

  const createData = (data: UserDataRegister) => {
    const newData = data;
    newData.techs = newTech;
    signUp(newData);
  };

  return (
    <Form onSubmit={handleSubmit(createData)}>
      <div className="container">
        <div className="container_logo">
          <h2>Cadastro</h2>
          <figure>
            <img src={Logo} alt="Logo Deviews" />
          </figure>
        </div>
        <div className="container_form">
          <div className="container_div_form">
            <div className="divForm form_left">
              <label htmlFor="name">Nome</label>
              <input
                className="entry"
                placeholder="Digite aqui o seu nome"
                type="text"
                {...register("name")}
              />
              <div className="div_span">
                {errors.name && (
                  <>
                    <span className="error">{errors.name.message}</span>
                    <FiAlertCircle />
                  </>
                )}
              </div>

              <label htmlFor="username">Nome de usuário</label>
              <input
                className="entry"
                placeholder="Username"
                type="text"
                {...register("username")}
              />
              <div className="div_span">
                {errors.username && (
                  <>
                    <span className="error">{errors.username.message}</span>
                    <FiAlertCircle />
                  </>
                )}
              </div>

              <label htmlFor="bio">Bio</label>
              <input
                className="entry"
                placeholder="Fale sobre você"
                type="text"
                {...register("bio")}
              />
              <div className="div_span">
                {errors.bio && (
                  <>
                    <span className="error">{errors.bio.message}</span>
                    <FiAlertCircle />
                  </>
                )}
              </div>

              <label htmlFor="email">Email</label>
              <input
                className="entry"
                placeholder="Digite aqui o seu email"
                type="email"
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
            <div className="divForm">
              <label htmlFor="password">Senha</label>
              <input
                className="entry"
                placeholder="Digite aqui a sua senha"
                type="password"
                {...register("password")}
              />
              <div className="div_span">
                {errors.password && (
                  <>
                    <span className="error">{errors.password.message}</span>
                    <FiAlertCircle />
                  </>
                )}
              </div>

              <label htmlFor="passwordConfirm">Confirmar Senha</label>
              <input
                className="entry"
                placeholder="Confirme sua senha"
                type="password"
                {...register("passwordConfirm")}
              />
              <div className="div_span">
                {errors.passwordConfirm && (
                  <>
                    <span className="error">
                      {errors.passwordConfirm.message}
                    </span>
                    <FiAlertCircle />
                  </>
                )}
              </div>

              <label htmlFor="techs">Tecnologias</label>
              <div className="entryDiv">
                <input
                  placeholder="Digite a tecnologia"
                  value={inputValue}
                  type="text"
                  onChange={(event) => setInputValue(event.target.value)}
                />
                <button
                  className="btn_add"
                  type="button"
                  onClick={() => addTech(inputValue)}
                >
                  <BsPlusLg className="iconReact" />
                </button>
              </div>

              <ul>
                {newTech.length > 0 &&
                  newTech.map((thisTech, index) => (
                    <ListTech
                      key={index}
                      thisTech={thisTech}
                      index={index}
                      newTech={newTech}
                      setNewTech={setNewTech}
                    />
                  ))}
              </ul>
            </div>
          </div>

          <Button>&lt;Cadastrar/&gt;</Button>
          <Span>Faça seu login.</Span>
        </div>
      </div>
    </Form>
  );
};

export default FormRegister;
