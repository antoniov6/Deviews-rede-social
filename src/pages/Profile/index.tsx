import FormPost from "../../components/FormPost";
import UserOptions from "../../components/UserOptions";
import { BiPencil } from "react-icons/bi";
import ButtonEdit from "../../components/ButtonEdit";

const Profile = () => {
  return (
    <>
      <aside>
        <UserOptions />
        <ButtonEdit><BiPencil/></ButtonEdit>
      </aside>
      <aside>
        {/* Pesquisa */}
      </aside>
      <main>
        <FormPost />
        {/* Posts com scroll infinito */}
      </main>
    </>
  );
}

export default Profile;