import { LiStyled } from "./styled";

const MenuItem = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => {
  return (
    <LiStyled>
      {children}
      {title}
    </LiStyled>
  );
};

export default MenuItem;
