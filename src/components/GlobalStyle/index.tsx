import { createGlobalStyle } from "styled-components";
import GilroyRegular from "src/assets/font/Gilroy-Regular.woff2";
import GilroyBold from "src/assets/font/Gilroy-Bold.woff2";

const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: "GilroyRegular";
        src: url(${GilroyRegular});
    }

    @font-face {
        font-family: "GilroyBold";
        src: url(${GilroyBold});
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "GilroyRegular", sans-serif;
        color: ${(props) => props.theme.colors.white}
    }

    body {
        background-color: ${(props) => props.theme.colors.black};
    }

    #root{
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    li {
        list-style: none;
    }

    a {
        text-decoration: none;
    }
`;

export default GlobalStyle;
