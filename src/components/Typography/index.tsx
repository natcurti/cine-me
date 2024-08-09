import styled from "styled-components";

interface ITypography {
  element: "h1" | "h2" | "h3" | "h4" | "subtitle" | "p1";
  variant: "h1" | "h2" | "h3" | "h4" | "strong" | "p";
  children: React.ReactNode;
}

const elements = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  subtitle: "strong",
  p1: "p",
};

const styles = {
  h1: {
    fontFamily: "GilroyBold",
    fontSize: "2.25rem",
    lineHeight: "2.5rem",
  },
  h2: {
    fontFamily: "GilroyBold",
    fontSize: "1.75rem",
    lineHeight: "2rem",
  },
  h3: {
    fontFamily: "GilroyBold",
    fontSize: "1.5rem",
    lineHeight: "2rem",
  },
  h4: {
    fontFamily: "GilroyRegular",
    fontSize: "1.25rem",
    lineHeight: "1.75rem",
  },
  strong: {
    fontFamily: "GilroyBold",
    fontSize: "1rem",
    lineHeight: "1.5rem",
  },
  p: {
    fontFamily: "GilroyRegular",
    fontSize: "0.85rem",
    lineHeight: "1rem",
  },
};

const HtmlTagStyled = styled.span``;

const Typography = ({
  element = "p1",
  variant = "p",
  children,
}: ITypography) => {
  const htmlTag = elements[element];

  return (
    <HtmlTagStyled as={htmlTag} style={styles[variant]}>
      {children}
    </HtmlTagStyled>
  );
};

export default Typography;
