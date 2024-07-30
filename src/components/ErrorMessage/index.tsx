import React from "react";
import Typography from "../Typography";
import { ContainerErrorMessage } from "./styled";

const ErrorMessage = ({ children }: { children: React.ReactNode }) => {
  return (
    <ContainerErrorMessage>
      <Typography element="p1" variant="p">
        {children}
      </Typography>
    </ContainerErrorMessage>
  );
};

export default ErrorMessage;
