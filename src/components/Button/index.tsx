import { ButtonStyledLarge, ButtonStyledSmall } from "./styled";

const Button = ({
  size,
  onClick,
  type,
  children,
}: {
  size: "lg" | "sm";
  onClick?: () => void;
  type?: "submit" | "button";
  children: React.ReactNode;
}) => {
  if (size === "lg") {
    return (
      <ButtonStyledLarge onClick={onClick} type={type}>
        {children}
      </ButtonStyledLarge>
    );
  }

  return (
    <ButtonStyledSmall onClick={onClick} type={type}>
      {children}
    </ButtonStyledSmall>
  );
};

export default Button;
