import { useContext } from "react";
import { PostContext } from "../../providers/PostContext";
import Post from "../Post";
import { Container } from "./style";

const PostList = () => {
  const { posts } = useContext(PostContext);

  return (
    <>
      <Container>
        {posts.map((post, index) => (
          <Post
            key={index}
            id={post.id}
            content={post.content}
            userInfo={post.userInfo}
            date={post.date}
            img={post.img}
            fires={post.fires}
          />
        ))}
      </Container>
    </>
  );
};
export default PostList;
