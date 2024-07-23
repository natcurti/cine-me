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
  h1: `
    font-family: "GilroyExtraBold",
    font-size: 4rem,
    line-height: 5.5rem
    `,
  h2: `
    font-family: "GilroyBold",
    font-size: 2.5rem,
    line-height: 3rem
    `,
  h3: `
    font-family: "GilroyMedium",
    font-size: 2.375rem,
    line-height: 3rem
    `,
  h4: `
    font-family: "GilroyRegular",
    font-size: 2rem,
    line-height: 2.5rem
    `,
  strong: `
    font-family: "GilroyRegular",
    font-size: 1.5rem,
    line-height: 2rem
    `,
  p: `
    font-family: "GilroyLight",
    font-size: 1rem,
    line-height: 1.5rem
    `,
};

const Typography = ({
  element = "p1",
  variant = "p",
  children,
}: ITypography) => {
  const htmlTag = elements[element];
  const HtmlTagStyled = styled(htmlTag)`
    ${styles[variant]}
  `;

  return <HtmlTagStyled>{children}</HtmlTagStyled>;
};

export default Typography;
