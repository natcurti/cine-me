import {
  ContainerInputAndIcon,
  InputStyled,
  LabelStyled,
  SpanIcon,
} from "./styled";

interface IInput {
  name: string;
  label: string;
  children: React.ReactNode;
}

const Input = ({ name, label, children }: IInput) => {
  return (
    <>
      <LabelStyled htmlFor={name}>{label}</LabelStyled>
      <ContainerInputAndIcon>
        <InputStyled id={name} placeholder={label} />
        <SpanIcon>{children}</SpanIcon>
      </ContainerInputAndIcon>
    </>
  );
};

export default Input;
