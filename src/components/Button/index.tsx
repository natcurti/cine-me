import { ButtonStyled } from "./styled";

const Button = ({ children }: { children: React.ReactNode }) => {
  return <ButtonStyled>{children}</ButtonStyled>;
};

export default Button;
