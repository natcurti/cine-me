import { FieldValues, Path, UseFormRegister } from "react-hook-form";
import {
  ContainerInputAndIcon,
  InputStyled,
  LabelStyled,
  PasswordIcon,
  SpanIcon,
} from "./styled";
import { useState } from "react";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";

interface IInput<T extends FieldValues> {
  name: Path<T>;
  label: string;
  isPasswordInput?: boolean;
  register: UseFormRegister<T>;
  children: React.ReactNode;
}

const Input = <T extends FieldValues>({
  name,
  label,
  isPasswordInput,
  register,
  children,
}: IInput<T>) => {
  const [showPassword, setShowPassword] = useState(false);

  const iconProps = {
    fill: "#0A070B",
    size: 20,
  };

  return (
    <>
      <LabelStyled htmlFor={name}>{label}</LabelStyled>
      <ContainerInputAndIcon>
        <InputStyled
          id={name}
          placeholder={label}
          {...register(name)}
          type={isPasswordInput && !showPassword ? "password" : "text"}
        />
        <SpanIcon>{children}</SpanIcon>
        {isPasswordInput && (
          <PasswordIcon
            onClick={() => setShowPassword(!showPassword)}
            type="button"
          >
            {!showPassword ? (
              <IoMdEye {...iconProps} />
            ) : (
              <IoMdEyeOff {...iconProps} />
            )}
          </PasswordIcon>
        )}
      </ContainerInputAndIcon>
    </>
  );
};

export default Input;
