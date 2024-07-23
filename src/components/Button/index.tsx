import { ButtonStyledLarge, ButtonStyledSmall } from "./styled";

const Button = ({
  size,
  children,
}: {
  size: "lg" | "sm";
  children: React.ReactNode;
}) => {
  if (size === "lg") {
    return <ButtonStyledLarge>{children}</ButtonStyledLarge>;
  }

  return <ButtonStyledSmall>{children}</ButtonStyledSmall>;
};

export default Button;
