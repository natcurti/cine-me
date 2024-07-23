import { createGlobalStyle } from "styled-components";
import GilroyLight from "src/assets/font/Gilroy-Light.otf";
import GilroyExtraBold from "src/assets/font/Gilroy-ExtraBold.otf";

const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: "GilroyLight";
        src: url(${GilroyLight});
    }

    @font-face {
        font-family: "GilroyExtraBold";
        src: url(${GilroyExtraBold});
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "GilroyLight", sans-serif;
    }
`;

export default GlobalStyle;
