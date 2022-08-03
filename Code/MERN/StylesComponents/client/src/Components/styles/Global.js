import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;0,500;0,900;1,100&display=swap');

*{
    box-sizing: border-box;
}

body{
    background: ${({theme}) => theme.colors.body};
    color: hsl(192, 100%, 9%);
    font-family: 'Roboto', sans-serif;
    font-size:1.15em;
    margin:0
}

p {
    opacity:0.6;
    line-height: 1.5;
}

img{
    max-width: 100%;
}


`
export default GlobalStyles