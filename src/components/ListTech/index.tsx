import { CgClose } from "react-icons/cg";
import { ListItem } from "./styles";

const ListTech = ({ thisTech, index, newTech, setNewTech }: any) => {
  const removeTech = (index: number) => {
    const filterTech = newTech.filter((tech: string, i: number) => i !== index);
    setNewTech(filterTech);
  };

  return (
    <ListItem>
      {thisTech}
      <button
        className="btn_close"
        type="button"
        onClick={() => removeTech(index)}
      >
        <CgClose className="iconClose" />
      </button>
    </ListItem>
  );
};

export default ListTech;
