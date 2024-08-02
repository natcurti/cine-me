import { createGlobalStyle } from "styled-components";
import GilroyLight from "src/assets/font/Gilroy-Light.woff2";
import GilroyMedium from "src/assets/font/Gilroy-Medium.woff2";
import GilroyRegular from "src/assets/font/Gilroy-Regular.woff2";
import GilroyBold from "src/assets/font/Gilroy-Bold.woff2";
import GilroyExtraBold from "src/assets/font/Gilroy-ExtraBold.woff2";

const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: "GilroyLight";
        src: url(${GilroyLight});
    }

    @font-face {
        font-family: "GilroyMedium";
        src: url(${GilroyMedium});
    }

    @font-face {
        font-family: "GilroyRegular";
        src: url(${GilroyRegular});
    }

    @font-face {
        font-family: "GilroyBold";
        src: url(${GilroyBold});
    }

    @font-face {
        font-family: "GilroyExtraBold";
        src: url(${GilroyExtraBold});
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
