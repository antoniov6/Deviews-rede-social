import Button from "../Button";
import * as yup from "yup";
import { ContainerForm, Form } from "./styles";
import { MdOutlineAddPhotoAlternate } from "react-icons/md";
import { motion } from "framer-motion";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { PostContext } from "../../providers/PostContext";

interface IPostUser {
  content: string;
}

function FormPost() {
  const { newPost } = useContext(PostContext);
  const [textArea, setTextArea] = useState<string>("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IPostUser>({});

  const createNewData = (data: any) => {
    const userId = localStorage.getItem("@deviews:id");
    const newData = data;
    newData.userId = userId;
    newPost(newData);
  };

  const [isOpen, setIsOpen] = useState(false);

  const parent = {
    closed: { width: 0 },
    open: { width: 200 },
  };

  return (
    <>
      <ContainerForm>
        <Form onSubmit={handleSubmit(createNewData)}>
          <div className="container_post">
            <textarea
              placeholder="Escreva o seu post..."
              value={textArea}
              {...register("content")}
              onChange={(event) => setTextArea(event.target.value)}
            />
            <div className="container_buttons">
              <div className="container_add_img">
                <button type="button" onClick={() => setIsOpen(!isOpen)}>
                  <MdOutlineAddPhotoAlternate />
                </button>
                <motion.input
                  type="text"
                  placeholder="Adicione a url da imagem"
                  variants={parent}
                  animate={isOpen ? "open" : "closed"}
                  transition={{
                    type: "spring",
                    damping: 10,
                    mass: 0.2,
                    stiffness: 80,
                  }}
                />
              </div>
              <Button>.Post</Button>
            </div>
          </div>
        </Form>
      </ContainerForm>
      {console.log(textArea)}
    </>
  );
}

export default FormPost;
