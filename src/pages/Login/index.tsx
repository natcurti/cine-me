import FormContainer from "src/components/FormContainer";
import {
  ContainerInputs,
  MainContainer,
  TypographyContainer,
} from "../Register/styled";
import Typography from "src/components/Typography";
import Input from "src/components/Input";
import { MdOutlineEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import Button from "src/components/Button";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import ErrorMessage from "src/components/ErrorMessage";
import { useSessionContext } from "src/hooks/custom";

const schema = z.object({
  email: z
    .string()
    .min(1, "Campo obrigatório")
    .email("Digite um email válido")
    .transform((value) => value.toLocaleLowerCase()),
  password: z.string().min(5, "A senha deve conter no mínimo 5 caracteres"),
});

type FormValues = z.infer<typeof schema>;

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "onTouched",
    resolver: zodResolver(schema),
  });

  const { login } = useSessionContext();

  const iconProps = {
    fill: "#1884F7",
    size: 20,
  };

  const onSubmit = (values: FormValues) => {
    login(values.email, values.password);
  };

  return (
    <MainContainer>
      <FormContainer onSubmit={handleSubmit(onSubmit)}>
        <TypographyContainer>
          <Typography element="h1" variant="h4">
            Entre com seu email e senha.
          </Typography>
        </TypographyContainer>
        <ContainerInputs>
          <div>
            <Input label="Email" name="email" register={register}>
              <MdOutlineEmail {...iconProps} />
            </Input>
            {errors.email?.message && (
              <ErrorMessage>{errors.email.message}</ErrorMessage>
            )}
          </div>
          <div>
            <Input
              label="Senha"
              name="password"
              register={register}
              isPasswordInput
            >
              <RiLockPasswordLine {...iconProps} />
            </Input>
            {errors.password?.message && (
              <ErrorMessage>{errors.password.message}</ErrorMessage>
            )}
          </div>
          <Button size="lg" type="submit">
            Entrar
          </Button>
        </ContainerInputs>
      </FormContainer>
    </MainContainer>
  );
};

export default Login;
