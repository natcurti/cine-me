import FormContainer from "src/components/FormContainer";
import {
  ContainerInputs,
  ContainerName,
  MainRegister,
  TypographyContainer,
} from "./styled";
import Typography from "src/components/Typography";
import Input from "src/components/Input";
import { FaRegUser } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import Button from "src/components/Button";

const Register = () => {
  const iconProps = {
    fill: "#1884F7",
    size: 20,
  };

  return (
    <MainRegister>
      <FormContainer>
        <TypographyContainer>
          <Typography element="h1" variant="strong">
            Assista onde quiser. Cancele quando quiser.
          </Typography>
          <Typography element="h2" variant="p">
            Preencha os dados abaixo para se cadastrar.
          </Typography>
        </TypographyContainer>
        <ContainerInputs>
          <ContainerName>
            <Input label="Nome" name="name">
              <FaRegUser {...iconProps} />
            </Input>
            <Input label="Sobrenome" name="lastname">
              <FaRegUser {...iconProps} />
            </Input>
          </ContainerName>
          <Input label="Email" name="email">
            <MdOutlineEmail {...iconProps} />
          </Input>
          <Input label="Senha" name="password">
            <RiLockPasswordLine {...iconProps} />
          </Input>
          <Input label="Repetir Senha" name="passwordRepeat">
            <RiLockPasswordLine {...iconProps} />
          </Input>
          <Button size="lg">Cadastrar</Button>
        </ContainerInputs>
      </FormContainer>
    </MainRegister>
  );
};

export default Register;
