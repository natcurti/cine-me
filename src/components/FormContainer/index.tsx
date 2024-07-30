import { FormStyled, HeaderForm } from "./styled";

const FormContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <FormStyled>
      <HeaderForm>
        <img src="logo-cine-me.png" alt="Logo Cine.me" />
      </HeaderForm>
      {children}
    </FormStyled>
  );
};

export default FormContainer;
