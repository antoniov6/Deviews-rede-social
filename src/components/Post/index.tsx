import { useContext } from "react";
import { PostContext, PostsData } from "../../providers/PostContext";
import ButtonFire from "../ButtonFire";
import { Container } from "./style";

const Post = ({ content, img, date, userInfo, fires, id }: PostsData) => {
  const loggedId = localStorage.getItem("@deviews:id");

  const { newFirePost } = useContext(PostContext);

  return (
    <Container>
      <div>
        <img src={userInfo.img} alt="imagem usuário" />
        <h2>{userInfo.name}</h2>
        <p>{`@${userInfo.username}`}</p>
      </div>
      <p className="content">{content}</p>
      {img && <img src={img} alt="imagem post" />}
      <div className="bottom_info">
        <span>{date}</span>
        <div>
          <ButtonFire
            onClick={() => {
              const data = { userId: Number(loggedId), postId: id };
              newFirePost(data);
              console.log("oi");
            }}
          />
          {fires.length > 0 && <p>{fires.length}</p>}
        </div>
      </div>
    </Container>
  );
};
export default Post;
