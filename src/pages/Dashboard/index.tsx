import { useContext, useEffect, useState } from "react";
import FormPost from "../../components/FormPost";
import Header from "../../components/Header";
import PostList from "../../components/PostList";
import Loading from "../../components/Loading";
import SearchInput from "../../components/SearchInput";
import UserOptions from "../../components/UserOptions";
import { AuthContext } from "../../providers/AuthContext";
import { Container, ContainerMain } from "./styles";
import { PostContext } from "../../providers/PostContext";

const Dashboard = () => {
  const { loading } = useContext(AuthContext);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);

  const updateMedia = () => {
    setIsDesktop(window.innerWidth >= 768);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      {isDesktop ? (
        <>
          <Header />
          <Container>
            <ContainerMain>
              <aside className="container_info_user">
                <UserOptions />
              </aside>
              <main className="container_posts">
                <FormPost />
                <PostList />
              </main>
              <aside className="container_search">
                <SearchInput />
              </aside>
            </ContainerMain>
          </Container>
        </>
      ) : (
        <>
          <Header />
          <Container>
            <ContainerMain>
              <aside className="container_info_user">
                <UserOptions />
              </aside>
              <aside className="container_search">
                <SearchInput />
              </aside>
              <main className="container_posts">
                <FormPost />
                <PostList />
              </main>
            </ContainerMain>
          </Container>
        </>
      )}
    </>
  );
};

export default Dashboard;
