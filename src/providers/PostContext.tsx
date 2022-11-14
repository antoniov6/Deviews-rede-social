import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import api from "../services/api";
import { AuthContext } from "./AuthContext";

interface PostProps {
  children: ReactNode;
}

interface DataPost {
  content: string;
  img: string;
  firePost: number;
  userId: number;
}

interface PostId {
  postId: number;
}

interface DataAnswers {
  content: string;
  postId: number;
}

interface AnswersId {
  answersId: number;
}

interface FireDataPost {
  userId: number;
  postId: number;
}

interface FireDataAnswers {
  count: number;
  answersId: number;
}

interface IuserInfo {
  img: string;
  name: string;
  username: string;
}

export interface IFireData {
  userId: number;
  postId: number;
  id: number;
}

export interface PostsData {
  content: string;
  date: string;
  id: number;
  img: string;
  userInfo: IuserInfo;
  fires: IFireData[];
}

interface PostProvidersData {
  newPost: (postData: DataPost) => void;
  deletePost: (idPost: PostId) => void;
  editPost: (idPost: PostId, answersData: DataPost) => void;
  newAnswers: (idPost: PostId, answersData: DataAnswers) => void;
  newFirePost: (fireData: FireDataPost) => void;
  newFireAnswers: (idPost: PostId, fireData: FireDataAnswers) => void;
  searchPost: (data: string) => void;
  getUserById: (id: number) => void;
  posts: PostsData[];
}

export const PostContext = createContext<PostProvidersData>(
  {} as PostProvidersData
);

const PostProvider = ({ children }: PostProps) => {
  const { setLoading, isToken } = useContext(AuthContext);
  const [posts, setPosts] = useState<PostsData[]>([]);
  const [reloadPosts, setReloadPosts] = useState(false);
  useEffect(() => {
    const loadPosts = async () => {
      if (isToken) {
        try {
          await api
            .get("/posts?_embed=fires", {
              headers: { Authorization: `Bearer ${isToken}` },
            })
            .then((res) => {
              const orderedPosts = res.data.reverse();
              console.log(res.data);
              setPosts(orderedPosts);
              setLoading(false);
            });
        } catch (err) {
          console.log(err);
        }
      }
    };
    loadPosts();
  }, [isToken]);

  const newPost = (data: DataPost) => {
    api
      .post("/posts", data)
      .then((response) => {})
      .catch((err) => {
        console.log(err);
      });
  };

  const deletePost = (postId: PostId) => {
    api
      .delete(`/posts/${postId}`)
      .then((response) => {})
      .catch((err) => console.log(err));
  };

  const editPost = (postId: PostId, data: DataPost) => {
    api
      .patch(`/posts/${postId}`, data)
      .then((response) => {})
      .catch((err) => console.log(err));
  };

  const newAnswers = (postId: PostId, data: DataAnswers) => {
    api
      .patch(`/posts/${postId}`, data)
      .then((response) => {})
      .catch((err) => console.log(err));
  };

  const newFirePost = (data: FireDataPost) => {
    api
      .post("/posts/fires", data)
      .then((response) => {
        console.log(response);
      })
      .catch((err) => console.log(err));
  };

  const newFireAnswers = (postId: PostId, data: FireDataAnswers) => {
    api
      .patch(`/posts/${postId}`, data)
      .then((response) => {})
      .catch((err) => err);
  };
  const searchPost = (data: string) => {
    api
      .get(`/posts?q=${data}`)
      .then((response) => {})
      .catch((err) => console.log(err));
  };

  const getUserById = (id: number) => {
    api
      .get(`/users/${id}`)
      .then((response) => {
        console.log(response);
      })
      .catch((err) => console.log(err));
  };

  return (
    <PostContext.Provider
      value={{
        newPost,
        deletePost,
        editPost,
        newAnswers,
        newFirePost,
        newFireAnswers,
        searchPost,
        posts,
        getUserById,
      }}
    >
      {children}
    </PostContext.Provider>
  );
};

export default PostProvider;
