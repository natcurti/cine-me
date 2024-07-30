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
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import ErrorMessage from "src/components/ErrorMessage";
import { formatName } from "src/utils/formatName";
import { useEffect } from "react";

const schema = z
  .object({
    name: z
      .string()
      .min(3, "Digite um nome válido")
      .transform((value) => formatName(value)),
    lastname: z
      .string()
      .min(3, "Digite um sobrenome válido")
      .transform((value) => formatName(value)),
    email: z
      .string()
      .min(1, "Campo obrigatório")
      .email("Digite um email válido")
      .transform((value) => value.toLocaleLowerCase()),
    password: z.string().min(5, "A senha deve conter no mínimo 5 caracteres"),
    passwordRepeat: z
      .string()
      .min(5, "A senha deve conter no mínimo 5 caracteres"),
  })
  .refine((values) => values.password === values.passwordRepeat, {
    message: "As senhas não coincidem",
    path: ["passwordRepeat"],
  });

type FormValues = z.infer<typeof schema>;

const Register = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm<FormValues>({
    defaultValues: {
      name: "",
      lastname: "",
      email: "",
      password: "",
      passwordRepeat: "",
    },
    mode: "onTouched",
    resolver: zodResolver(schema),
  });

  const iconProps = {
    fill: "#1884F7",
    size: 20,
  };

  const onSubmit = (values: FormValues) => {
    console.log(values);
  };

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful, reset]);

  return (
    <MainRegister>
      <FormContainer onSubmit={handleSubmit(onSubmit)}>
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
            <div>
              <Input label="Nome" name="name" register={register}>
                <FaRegUser {...iconProps} />
              </Input>
              {errors.name?.message && (
                <ErrorMessage>{errors.name.message}</ErrorMessage>
              )}
            </div>
            <div>
              <Input label="Sobrenome" name="lastname" register={register}>
                <FaRegUser {...iconProps} />
              </Input>
              {errors.lastname?.message && (
                <ErrorMessage>{errors.lastname.message}</ErrorMessage>
              )}
            </div>
          </ContainerName>
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
          <div>
            <Input
              label="Repetir Senha"
              name="passwordRepeat"
              isPasswordInput
              register={register}
            >
              <RiLockPasswordLine {...iconProps} />
            </Input>
            {errors.passwordRepeat?.message && (
              <ErrorMessage>{errors.passwordRepeat.message}</ErrorMessage>
            )}
          </div>
          <Button size="lg" type="submit">
            Cadastrar
          </Button>
        </ContainerInputs>
      </FormContainer>
    </MainRegister>
  );
};

export default Register;
