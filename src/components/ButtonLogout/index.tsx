import { Button } from "./style";
import { FiLogOut } from "react-icons/fi";

const ButtonLogout = ({ ...rest }) => {
  return (
    <>
      <Button {...rest}>
        <FiLogOut />
      </Button>
    </>
  );
};
export default ButtonLogout;
