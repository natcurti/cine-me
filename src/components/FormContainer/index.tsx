import { FormStyled, HeaderForm } from "./styled";

interface IFormContainer {
  onSubmit: () => void;
  children: React.ReactNode;
}

const FormContainer = ({ onSubmit, children }: IFormContainer) => {
  return (
    <FormStyled onSubmit={onSubmit} noValidate>
      <HeaderForm>
        <img src="logo-cine-me.png" alt="Logo Cine.me" />
      </HeaderForm>
      {children}
    </FormStyled>
  );
};

export default FormContainer;
