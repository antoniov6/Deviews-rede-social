import { useState } from "react";
import type { ReactPortal } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { Schema } from "../../validators/TechValidade";
import Plus from "../../assets/plus.png";

type ReactNode =
  | ReadonlyArray<ReactNode>
  | ReactPortal
  | boolean
  | null
  | undefined;

type WithChildren<T = {}> = T & { children?: ReactNode };

type IFormTechs = WithChildren<{
    tech: string;
    key: any;
    type: any;
    props: any;
    children: any;
}>;

const FormTechs = () => {
    const [newTech, setNewTech] = useState<IFormTechs[]>([])

    const { register, handleSubmit, formState: {errors} } = useForm<IFormTechs>({
        resolver: yupResolver(Schema)
    });

    function addTech(data: IFormTechs){
        setNewTech((prev) => [...prev, data]);
    }

    return(
        <>
            <form onSubmit={handleSubmit(addTech)}>
                <label htmlFor="tech">Tecnologia: </label>
                <input type="text" {...register("tech")} />
                <span> {errors.tech?.message} </span>
                <button type="submit"><img src={Plus} alt="" /></button>
            </form>
            <ul>
                {newTech.map((thisTech) => <li>{thisTech}</li>)}
            </ul>
        </>
    );
};

export default FormTechs;