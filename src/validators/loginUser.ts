import * as yup from "yup";

const schema = yup.object({
  email: yup.string().required("Campo obrigatório").email("Deve ser um email"),
  password: yup.string().required("Campo obrigatório"),
});

export default schema;
