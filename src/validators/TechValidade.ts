import * as yup from "yup";

export const Schema = yup.object().shape({
    tech: yup.string().required("Digite uma tecnologia"),
});