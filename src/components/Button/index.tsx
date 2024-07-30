import { ButtonStyledLarge, ButtonStyledSmall } from "./styled";

const Button = ({
  size,
  onClick,
  children,
}: {
  size: "lg" | "sm";
  onClick?: () => void;
  children: React.ReactNode;
}) => {
  if (size === "lg") {
    return <ButtonStyledLarge onClick={onClick}>{children}</ButtonStyledLarge>;
  }

  return <ButtonStyledSmall onClick={onClick}>{children}</ButtonStyledSmall>;
};

export default Button;
