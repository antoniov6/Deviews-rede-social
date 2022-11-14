import fire from "../../assets/Fire.png";
import { Icon } from "./style";

const ButtonFire = ({ ...rest }) => {
  return (
    <>
      <Icon {...rest}>
        <img src={fire} alt="icon fire" />
      </Icon>
    </>
  );
};
export default ButtonFire;
