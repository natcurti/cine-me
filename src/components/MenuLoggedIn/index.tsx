import { FaUserCircle } from "react-icons/fa";
import { ButtonMenu } from "./styled";

const MenuLoggedIn = () => {
  return (
    <ButtonMenu>
      <FaUserCircle size={30} />
    </ButtonMenu>
  );
};

export default MenuLoggedIn;
