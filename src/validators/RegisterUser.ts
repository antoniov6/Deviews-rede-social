import * as yup from "yup";

const testPassword = new RegExp(
  "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$"
);

export const Schema = yup.object().shape({
  name: yup.string().required("Campo obrigatório"),
  username: yup.string().required("Campo obrigatório"),
  bio: yup.string().required("Campo obrigatório"),
  email: yup.string().required("Campo obrigatório").email("Deve ser um email"),
  password: yup
    .string()
    .required("Campo obrigatório")
    .matches(
      testPassword,
      "Deve conter, no mínimo 8 dígitos, pelo menos 1 letra maíuscula, 1 letra minúscula, 1 caractere especial."
    ),
  passwordConfirm: yup
    .string()
    .required("Campo obrigatório")
    .oneOf([yup.ref("password"), null], "Confirmação deve ser igual a senha"),
});
